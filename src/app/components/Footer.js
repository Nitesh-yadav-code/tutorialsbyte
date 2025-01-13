import React from 'react'
import Link from 'next/link'
import {AiFillLinkedin,AiFillYoutube,AiFillInstagram,AiFillFacebook,AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="footer p-8 mt-4 bg-slate-900 text-base-content shadow-top">
      <div className='mx-0 md:mx-12  grid grid-cols-1  md:grid-cols-3'>
      <div className='main-content'>
            <div className='logo-title text-center '>
                <h1 className='text-4xl font-semibold text-slate-200 my-3'>Tutorials</h1>
                <p className='text-slate-300'>Tutorials is an initiative to help beginners who wants to learn the basics of programming and how web development is done.</p>
            </div>

            <div className="links mt-4 ">
              <h2 className='text-4xl text-center text-slate-200 '>Stay Connected</h2>
              <div className="all-links flex text-4xl space-x-8 items-center justify-center mt-6">
                <Link aria-label='linkdin' href='https://www.linkedin.com/in/-nitesh-yadav/' ><p className='cursor-pointer'><AiFillLinkedin/></p></Link>
                <Link aria-label='youtube' href= 'https://www.youtube.com/@intellectualcoder'><p className='cursor-pointer'><AiFillYoutube color='red'/></p></Link>
                <Link aria-label='instagram' href='https://github.com/Nitesh-yadav-code'><p className='cursor-pointer'><AiFillInstagram color='pink'/></p></Link> 
                <Link aria-label='facebook' href='https://github.com/Nitesh-yadav-code'><p className='cursor-pointer'><AiFillFacebook color='blue'/></p></Link>
                <Link aria-label='github' href='https://github.com/Nitesh-yadav-code'><p className='cursor-pointer'><AiFillGithub color='white'/></p></Link> 
              </div>
            </div>
        </div>

        <div className='pages mt-4 space-y-1 text-center'>
          <h2 className='text-3xl mb-2 text-slate-200'>Pages</h2>
          <p className='text-lg cursor-pointer text-slate-300'>About Us</p>
          <p className='text-lg cursor-pointer text-slate-300'>Privacy Policy</p>
          <p className='text-lg cursor-pointer text-slate-300'>Tutorials</p>
        </div>

        <div className='recent-tutorial'>
        <h2 className='text-3xl my-4 text-slate-200'>Top Tutorials</h2>
        <p className='text-lg text-slate-300'> <span>1.</span> How to use Particles Js in React with react-tsparticles</p>
        </div>
      </div>
     
     <div className='mt-3'>
      <p className='text-slate-600 dark:text-slate-600 text-center '>All rights Reserved</p>
     </div>
  </footer>
  )
}

export default Footer