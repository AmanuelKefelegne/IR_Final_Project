import React, { useEffect, useState } from 'react'
import ResultItem from './ResultItem'

import { useParams } from "react-router-dom"
import { SearchBar } from './SearchHome';
import UseSearch from '../Hooks/UseSearch';

function Search() {

    const { query } = useParams();
    const useSearch = UseSearch();
    const [results, setResults] = useState();

    useEffect(() => {
        async function search() {
            let result = await useSearch.search(query);

            setResults(result);
        }

        search();
    }, [query]);

    return (
        <div className='flex flex-col space-y-2'>
            <div className="navbar sticky top-0 bg-base-100 space-x-5 px-8">
                <span className='font-bold text-2xl'>Logo</span>
                <SearchBar props={{ searchresults: true, query }} />
            </div>
            <div className='bg-slate-800 h-[0.2px] w-full'></div>
            <div className='px-8'>
                {
                    results && results.combinedResult &&
                    results.combinedResult.map((r) => (
                        <ResultItem key={r.file} props={{ title: r.file, previewStart: r.previewStart, previewCenter: r.previewCenter, previewEnd: r.previewEnd, link: `/${r.file}` }} />
                    ))
                }
            </div>
        </div>
    )
}

export default Search