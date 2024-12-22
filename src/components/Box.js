import React from 'react'

function Box(props) {
  return (
    <div className='ses-box'>
        <div className='ses-b-img'>
            <img src={props.image} alt={props.atle}/>
        </div>
        <div className='ses-b-text'>
            <p> to the distinctive attributes or functionalities of a product, system, or service that enhance its appeal, usability, and value to users. In technology and software, features often include tools, actions, or interfaces designed to solve specific problems, simplify processes, or improve user experience. For instance, a so</p>
            <a href='#' className='cv-btn'>{props.bttn}</a>
        </div>
    </div>
  )
}

export default Box
