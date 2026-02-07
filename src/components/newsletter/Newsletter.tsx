import React from 'react'

const Newsletter = () => {
  return (
<section className='relative max-w-7xl m-auto bg-blue-600  rounded-4xl '>
    {/* gradient background */}
    <div className='absolute bg-blue-700 top-0 right-0 w-1/2 h-full chipset-slant rounded-tr-4xl rounded-br-4xl '></div>
    <div className='flex justify-between items-center flex-wrap gap-6 px-8 py-16'>
        <div>
        <h2 className='text-3xl font-bold text-white'>Subscribe Newsletter</h2>
        <p className='text-xl font-medium text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>

    <div className='z-10'>
        <input type="email" placeholder='Enter your email' className='w-64 p-2 rounded-l-md focus:outline-none bg-white' />
        <button className='w-28 bg-green-500 text-white px-4 py-2 rounded-r-md'>Discover</button>
    </div>
    </div>
    <style>
    {`
    .chipset-slant {
        clip-path: polygon(20% 30%, 100% 0%, 100% 100%, 0% 100%);

    `}
    </style>
</section>  )
}

export default Newsletter