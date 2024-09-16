import React from 'react'
import ServiceList from '../components/servicelist/ServiceList'

const Service = () => {
  return (
    <section>

    <div className="container">
       <div className="xl:w-[470px] mx-auto">

        <h2 className='heading text-center'>Our Medical Service</h2>
        <p className='text__para text-center mt-4'>World-class care for everyone. Our health System offers unmatched, expert health care</p>
       </div>

       <ServiceList/>
    </div>

  </section>
  )
}

export default Service