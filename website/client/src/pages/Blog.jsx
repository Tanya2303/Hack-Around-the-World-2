import React from 'react'
import { Link } from 'react-router-dom'
import B1 from "../assets/b1.jpg"
import B2 from "../assets/b2.jpg"
import B3 from "../assets/b3.jpg"

export default function Blog() {
  return (
    <div>
      <div className='text-center text-6xl font-base text-white py-6'>Travel Blogs</div>

      <div className='-mt-20 ml-6'>
        <Link to="/write">
          <button className='bg-tertiary text-white text-2xl px-4 py-2 rounded-lg'>Write Blog</button>
        </Link>
      </div>


      <div className='flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2'>

        <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-xl w-full object-cover" src={B1} />
          </div>
          <div className='grid place-items-center'>
            <h1 className='text-xl'>Hidden Gems of Konkan - Ganeshgule</h1>
            <Link to="/hidden-gems-of-konkan-ganeshgule">
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Read blog</button>
            </Link>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-xl w-full object-cover" src={B2} />
          </div>
          <div className='grid place-items-center'>
            <h1 className='text-xl'>Road trip to beautiful Coastal Karnataka</h1>
            <Link to="/road-trip-to-beautiful-coastal-karnataka">
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Read blog</button>
            </Link>
          </div>
        </div>

        <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
          <div class="overflow-x-hidden rounded-2xl relative">
            <img class="h-56 rounded-xl w-full object-cover" src={B3} />
          </div>
          <div className='grid place-items-center'>
            <h1 className='text-xl'>Nagaon & Kashid Beach Trip</h1>
            <Link to="/nagaon-kashid-beach-trip">
              <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Read blog</button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}
