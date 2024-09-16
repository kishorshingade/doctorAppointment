import React from 'react';
import faqimg from '../../assets/images/faq-img.png';
import FaqList from './FaqList';

const Faq = () => {
  return (
    <section>
        <div className="container">

            <div className="flex justify-between gap-[50px] lg:gap-0">

                <div className="w-1/2 hidden md:block">
                    <img src={faqimg} alt="" />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className='heading'>Most Questions by our beloved Patients</h2>
                    <FaqList />
                </div>

            </div>

             

        </div>
    </section>
  )
}

export default Faq