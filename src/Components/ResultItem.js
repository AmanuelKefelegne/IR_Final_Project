import React from 'react'

function ResultItem({props}) {
  return (
  <div className='flex flex-col py-4 w-1/4'>
    <a href={props.link}><span className='text-lg text-blue-600 underline'>{props.title}</span></a>
    <span className=''>{props.desc}</span>
  </div>
  )
}

export default ResultItem