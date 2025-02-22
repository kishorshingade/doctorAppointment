import React from 'react'
import { formateDate } from '../../utilies/formateDate'

const DoctorAbout = () => {
  return (
    <div>

        <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold
        flex items-center gap-2'>About of   <span className='text-irishBlueColor font-bold text-[24px] leading-9'>Harish Chaurasia</span>
        </h3>
         <p className="text__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet numquam, eveniet distinctio quaerat ut vel. Laboriosam facere sit unde reiciendis repellat, excepturi consectetur. Eligendi iusto necessitatibus, porro quasi similique blanditiis.
         </p>
        </div>

            
        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
             
             <ul className="pt-4 md:p-5">

                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irishBlueColor text-[15px] leading-6 font-semibold'>{formateDate('9-13-2009')} - {formateDate('9-13-2016')}</span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-6 font-medium text-textColor">New Appollo Hospital, Maharastra</p>
                       

                </li>

                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irishBlueColor text-[15px] leading-6 font-semibold'>{formateDate('12-04-2010')} - {formateDate('9-13-2014')}</span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
                    </div>
                    <p className="text-[14px] leading-6 font-medium text-textColor">New Appollo Hospital, Maharastra</p>
                       

                </li>

             </ul>

        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
             
             <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">

               <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate('9-13-2009')} - {formateDate('9-13-2016')}</span>
                <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
                    
                <p className="text-[14px] leading-6 font-medium text-textColor">New Appollo Hospital, Maharastra</p>
                    
               </li>

               <li className="p-4 rounded bg-[#fff9ea]">
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate('9-13-2009')} - {formateDate('9-13-2016')}</span>
                <p className="text-[16px] leading-6 font-medium text-textColor">Sr. Surgeon</p>
                    
                <p className="text-[14px] leading-6 font-medium text-textColor">New Appollo Hospital, Maharastra</p>
                    
               </li>

             </ul>

        </div>
           

    </div>
  )
}

export default DoctorAbout