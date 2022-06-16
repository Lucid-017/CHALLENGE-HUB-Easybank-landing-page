import React from 'react'
import Image from '../asset/image-mockups.png'

const Intro = () => {
  return (
    <div className=' grid lg:grid-cols-2 gap-10 p-20  '>
      <div className="px-10">
        <h1 className='text-3xl capitalize font-semibold pb-5'>Next generation <br /> digital banking</h1>
        <p className='mb-8 '>
        

Take your financial life online. Your Easybank account will be a one-stop-shop 
for spending, saving, budgeting, investing, and much more.
          </p>
        <a href="" className="btn mt-10 p-3 font-bold text-white bg-Limegreen-400 hover:bg-Limegreen-500 rounded-full">Request Invite</a>
      </div>
      <div className="-z-50">
        <img src={Image} className='adjust ad ' />
      </div>

    
    </div>
  )
}

export default Intro