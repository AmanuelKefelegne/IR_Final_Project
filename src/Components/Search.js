import React from 'react'
import ResultItem from './ResultItem'
import {toprev} from '../Oprations/CosinSimi';
import {files} from '../Oprations/Query';

import { useParams } from "react-router-dom"
import { SearchBar } from './SearchHome';

function Search() {

    const { query } = useParams();

    return (
        <div className='flex flex-col space-y-2'>
            <div className="navbar sticky top-0 bg-base-100 space-x-5 px-8">
                <span className='font-bold text-2xl'>Logo</span>
                <SearchBar props={{searchresults: true, query}} />
            </div>
            <div className='bg-slate-800 h-[0.2px] w-full'></div>
            <div className='px-8'>
                {
                    [1].map(() => (
                        <ResultItem props={{ title: files[toprev[0]], desc: "This will be the description of the Main Title - Replace With Variable or something", link:"https://google.com" }} />
                    ))
                }
            </div>
        </div>
    )
}

export default Search