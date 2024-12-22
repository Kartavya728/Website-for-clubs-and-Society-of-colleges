import React from 'react'
import fimg from '../images/im8.jpg'
function Galllary() {
  return (
    <div>
        <div id='gallary'>
        <div className='features-text'>
            <h2>Gallery</h2>
            <h3>This IIT <span>is not a IIT</span></h3>
        </div>
        <div className='feat-model'>
            <img src={fimg} alt='feature-image'/>
            <img src={fimg} alt='feature-image'/>
            <img src={fimg} alt='feature-image'/>
            <img src={fimg} alt='feature-image'/>
        </div>
    </div>
    </div>
  )
}

export default Galllary
