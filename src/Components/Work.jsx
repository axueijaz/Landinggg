import React from 'react';

import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: 'Pick Meals',
      text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.',
    },
    {
      image: ChooseMeals,
      title: 'Choose How Often',
      text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.',
    },
    {
      image: DeliveryMeals,
      title: 'Fast Deliveries',
      text: 'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.',
    },
  ];

  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Work</p>
        <h1 className='primary-heading'>How It Works</h1>
        <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore veniam? Eveniet numquam aliquam, obcaecati culpa ipsum suscipit commod
            
        </p>
      </div>
      <div className='work-section-bottom'>
        {workInfoData.map((item, index) => (
          <div key={index} className='work-section-info'>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;