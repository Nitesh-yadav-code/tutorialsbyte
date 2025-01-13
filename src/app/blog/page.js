
import Image from 'next/image'
import { AiOutlineClockCircle } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";

import {get_all_post} from '../lib/api' 
import Link from 'next/link';
import moment from 'moment';


  
const blog = async() => {
    // const [blogData, setBlogData] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts')
    //         const data = await response.json();

    //         setBlogData(data)
    //     }

    //     fetchData();
    // }, [])
const blogData = await get_all_post();
    return (
        <>
            <section className='articals p-2  container mx-[10%] w-fit overflow-hidden'>
                <div className="heading  py-6">
                    <h3 className='flex justify-center font-bold text-3xl md:text-4xl'>Recent Articles</h3>
                </div>

                <div className="all-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {blogData && blogData.map((post) => {
                        return <div key={post.id}>
                            <div className="card border-0 shadow-lg dark:bg-slate-800 p-4">
                                <div className="card-image cursor-pointer">

                                    {/* {post.yoast_head_json.og_image?(
                                    <>
                                    <Link href={`/blog/${post.slug}`}>
                                    <Image src={post.yoast_head_json.og_image[0].url} alt='Image' width={400} height={250} />
                                    </Link>
                                    </>):("")
                                    
                                } */}
                                    
                                </div>

                                <div className="title cursor-pointer py-3">
                                    <Link href={`/blog/${post.slug}`}>
                                    <h3 className='text-xl font-black text-ellipsis leading-8 tracking-wide'>{post.title.rendered}</h3>
                                    </Link>
                                </div>

                                <div className="time-date mt-2 flex  place-content-between">
                                    <p className='flex space-x-2 items-center'> <AiOutlineClockCircle /> <span>{moment(post.date).format(" MMMM D, YYYY")}</span></p>
                                    <p className='flex space-x-1 items-center'> <AiFillThunderbolt /> <span>{post._embedded['wp:term'][0][0].name}</span></p>
                                </div>
                            </div>
                        </div>
                    })

                    }
                </div>
            </section>
        </>
    )
}

export default blog
