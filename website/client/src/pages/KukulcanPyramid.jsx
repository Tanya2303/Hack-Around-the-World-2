import React from 'react'
import { GiProtectionGlasses } from "react-icons/gi";

export default function KukulcanPyramid() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white py-6'>El Castillo</div>

            <div className='p-4 space-y-10 flex flex-wrap-reverse md:space-y-0 md:grid md:grid-cols-2 text-white'>

                <div>
                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        El templo, known as the Temple of Kukulcán (or also just as Kukulcán), is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza archaeological site in the Mexican state of Yucatán. The temple building is more formally designated by archaeologists as Chichen Itza Structure 5B18.
                    </div>

                    <div className='text-xl text-white text-justify my-6 mx-6'>
                        Built by the pre-Columbian Maya civilization sometime between the 8th and 12th centuries AD, the building served as a temple to the deity Kukulcán, the Yucatec Maya Feathered Serpent deity closely related to Quetzalcoatl, a deity known to the Aztecs and other central Mexican cultures of the Postclassic period. It has a substructure that likely was constructed several centuries earlier for the same purpose.</div>
                </div>

                <div className='rounded-xl'>
                    <iframe src="/map/kukulcanpyramid.html" height="500px" width="700px" className='rounded-xl' />
                    <div classname="">
                        <GiProtectionGlasses className='w-10 h-10 text-gray-900 -mt-16 ml-2 cursor-pointer p-2' />
                    </div>
                </div>
            </div>

        </div>
    )
}
