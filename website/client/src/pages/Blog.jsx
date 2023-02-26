import React from 'react'
import { Link } from 'react-router-dom'
import B1 from "../assets/b1.jpg"
import B2 from "../assets/b2.jpg"
import B3 from "../assets/b3.jpg"

export default function Blog() {

  let fetchedposts

  return (
    <div>
      <div className='text-center text-6xl font-base text-white py-6'>Travel Blogs</div>

      <div className='-mt-20 ml-6'>
        <Link to="/write">
          <button className='bg-tertiary text-white text-2xl px-4 py-2 rounded-lg'>Write Blog</button>
        </Link>
      </div>


      <div className='flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2'>
        {fetchedposts}

      </div>

    </div>
  )
}
