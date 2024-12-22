import React, { useEffect } from 'react';

function About() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="about" className="about-container">
      <div className='nnnnn'>
      <div className="wht-t1 fade-up">
        Under Research Society
      </div>
      <div className="rgb-t2 fade-up">
        Hello, <br /> This is us
      </div>
      <div className="pr3 fade-up">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi illum ratione consequuntur. Quas repellat non deleniti delectus, eum veritatis illo blanditiis quaerat nobis. Cumque quo itaque ad vero officia consequatur.
        Delectus fuga voluptatum laborum vero non recusandae laudantium nobis perspiciatis impedit soluta! Dolores a nobis, similique debitis numquam beatae nisi sunt ab quis, aliquam necessitatibus? Porro magni aperiam laudantium sed.
        Aut inventore sed laboriosam natus nulla architecto? Voluptate quis sed commodi sapiente quasi! Odit, officia eaque debitis quas expedita laudantium dignissimos numquam porro repellendus culpa architecto? Quod nihil error quisquam?
      </div></div>
    </div>
  );
}

export default About;




