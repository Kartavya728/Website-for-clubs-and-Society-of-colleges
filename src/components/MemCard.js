import React from 'react';
import './MemCard.css';

function MemCard({ image, name, designation, mobile, email }) {
  return (
    <div className='mmmmm'>
    <div className="container">
      <article className="card__article">
        <div className="card__profile">
          <img src={image} alt={`${name}'s profile`} className="card__profile-img" />
        </div>
        <div className="card__tooltip">
          <div className="card__content">
            <div className="card__data">
              <div className="card__image">
                <div className="card__mask">
                  <img src={image} alt={`${name}'s card`} className="card__img" />
                </div>
                <span className="card__status"></span>
              </div>
              <h2 className="card__name">{name}</h2>
              <h3 className="card__profession">{designation}</h3>
              <a href={`tel:${mobile}`} className="card__button">
                <i className="ri-phone-line"></i> <span>{mobile}</span>
              </a>
              <a href={`mailto:${email}`} className="card__button">
                <i className="ri-mail-line"></i> <span>{email}</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div></div>
  );
}

export default MemCard;
