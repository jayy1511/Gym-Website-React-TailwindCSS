import React from 'react'
import Planscard from '../layouts/Planscard'

const Plans = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5'>
      <h1 className=' etxt-4xl font-semibold text-center '>Gym Membership</h1>

      <div className='flex flex-col md:flex-row justify-center mt-10 gap-8'>
        <Planscard title='CLASSIC' price="30"/>
        <Planscard title="ACCESS" price="45" />
        <Planscard title="ULTIMATE" price="50"/>
      </div>
    </div>
  )
}

export default Plans
