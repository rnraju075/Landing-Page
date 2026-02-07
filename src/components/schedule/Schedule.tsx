import React from 'react'
import statsWeb from "../../assets/stats.webp"
const Schedule = () => {
  return (
<section className='max-w-7xl m-auto grid grid-cols-2'>
    <div className='flex justify-center items-center'>
        <img src={statsWeb} alt="statsWeb" />
    </div>
    <div className='flex flex-col items-start space-y-6'>
        <div className='text-amber-600 font-medium'>Schedule</div>
        <div className='text-4xl font-bold'>Lorem ipsum dolor sit amet, consectetur elit. Animi, nostrum</div>
        <p className='font-small text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi corporis accusamus atque nemo sapiente magnam quibusdam. Nulla necessitatibus similique cumque dicta, debitis est magnam odit.</p>
        <a href="#" className='text-blue-600 font-medium'>Lorem ipsum dolor sit amet <span className='font-semibold text-xl'>→</span></a>
    </div>
</section>  )
}

export default Schedule