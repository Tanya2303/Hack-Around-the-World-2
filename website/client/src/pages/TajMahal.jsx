import React from 'react'
import { GiProtectionGlasses } from "react-icons/gi";

export default function TajMahal() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>Taj Mahal</div>

            <div className='p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white'>

                <div>
                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/; lit. 'Crown of the Palace')[4][5][6] is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. </div>

                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects led by Ustad Ahmad Lahauri, the emperor’s court architect. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.
                    </div>
                </div>

                <div className='rounded-xl'>
                    <iframe src="/map/tajmahal.html" height="500px" width="700px" className='rounded-xl' />
                    <div classname="">
                        <GiProtectionGlasses className='w-10 h-10 text-gray-900 -mt-16 ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>

        </div>
    )
}
