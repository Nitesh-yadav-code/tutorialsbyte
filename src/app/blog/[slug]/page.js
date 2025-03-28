
import React from 'react'
import { get_single_post } from '../../lib/api'
import Content from '@/app/components/Content';
import Image from 'next/image';
import TopContentPost from '@/app/components/TopContentPost';
import { YoutubeEmbed } from '@/app/components/YoutubeEmbed';
const slug = async props => {
  const params = await props.params;

  const id = params.slug;
  const singlePost = await get_single_post(id);
  const content = singlePost.content.rendered;
  return (
    <div className='container w-full md:max-w-5xl mx-auto  '>

      <TopContentPost singlePost ={singlePost} />
      {/* {singlePost.acf.videoid ? (
          <div className="embed mt-5">
          <YoutubeEmbed video_Id={singlePost.acf.videoid} isSinglePost={true} />
          </div>
      ) : ""}
       */}
      {/* <div className='text-center mt-2'>

      <h2 className=' text-xl  md:text-2xl  font-medium text-red-200 dark:text-slate-200 '>Video Tutorial</h2>
      </div>  */}

      
      {/* <div className="thumbnail my-4">
        {singlePost.yoast_head_json.og_image ? (
          <>
            <Image src={singlePost.yoast_head_json.og_image[0].url} alt='Image' width={400} height={250} />
          </>) : ("")

        }
      </div> */}
      <div className='post-content  tracking-wide leading-normal  '>
        <Content content={content} />
      </div>

    </div>
  )
}

export default slug