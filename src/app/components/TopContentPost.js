import React from 'react'

const TopContentPost = ({singlePost}) => {
  return (
    <div className='font-Poppins font-normal '>
        <div className="title topContentBg  py-4 rounded-md">
            <h1 className='text-gray-950 dark:text-slate-200 text-2xl mx-2 leading-8 tracking-wide md:text-3xl font-semibold text-center'>{singlePost.title.rendered}</h1>
        </div>
    </div>
  )
}

export default TopContentPost



{/* <div className=' title mt-6 flex pr-0 md:pr-8 mx-4 md:mx-16 py-4 bg-red-700'>
        <h1 className=' text-slate-900 dark:text-slate-100 lg:text-4xl md:text-4xl text-2xl font-bold tracking-wide leading-tight backdrop:'>{singlePost.title.rendered}</h1>
      </div> */}