"use client";
import { useState } from 'react';
import { blog_data } from '@/Assets/assets';
import NoteItem from './NoteItem';

const NoteList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button
          onClick={() => setMenu('All')}
          className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Lifestyle')}
          className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}
        >
          Lifestyle
        </button>
        <button
          onClick={() => setMenu('Startup')}
          className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu('Technology')}
          className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'py-1 px-4'}
        >
          Technology
        </button>
      </div>

      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data
          .filter(item => menu === "All" || item.category === menu)
          .map((item, index) => (
            <NoteItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default NoteList;
