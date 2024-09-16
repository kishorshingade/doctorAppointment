import React from 'react';
import heroImg1 from '../assets/images/hero-img01.png';
import heroImg2 from '../assets/images/hero-img02.png';
import heroImg3 from '../assets/images/hero-img03.png';

import icon1 from '../assets/images/icon01.png';
import icon2 from '../assets/images/icon02.png';
import icon3 from '../assets/images/icon03.png';
import featureImg from '../assets/images/feature-img.png';
import videIcon from '../assets/images/video-icon.png';

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/about/About';
import Service from './Service';
import ServiceList from '../components/servicelist/ServiceList';
import DoctorsList from '../components/doctors/DoctorsList';
import Faq from '../components/Faq/Faq';
import Testimonial from '../components/testimonial/Testimonial';


const Home = () => {
  return (
   <>
     {/* ============== Hero Section ================ */}
     <>
     <section className="hero__section pt-[60px] 2xl:h-[800px]">

        <div className="container">
           <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
              {/* =========hero containet======== */}

             <div>
              <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
                  md:leading-[70px]">We Help Patients live a healthy, longer life.</h1>
                  <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, porro, quos laudantium earum culpa perferendis provident odit aliquam facere labore ipsa voluptas sint obcaecati eveniet quaerat. Totam voluptatibus quisquam asperiores.</p>
                  <button className="btn">Request an Appointment</button>
              </div>

              {/* ========== hero counter ========== */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                  
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                    text-headingColor">30+</h2>

                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                     <p className="text__para">Years of Experiance</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                    text-headingColor">15+</h2>

                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                     <p className="text__para">Clinic Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                    text-headingColor">100%</h2>

                    <span className="w-[100px] h-2 bg-irishBlueColor rounded-full block mt-[-14px]"></span>
                     <p className="text__para">Patient Satisfaction</p>
                  </div>


                  

              </div>


             </div>


             {/* ========= Hero Content ======== */}
             <div className="flex gap-[30px] justify-end">

              <div>
                <img src={heroImg1} alt="" className="w-full" />
              </div>

              <div className="mt-[30px]">
                <img src={heroImg2} alt="" className="w-full mb-[30px]" />
                <img src={heroImg3} alt="" className="w-full " />

              </div>

             </div>

              
           </div>
        </div>

     </section>
      {/* ============== Hero Section end  ================ */}


 

     <section>

      <div className="container">

        <div className='lg:w-[470px] mx-auto'>
         <h2 className='heading text-center'>Provide the Best Medical Service</h2>
         <p className='text__para text-center'>World-class care for everyone. Our Health System offers unmatched,
          expert health care.
         </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
           
           <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                 <img src={icon1} alt="" />
              </div>

              <div className="mt-[30px]">
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Doctor</h2>
                 <p className='text-[16px] leading-7 text-textColor font-[400] mt-[4] text-center'>World-class care for everyone. Our Health System offers unmatched,
                     expert health care.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group hover:bg-purpleColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>


           </div>


           <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                 <img src={icon2} alt="" />
              </div>

              <div className="mt-[30px]">
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Location</h2>
                 <p className='text-[16px] leading-7 text-textColor font-[400] mt-[4] text-center'>World-class care for everyone. Our Health System offers unmatched,
                     expert health care.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group hover:bg-purpleColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>


           </div>


           <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                 <img src={icon3} alt="" />
              </div>

              <div className="mt-[30px]">
                 <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Book Appointment</h2>
                 <p className='text-[16px] leading-7 text-textColor font-[400] mt-[4] text-center'>World-class care for everyone. Our Health System offers unmatched,
                     expert health care.
                </p>
                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                mx-auto flex items-center justify-center group hover:bg-purpleColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>
              </div>


           </div>  



        </div>


      </div>
     </section>

     <About/>

    <Service />


     {/* ================ Feature Section Start =============== */}

     <section>

      <div className="container">

         <div className="flex items-center justify-between flex-col lg:flex-row">
           
           {/* ========= feature containt ============= */}
           <div className="xl:w-[670px]">

               <h2 className="heading">Get Virtual Treatment <br /> anytime.</h2>
              
               <ul className="pl-4">
                  <li className="text__para mb-2 m mt-2">
                     1.Schedule the appointment directly.
                  </li>
                  <li className="text__para mb-2">
                     2.search for your physician here, and contact their office
                  </li>
                  <li className="text__para mb-2">
                     3.View our physicians who are accepting new Patients,use the online
                     Scheduling tool to select an appointment time
                  </li>
               </ul>
                 <Link to="/"><button className="btn">Learn More</button></Link>
                      
           </div>

             {/* ========= feature img ============= */}
             <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                  <img src={featureImg} className='w-3/4' alt="" />

                  <div className="w=[150px] lg:w-[248px] bg-white absolute bottom-[50px] 
                  left-0 md:bottom=[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px]
                  rounded-[10px]">
                     
                     <div className="flex items-center justify-between ">
                         <div className="flex items-center gap-[6px] lg:gap-3">
                               <p className='text-[10px] leading-[10px] lg:text-[14px]
                               lg:leading-5 text-headingColor font-[600]'>Tue, 24</p>

                              <p className='text-[10px] leading-[10px] lg:text-[14px]
                               lg:leading-5 text-textColor font-[400]'>10:00AM</p>
                         </div>
                         <span className="w-5 h-5 lg:w-[34px] lg:h-[34x] flex items-center justify-center
                          bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                   <img src={videIcon} alt="" />
                         </span>
                     </div>

                  </div>
             </div>
                  
         </div>

      </div>

     </section>

      {/* ================ Feature Section End =============== */}



      {/* ================ Doctors Section Start =============== */}

         <section>
             
           <div className="container">
              
              <div className="xl:w-[470px] mx-auto">
                    
                <h2 className='heading text-center'>Our Great Doctors</h2>    
                   <p className="text__para text-center">
                     World-class care for everyone. our health System offers unmatched,expert health care.
                   </p>
              </div>
              
              <DoctorsList/>

           </div>

         </section>
 
       {/* ================ Doctors Section End =============== */}

       {/* ================ FAQ Section Start =============== */}
        <Faq/>
       {/* ================ FAQ Section End =============== */}

       {/* ================ Testimonial Section Start =============== */}
        <Testimonial />
       {/* ================ Testimonial Section End =============== */}
          

     </>

   </>
  )
}

export default Home