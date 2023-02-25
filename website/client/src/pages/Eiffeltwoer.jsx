import React from 'react'
import { GiProtectionGlasses } from "react-icons/gi";

export default function Eiffeltwoer() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>Eiffel Tower</div>

            <div className='p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white'>

                <div>
                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        The Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: tour Eiffel [tuʁ‿ɛfɛl] (listen)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.

                    </div>

                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        Locally nicknamed "La dame de fer" (French for "Iron Lady"), it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world.[3] The Eiffel Tower is the most visited monument with an entrance fee in the world: 6.91 million people ascended it in 2015. It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site ("Paris, Banks of the Seine") in 1991.[4]
                    </div>
                </div>

                <div className='rounded-xl'>
                    <iframe src="/map/eiffeltwoer.html" height="500px" width="700px" className='rounded-xl' />
                    <div classname="">
                        <GiProtectionGlasses className='w-10 h-10 text-gray-900 -mt-16 ml-2 cursor-pointer p-2' />
                    </div>
                </div>
            </div>

        </div>
    )
}
