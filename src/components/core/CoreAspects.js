/*import React from 'react';
import '../../assets/styles/CoreAspects.css';

// Import images
import deliveryTruck from '../../assets/images/Core/delivery truck.jpg';
import qualityControl from '../../assets/images/Core/quality control.jpg';
import securePayment from '../../assets/images/Core/Secure Payment Icon.webp';

const CoreAspects = () => {
  const aspects = [
    {
      imgSrc: deliveryTruck,
      title: 'Fast Delivery',
      description: 'We ensure timely delivery of your products with our efficient logistics network.'
    },
    {
      imgSrc: qualityControl,
      title: 'Quality Control',
      description: 'All products go through rigorous quality checks to ensure you receive the best.'
    },
    {
      imgSrc: securePayment,
      title: 'Secure Payment',
      description: 'Your transactions are protected with state-of-the-art security features.'
    }
  ];

  return (
    <div className="core-aspects">
      <h2>Core Aspects Service</h2>
      <div className="aspects-row">
        {aspects.map((aspect, index) => (
          <div key={index} className="aspect">
            <img src={aspect.imgSrc} alt={aspect.title} />
            <h3>{aspect.title}</h3>
            <p>{aspect.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreAspects;*/


import React from 'react';
import '../../assets/styles/CoreAspects.css';

// Import images
import deliveryTruck from '../../assets/images/Core/delivery truck.jpg';
import qualityControl from '../../assets/images/Core/quality control.jpg';
import securePayment from '../../assets/images/Core/Secure Payment Icon.webp';
import professionalSupport from '../../assets/images/Core/hand2.jpg';

const CoreAspects = () => {
  const aspects = [
    {
      imgSrc: securePayment,
      title: 'Secure Payment',
      description: 'Your transactions are protected with state-of-the-art security features.'
    },
    {
      imgSrc: deliveryTruck,
      title: 'Fast Delivery',
      description: 'We ensure timely delivery of your products with our efficient logistics network.'
    },
    {
      imgSrc: qualityControl,
      title: 'Quality Control',
      description: 'All products go through rigorous quality checks to ensure you receive the best.'
    },
    {
      imgSrc: professionalSupport,
      title: 'Professional Support',
      description: 'Our expert team is available to assist you with any queries or issues you may have.'
    }
  ];

  return (
    <div className="core-aspects">
      <h2>Core Aspects Service</h2>
      <div className="aspects-row">
        {aspects.map((aspect, index) => (
          <div key={index} className="aspect">
            <img src={aspect.imgSrc} alt={aspect.title} />
            <h3>{aspect.title}</h3>
            <p>{aspect.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreAspects;


