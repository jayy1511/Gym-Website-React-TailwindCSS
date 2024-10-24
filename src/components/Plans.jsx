import React from 'react'
import Planscard from '../layouts/Planscard'

const Plans = () => {
  return (
    <div id="Plans" className='min-h-screen flex flex-col justify-center items-center md:px-32 px-5'>
      <h1 className=' text-3xl font-semibold text-center '>Gym Membership</h1>

      <div className='flex flex-col md:flex-row justify-center mt-10 gap-8'>
        <Planscard title='CLASSIC MONTHLY' price="30"/>
        <Planscard title="ACCESS MONTHLY" price="45" />
        <Planscard title="ULTIMATE MONTHLY" price="50"/>
      </div>
    </div>
  )
}

export default Plans
