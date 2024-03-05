import React from 'react';
import Progress_bar from './progress';
import MySideNav from './MySdieNav';
import Data from './data';

const Menu = () => {
  return (
    <>
      <MySideNav />
      <div>
        <nav className='navb'>
          <button className='appet'>APPETISER</button>
          <button className='maincour'>MAIN COURSE</button>
          <button className='desert'>DESSERTS</button>
          <button className='al'>ALL</button>
        </nav>
        {Data.map((item) => (
          <div className="foodcard" key={item.id}>
            <div className="foodinfo">
              <p><strong>{item.brandName}</strong></p>
              <Progress_bar
                bgcolor="orange"
                progress={parseFloat(item.rating.replace(/[()]/g, ''))}
                height={5}
              />
            </div>
            <div className="foodimg">
              <img src={item.img} className='imgs' alt={item.brandName} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
