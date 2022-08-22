import React, { useEffect } from 'react'
import weightedTerms from '../Assets/docWeightedTermsFile.json';

function UseSearch() {

    const search = (query) => {
        const words = query.split(" ");

        const data = {
            individualResults: [],
            combinedResult: []
        };

        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let results = _searchWord(word);

            data.individualResults.push({
                word,
                results
            });

            
            results?.forEach(result => {
                let weight = data.combinedResult[result.file];

                if (weight === undefined)
                    data.combinedResult[result.file] = result.weight;
                else {
                    data.combinedResult[result.file] = weight + result.weight
                }
            });

            data.combinedResult.sort((a, b) => b[Object.keys(b)[0]] > a[Object.keys(a)[0]]);
        }

        return data;
    }

    const _searchWord = (query) => {
        try {
            const result = weightedTerms[query];
            if (!result) {
                console.log("Word not found");

                return;
            }

            // find more relevant documents
            result.sort((a, b) => b[Object.keys(b)[0]] - a[Object.keys(a)[0]]);

            return result.map(r => {
                return {
                    file: Object.keys(r)[0],
                    weight: Object.values(r)[0]
                };
            })
        } catch (e) {
            console.log("Error: " + e.message);
            return [];
        }
    }

    return { search }
}

export default UseSearch