import React from 'react'
import fimg  from '../images/iit.jpg'
function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={fimg} alt='feature-image'/>
        </div>
        <div className='features-text'>
            <h2>About Us</h2>
            <h3>This IIT <span>is not a IIT</span></h3>
            <p>Features refer to the distinctive attributes or functionalities of a product, system, or service that enhance its appeal, usability, and value to users. In technology and software, features often include tools, actions, or interfaces designed to solve specific problems, simplify processes, or improve user experience. For instance, a software application may offer features such as real-time collaboration, customizable settings, intuitive navigation, and seamless integration with other tools. These elements collectively make the product more efficient, engaging, and relevant to i</p>
            <button>View More</button>
        </div>
    </div>
  )
}

export default Features
