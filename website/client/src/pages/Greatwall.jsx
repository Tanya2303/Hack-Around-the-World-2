import React from 'react'
import { GiProtectionGlasses } from "react-icons/gi";

export default function Greatwall() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>Great Wall of China</div>

            <div className='p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white'>

                <div>
                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng, literally "ten thousand li wall") is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC,[4] with selective stretches later joined by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains.
                    </div>

                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, regulation or encouragement of trade and the control of immigration and emigration.</div>
                </div>

                <div className='rounded-xl'>
                    <iframe src="/map/greatwall.html" height="500px" width="700px" className='rounded-xl' />
                    <div classname="">
                        <GiProtectionGlasses className='w-10 h-10 text-gray-900 -mt-16 ml-2 cursor-pointer p-2' />
                    </div>
                </div>
            </div>

        </div>
    )
}
