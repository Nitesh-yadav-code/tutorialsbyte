'use client'
import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
export const YoutubeEmbed = ({video_Id, isSinglePost}) => {
  return (
    <div className='text-center'>
        <LiteYouTubeEmbed 
        id={video_Id}
        wrapperClass={isSinglePost?"mx-auto w-80 md:w-auto md:mx-40 h-auto yt-lite": "yt-lite"}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
    />
    </div>
  )
}
