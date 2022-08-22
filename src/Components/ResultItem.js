import React from 'react'

function ResultItem({ props }) {
	return (
		<div className='flex flex-col py-4 w-1/4'>
			<a href={props.link} target="_blank" rel="noreferrer"><span className='text-lg text-blue-600 underline'>{props.title}</span></a>
			<p>
				<span className=''>{props.previewStart}</span>
				<span className='font-bold'>{props.previewCenter}</span>
				<span className=''>{props.previewEnd}</span>
			</p>
		</div>
	)
}

export default ResultItem