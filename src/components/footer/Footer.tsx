import React from 'react'

const Footer = () => {
  return (
<footer>
    <div className='container mx-auto px-4 py-8 text-center text-gray-600'>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className='flex justify-center mt-4 space-x-4'>
            <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors duration-200'>Privacy Policy</a>
            <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors duration-200'>Terms of Service</a>
            <a href="#" className='text-gray-600 hover:text-gray-800 transition-colors duration-200'>Contact Us</a>
        </div>
    </div>
    
</footer>  )
}

export default Footer