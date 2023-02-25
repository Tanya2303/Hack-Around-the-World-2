import React from 'react'
import { Link } from 'react-router-dom'
import TajMahalImg from "../assets/Taj-Mahal-Agra-India.webp"
import ColosseoImg from "../assets/Colosseo_2020.jpg"
import EiffelTwoerImg from "../assets/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"
import RedFortImg from "../assets/Red-Fort-Old-Delhi-India.webp"
import GreatWallImg from "../assets/the-great-wall-of-china.jpg"
import KukulcanPyramidImg from "../assets/Kukulcán Pyramid.jpg"

export default function Explore() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>Explore</div>

            <div className='flex flex-wrap flex-col-2 justify-around w-full px-16 py-8 space-x-2'>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-56 rounded-2xl w-full object-cover" src={TajMahalImg} />
                    </div>
                    <div className='grid place-items-center'>
                        <Link to="/explore/tajmahal">
                            <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Explore</button>
                        </Link>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-56 rounded-2xl w-full object-cover" src={ColosseoImg} />
                    </div>
                    <div className='grid place-items-center'>
                        <Link to="/explore/colosseum">
                            <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Explore</button>
                        </Link>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-56 rounded-2xl w-full object-cover" src={EiffelTwoerImg} />
                    </div>
                    <div className='grid place-items-center'>
                        <Link to="/explore/eiffeltwoer">
                            <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Explore</button>
                        </Link>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-56 rounded-2xl w-full object-cover" src={KukulcanPyramidImg} />
                    </div>
                    <div className='grid place-items-center'>
                        <Link to="/explore/kukulcanpyramid">
                            <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Explore</button>
                        </Link>
                    </div>
                </div>

                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                    <div class="overflow-x-hidden rounded-2xl relative">
                        <img class="h-56 rounded-2xl w-full object-cover" src={GreatWallImg} />
                    </div>
                    <div className='grid place-items-center'>
                        <Link to="/explore/greatwall">
                            <button type="submit" class="m-2 bg-tertiary text-white py-2 px-6 rounded-md">Explore</button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
