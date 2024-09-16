import React from 'react'
import TestimonialList from './TestimonialList'

const Testimonial = () => {
  return (
    <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">What Our Patient say</h2>
                <p className="text__para text-center mt-3">
                    World-class care for everyone. Our health system offers unmatched,
                    expert health care.
                </p>
            </div>
            <TestimonialList />
        </div>
    </section>
  )
}

export default Testimonial