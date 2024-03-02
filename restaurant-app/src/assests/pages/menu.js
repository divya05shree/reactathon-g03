import React from 'react';
import imageSrc from '../images/f.jpg';
import Progress_bar from './progress';
import { Link } from 'react-router-dom'; // Import the Link component

const Menu = () => {
    return (
        <>
            <div>
                <div>
                <nav className='navb'>
                    <button className='appet'>APPETISER</button>
                    <button className='maincour'>MAIN COURSE</button>
                    <button className='desert'>DESERTS</button>
                    <button className='al'>ALL</button>
                </nav></div>
                <div className="foodcard">
                    <div className="foodinfo">
                            <p><strong>Chop Stick</strong></p>
                            <Progress_bar 
                             bgcolor="orange"
                             progress="90"
                             height={5}
                            />
                    </div>
                    <div className="foodimg">
                        <img src={imageSrc} className='imgs'/>
                    </div>
                    </div>   


                
    
            
              


                </div>

                
            
        </>
    );
}

export default Menu;

