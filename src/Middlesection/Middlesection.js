import React from 'react';
import './index.css'; // Make sure to import your CSS file
import { LOCAL_IMAGES } from '../utils/localimages';
import { Link } from 'react-router-dom';
const BrandContainer = () => {
  const photoData = [
    {
      image:
        LOCAL_IMAGES.argatinbrand1,
      description: 'Argatin Shampoo',
    },
    {
      image: LOCAL_IMAGES.argatinbrand2,

      description: 'Hair Conditioner',
    },
    {
      image: LOCAL_IMAGES.argatinbrand3,

      description: 'Hair Oil',
    },
    {
      image: LOCAL_IMAGES.argatinbrand4,

      description: 'Argatin keratin Treatment',
    },

  ];

  return (
    <div className="brand-container">
      {photoData?.map((item, index) => (

        <div className="card" key={index}>
          <Link to={"/Menicure"}>
            <img className="card-image" src={item.image} alt={item.description} />
            <h4 className="card-description">{item.description}</h4>

          </Link>
        </div>

      ))}
    </div>
  );
};

export default BrandContainer;
