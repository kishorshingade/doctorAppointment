import React from 'react'

const Contact = () => {
  return <section>

     <div className="px-4 mx-auto max-w-screen-md">
         <h2 className='heading text-center'>Contact Us</h2>
         <p className='mb-8 lg:mb-16 font-light text-center text__para mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt consectetur, qui necessitatib</p>
        
         <form action="" className='space-y-8'>
              <div>
                <label htmlFor="email" className='from__label'>Your Email</label>
                <input type="email" id='eamil' placeholder='example@gmail.com' 
                className='form__input mt-1' />
              </div>

              <div>
                <label htmlFor="subject" className='from__label'>Subject</label>
                <input type="subject" id='subject' placeholder='Subject' 
                className='form__input mt-1' />
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor="message" className='from__label'>Your Message</label>
                <textarea rows="6" type="message" id='message' placeholder='Leave a Comment....' 
                className='form__input mt-1' />
              </div>
             
              <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
              

         </form>

     </div>

  </section>
}

export default Contact