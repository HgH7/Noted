'use client'
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect,useState } from 'react'
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Footer from '@/Components/Footer';
import Link from 'next/link';

const page = () => {
  const params = useParams();
  const [data,setData] = useState(null);
  const fetchBlogData = ()=>{
      for(let i=0;i<blog_data.length;i++){
        if(Number(params.id)===blog_data[i].id){
          setData(blog_data[i])
          console.log(blog_data[i]);
          break;
        }
      }
  }
useEffect(()=>{
    fetchBlogData();
},[])
  return (data?<>
    <div className='bg-gray-200 px-5 py-5 md:px-12 lg:28 hight={23}'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
        <Image src={assets.logo} width={200} alt='' className='w-[130px] sm:w-auto'/>
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} alt=''/>
        </button>
      </div>
      <div className='text-center my-24'>
        <h1 className='text-2x1 sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60} alt=''/>
        <p className='mt-1 pb-2.5 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className = 'border-4 border-black shadow-[-7px_10px_1px_#000000]'src={data.image} width={1280} height={720} alt=''/>
      <h1 className='my-8 text-[26px] font-semibold'>introduction:</h1>
      <p>{data.description}</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self-Reflection and goal Settings</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 2: Self-Reflection and goal Settings</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Step 3: Self-Reflection and goal Settings</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
      <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae praesentium quasi quas nam, aut doloremque, corporis incidunt totam eligendi cupiditate placeat iure voluptate illum quo eaque cumque aperiam earum.</p>
      <div className='my-24'>
        <p className='text-black font font-semibold my-4'>Share this Article in social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={50} alt=''/>
          <Image src={assets.twitter_icon} width={50} alt=''/>
          <Image src={assets.googleplus_icon} width={50} alt=''/>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>:<></>
  )
}

export default page