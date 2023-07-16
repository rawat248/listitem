import React from 'react';
import data from './data.json';
import './Index.css';

const Index = () => {

  return (

    <div className='main'>
      {
        data.product.map(item => (
          <div key={item.id} className='container' >
            <img src={item.Image} alt={item.description} onError={(e) => {
              e.target.src = 'https://images.pexels.com/photos/12699625/pexels-photo-12699625.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
            }} />
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Index