import weightedTerms from '../Assets/docWeightedTermsFile.json';

function UseSearch() {

    const distanceFromHighlightedWord = 30;

    const search = async (query) => {
        const words = query.split(" ");

        const data = {
            individualResults: [],
            combinedResult: []
        };

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let results = await _searchWord(word);

            data.individualResults.push({
                word,
                results
            });

            results?.forEach(result => {
                let r = data.combinedResult.find(r => r.file === result.file);

                if (r === undefined)
                    data.combinedResult.push(result);
                else {
                    r.weight = r.weight + result.weight;
                }
            });

            data.combinedResult.sort((a, b) => b.weight - a.weight);
        }

        return data;
    }

    const _searchWord = async (query) => {
        try {
            const result = weightedTerms[query];
            if (!result) {
                console.log("Word not found");

                return;
            }

            // find more relevant documents
            result.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);

            const data = [];

            for (let i = 0; i < result.length; i++) {
                const r = result[i];

                const file = Object.keys(r)[0];
                const weight = Object.values(r)[0];
                let previewStart = "", previewCenter = "", previewEnd = "";

                const fileContent = await (await fetch(`/${file}`)).text();
                let index = fileContent.search(query);

                // console.log(query, file, index, fileContent.length);

                if (index !== -1) {
                    const start = index < distanceFromHighlightedWord ? 0 : index - distanceFromHighlightedWord;

                    previewStart = fileContent.substring(start, index);
                    previewCenter = query;

                    const end = index + query.length;
                    previewEnd = fileContent.substring(end, end + distanceFromHighlightedWord);
                }

                data.push({
                    id: index,
                    file,
                    weight,
                    previewStart,
                    previewCenter,
                    previewEnd
                });
            }

            return data;
        } catch (e) {
            console.log("Error: " + e.message);
            return [];
        }
    }

    return { search }
}

export default UseSearch