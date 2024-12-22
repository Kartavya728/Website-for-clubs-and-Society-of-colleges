import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from './components/Features';
import Header from './components/Header';
import Events from './components/Events';
import Email from './components/Email';
import Ambition from './components/Ambition';
import Ts from './components/Ts';
import { useState } from 'react';
import im1 from './images/logo-chatgpt-png-42635.png';
import im2 from './images/png-3.png';
import im3 from './images/—Pngtree—education logo design for school_9267731.png';
import im4 from './images/—Pngtree—lion head face logo silhouette_15317165.png';
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import p6 from './images/p6.jpg';
import p7 from './images/p7.jpg';
import Members from './components/Members';
import Footer from './components/Footer';
import FloatMem from './components/FloatMem';
import About from './components/About';
import Vision from './components/Vision';
import Home from './components/Home';
import Meetups from './components/Meetups';
import NotificationBar from './components/NotificationBar';
import NavBar from './components/NavBar';
import Connect from './components/Connect';
import Albums from './components/Albums';
import React, { useEffect } from 'react';



function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [ifClicked, setIfClicked] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [img, setImg] = useState(im1);
  const [head, setHead] = useState(im1);
  const [fadeClass, setFadeClass] = useState("");

  const handleClick = (content, image, heading) => {
    setPopupContent(content);
    setImg(image);
    setHead(heading);
    setFadeClass("fade-in");
    setIsClicked(true);
  };

  const memClick = () => {
    setIfClicked(true);
    setFadeClass("fade-in");
  };

  const closePopup = () => {
    setFadeClass("fade-out");
    setTimeout(() => setIsClicked(false), 500);
  };

  const closeClick = () => {
    setFadeClass("fade-out");
    setTimeout(() => setIfClicked(false), 500);
  };
  useEffect(() => {
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry/i.test(navigator.userAgent);

    if (isMobileDevice) {
      document.body.classList.add('mobile-view');
    } else {
      document.body.classList.add('desktop-view');
    }
  }, []);

  return (
    <div className='kkkk'>
      <NavBar notifications={data.notifications} />
      <Home />
      <About />
      <Vision />
      <div className="text-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div
          style={{
            minHeight: '120vh',
            background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255), rgb(226, 247, 255), rgb(115, 215, 255), rgb(19, 71, 92))',
            borderBottomLeftRadius: '5%',
            borderBottomRightRadius: '5%'
          }}
        >
          <Meetups /><br /><br /><br /><br />
          <div className='bbanimation'>
            <Events onButtonClick={handleClick} events={data.events} />
            {isClicked && (
              <Ts handleClick={closePopup} content={popupContent} heading={head} fadeClass={fadeClass} image={img} />
            )}
            <br /><br /><br /><br /><br /><br />
          </div>
        </div>
      </div>
      <Albums/>
      <Members data={data.members} btnClick={memClick} />
      {ifClicked && (
        <FloatMem data={data.members} close={closeClick} fadeClass={fadeClass} />
      )}
      <Email />
      <div><br /><br /></div>
      <Connect/>
      <Footer />
    </div>
  );
}

export default App;


const data = {
  events: [
    {
      heading: "Chat-GPT",
      image: im1,
      altText: 'ic1',
      delay: "0",
      content: "Explore Chat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.xplore Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innChat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.xplore Chat-GPT and its various capabilities.",
      txt: "Discover AI advancements xplore Chat-GPT and its various capabilities."
    },
    {
      heading: "Anusandhan",
      image: im3,
      altText: 'ic3',
      delay: "2.5",
      content:"Social Media Platform ExploreChat -GPT and its various capabilities.Explore Chat-GPT and its various capabilities.nect and share Chat -GPT and its various capabilities.Explore Chat-GPT and its various capabilities.nect and share mChat -GPT and its various capabilities.Explore Chat-GPT and its various capabilities.nect and share mmoments on Instagram.share moments on Instagram.share moments on Instagram.nect and sharJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech inne moments on Instagram.share moments on Instagram.share moments on Instagram.",
      txt:     "Connect and share moments on Instagram.share moments"
    },
    {
      heading: "Tech Talk",
      image: im2,
      altText: 'ic2',
      delay: "5",
      content: "Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech inninnovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.",
      txt: "Stay updated Join us for the latest in tech innovation."
    },
    {
      heading: "Tech Talk",
      image: im3,
      altText: 'ic3',
      delay: "5",
      content: "Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.",
      txt: "Stay updated Join us for the latest in tech innovation."
    },
    {
      heading: "Tech Talk",
      image: im4,
      altText: 'ic3',
      delay: "5",
      content: "Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest inin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innJoin us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innovation.Join us for the latest in tech innthe latest in tech innovation.",
      txt: "Stay updated Join us for the latest in tech innovation."
    },
  ],
  features: [
    {
      heading: "Innovation",
      content: "Discover cutting-edge technologies shaping the future.",
      delay: "0",
      icon: im1,
    },
    {
      heading: "Connection",
      content: "Connect with others and share your insights.",
      delay: "1",
      icon: im2,
    },
    {
      heading: "Learning",
      content: "Gain knowledge from industry leaders.",
      delay: "2",
      icon: im3,
    },
  ],
  members: [
    {
      image: p1,
      name: "Kartavya",
      designation: "Cordinator",
      mobile: "9149244074",
      email: "b24991@students.iitmandi.ac.in"
    },
    {
      image: p4,
      "name": "Riddhi",
      "designation": "Faculty-Adviser",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p3,
      "name": "Shubham",
      "designation": "Core Member",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image":p4,
      "name": "Rishang",
      "designation": "Back-End",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p5,
      "name": "xyz",
      "designation": "Nothing",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p6,
      "name": "abc",
      "designation": "FDP-Lab",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p7,
      "name": "Ambani",
      "designation": "Funding",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p3,
      "name": "sundar",
      "designation": "Google",
      "mobile": "9149244074",
      "email": "Kharagpur@students.iitian.ac.in"
    },
    {
      "image": p1,
      "name": "allen",
      "designation": "physics",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p4,
      "name": "Addani",
      "designation": "Modi",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p7,
      "name": "Kartava",
      "designation": "Front-End",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    },
    {
      "image": p6,
      "name": "elon musk",
      "designation": "CEO",
      "mobile": "9149244074",
      "email": "b24991@students.iitmandi.ac.in"
    }
  ],
  notifications:[
    {
      "text": "Notification 1 - .mvmn gvcfgvybuhnixrdcftvgybhnjxrctvybunizwxecrvtybuie45rd6t7gyhuj",
      "pdf": "sample1.pdf"
    },
    {
      "text": "Notification 2 - edkllvfdsedrftgyhujexdrctfgyhxerctvybuerxctvygbhunefywweyhfcsjnfc",
      "pdf": "sample2.pdf"
    },
    {
      "text": "Notification 3 - fdvnkhilrej.sd.cbhvbxnhxbdcft sxdcfvghzsexrdtfydfcgvhsbb hdndsbber",
      "pdf": "sample3.pdf"
    },
    {
      "text": "Notification 4 - Djj, bv nm,rnv.srdtfgyuhjiokaesxrdtfgyhujiesrdtfgyhuwaesdrtfghyuwesdrtf",
      "pdf": "sample4.pdf"
    },
    {
      "text": "Notification 5 - Example notification for testing JSON integration with the NotificationBar.",
      "pdf": "sample5.pdf"
    },
    {
      "text": "Notification 6 - JSON-based notification to test handling of larger datasets in NotificationBar.",
      "pdf": "sample6.pdf"
    },
    {
      "text": "Notification 1 - .mvmn gvcfgvybuhnixrdcftvgybhnjxrctvybunizwxecrvtybuie45rd6t7gyhuj",
      "pdf": "sample1.pdf"
    },
    {
      "text": "Notification 2 - edkllvfdsedrftgyhujexdrctfgyhxerctvybuerxctvygbhunefywweyhfcsjnfc",
      "pdf": "sample2.pdf"
    },
    {
      "text": "Notification 3 - fdvnkhilrej.sd.cbhvbxnhxbdcft sxdcfvghzsexrdtfydfcgvhsbb hdndsbber",
      "pdf": "sample3.pdf"
    },
    {
      "text": "Notification 4 - Djj, bv nm,rnv.srdtfgyuhjiokaesxrdtfgyhujiesrdtfgyhuwaesdrtfghyuwesdrtf",
      "pdf": "sample4.pdf"
    },
    {
      "text": "Notification 5 - Example notification for testing JSON integration with the NotificationBar.",
      "pdf": "sample5.pdf"
    },
    {
      "text": "Notification 6 - JSON-based notification to test handling of larger datasets in NotificationBar.",
      "pdf": "sample6.pdf"
    }
  ]

};