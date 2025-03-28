import Image from 'next/image'
import React from 'react'
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { get_most_recent_post } from '../lib/api'
import { get_post_category } from '../lib/api';
import moment from 'moment';
import Link from 'next/link';
// import TypewriterClient from './TypewriterClient ';
const HeroPage = async () => {
    const recentPost = await get_most_recent_post();
    return (
        <>
            <div className='main container flex flex-col-reverse md:flex-row '>
                <div className="content mt-20 md:mt-28">
                    <div className="main-head container  w-3/4 md:w-fit lg:w-3/4  m-auto md:m-0 md:ml-[5.4rem]">
                        <h1 className='text-3xl md:text-4xl xl:text-6xl p-2 md:p-4 font-semibold'>Learn With Nitesh</h1>
                        <p className='text-xl md:text-2xl xl:text-4xl p-2 md:p-4 font-medium '> {/* whitespace-nowrap*/}
                            The Ultimate Resource for Excelling in Web Development 
                            {/* <TypewriterClient /> */}
                        </p>

                    </div>
                    <div className=" text-white btn w-fit md:w-full ml-16 md:ml-[105px] md:flex mt-6 space-x-6">
                        <Link href='/blog'>
                            <button className='p-4 rounded-md bg-sky-600 hover:bg-sky-700'>Start For Free</button>
                        </Link>
                        <Link href='https://www.youtube.com/@intellectualcoder'>
                            <button className='p-4 rounded-md bg-sky-600 hover:bg-sky-700'>Watch Video</button>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <Image src='/learn-to-code.svg' alt="Image" width={650} height={650} priority />
                </div>
            </div>

            <section className='articals p-6  container mx-[5%] w-fit'>
                <div className="heading py-6">
                    <h3 className='text-3xl md:text-4xl lg:text-5xl'>Latest Articles</h3>
                </div>

                <div className="all-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">

                    {recentPost.map((post) => {
                        return (
                            <div key={post.id}>
                                <div className="card border-0 shadow-lg dark:bg-slate-800 p-4">
                                    <div className="card-image cursor-pointer">

                                        {post.yoast_head_json.og_image ? (
                                            <>
                                                <div className='relative w-full h-52'> {/* Set the height to 48 (12rem) */}
                                                    <Image
                                                        className='mx-auto object-cover rounded-lg'
                                                        fill={true}
                                                        src={post.yoast_head_json.og_image[0].url}
                                                        alt='Image'
                                                        layout='fill'
                                                        objectFit='cover'
                                                    />
                                                </div>
                                            </>) : ("")

                                        }
                                    </div>

                                    <div className="title cursor-pointer py-3">
                                        <Link href={`/blog/${post.slug}`}>
                                            <h3 className='text-xl font-black leading-8 tracking-wide'>{post.title.rendered}</h3>
                                        </Link>
                                    </div>

                                    <div className="time-date mt-2 flex  place-content-between">
                                        <p className='flex space-x-2 items-center'> <AiOutlineClockCircle /> <span>{moment(post.date).format(" MMMM D, YYYY")}</span></p>
                                        <p className='flex space-x-1 items-center'> <AiFillThunderbolt /> <span>{post._embedded['wp:term'][0][0].name}</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </section>

        </>
    )
}

export default HeroPage