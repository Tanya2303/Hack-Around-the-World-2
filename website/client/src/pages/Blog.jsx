import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import B1 from "../assets/b1.jpg"
import B2 from "../assets/b2.jpg"
import B3 from "../assets/b3.jpg"

export default function Blog() {

  let fetchedposts

  const BACKEND_API = "http://localhost:1337"

  const [data, setData] = useState({ name: "", blog: "", writtenBy: "" })

  const updateState = (type, value) => {
    setData((data) => ({ ...data, [type]: value }))
  }

  const submitData = async (e) => {
    e.preventDefault()

    await axios(BACKEND_API, {
      method: "post",
      data: { ...data },
      headers: {
        "Content-Type": "application/json",
      },
    })

    setData({ name: "", blog: "", writtenBy: "" })
  }

  return (
    <div>
      <div className='text-center text-6xl font-base text-white py-6'>Travel Blogs</div>

      <div className='-mt-20 ml-6'>
        <Link to="/write">
          <button className='bg-tertiary text-white text-2xl px-4 py-2 rounded-lg'>Write Blog</button>
        </Link>
      </div>


      <div className='flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2'>
        {name}
        <div className="text-xl text-left text-white">{writtenBy}</div>
        <div className="text-xl text-white">
          {blog}
        </div>
      </div>

    </div>
  )
}
