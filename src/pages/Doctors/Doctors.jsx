import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorsCard from "../../components/doctors/DoctorsCard";
import TestimonialList from "../../components/testimonial/TestimonialList";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">

        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
                <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder-textColor" 
                placeholder="Search Doctor"/>
                  <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>

          </div>

        
        </div>

      </section>


      <section>
        <div className="conainer">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {
            doctors.map((doctor)=>(
                <DoctorsCard key={doctor.id} doctor={doctor} />
            ))
        }
    </div>
        </div>
      </section>
      <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">What Our Patient say</h2>
                <p className="text__para text-center mt-3">
                    World-class care for everyone. Our health system offers unmatched,
                    expert health care.
                </p>
            </div>
            <TestimonialList/>
        </div>
    </section>
    </>
  );
};

export default Doctors;
