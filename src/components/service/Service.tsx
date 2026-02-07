import React from 'react'
import { BiTime } from 'react-icons/bi'
import { BsStack } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { HiLightBulb } from 'react-icons/hi'

const Service = () => {
    const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more"
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives", 
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more"
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more"
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more"
    }
  ]
  
  return (
    <section className='max-w-7xl m-auto mt-16 grid grid-cols-2 gap-16'>
        <div className='flex flex-col justify-center items-start'>
            <h1 className='text-4xl font-bold'>Future of support with <span className='block'> new shape</span></h1>
            <p className='text-xl font-small mt-2'>Experience enhanced support capabilities with our innovative approach to service delivery.</p>
            <ul className='list-disc list-inside mt-4 text-gray-600'>
                <li>Enhanced accessibility</li>
                <li>Improved response times</li>
            </ul>
        </div>
        <div className='grid grid-cols-2 gap-8'>
            {
                services.map((service, index) => (
                    <div key={index} className="flex flex-col items-start space-x-4 mb-6">
                        <div className='mb-2'>{service.icon}</div>
                        <div className=''>
                            <h3 className="text-xl font-semibold ">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                        <a href={service.link} className="text-blue-500 mt-2 uppercase">Learn more</a>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Service