import React from 'react'
import { GiProtectionGlasses } from "react-icons/gi";

export default function Colosseum() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>Colosseum</div>

            <div className='p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white'>

                <div>
                    <div className='text-xl text-white text-justify my-6 mx-6'>
                    The Colosseum (/ˌkɒləˈsiːəm/ KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age. Construction began under the emperor Vespasian (r. 69–79 AD) in 72[1] and was completed in 80 AD under his successor and heir, Titus (r. 79–81).[2] Further modifications were made during the reign of Domitian (r. 81–96).[3] The three emperors who were patrons of the work are known as the Flavian dynasty, and the amphitheatre was named the Flavian Amphitheatre (Latin: Amphitheatrum Flavium; Italian: Anfiteatro Flavio [aɱfiteˈaːtro ˈflaːvjo]) by later classicists and archaeologists for its association with their family name (Flavius).</div>

                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects led by Ustad Ahmad Lahauri, the emperor’s court architect. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.
                    </div>
                </div>

                <div className='rounded-xl'>
                    <iframe src="/map/colosseum.html" height="500px" width="700px" className='rounded-xl' />
                    <div classname="">
                        <GiProtectionGlasses className='w-10 h-10 text-gray-900 -mt-16 ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>

        </div>
    )
}
