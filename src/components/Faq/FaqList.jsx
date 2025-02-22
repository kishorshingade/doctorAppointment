import React from 'react';
import { faqs } from '../../assets/data/faq';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <div className='mt-[38px]'>
          {faqs.map((item, index) => (
    <FaqItem item={item} key={index} /> 
          ))}
 
          
    </div>
  )
}

export default FaqList