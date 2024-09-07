import React from 'react';
import{useState} from 'react';
import './Self.css';
import { faLinkedin, faGithub,faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Self()
{
   const [link, setLink] = useState("");

    const handleLinkedinClick = () => {
        setLink("https://www.linkedin.com/in/sabreen-maryam-m");
        window.open(link, "_blank"); 
    };
    const handlegithubClick = () => {
      setLink("https://github.com/Sabreen4");
      window.open(link, "_blank"); 
  };
 const handlewhats = ()=>{
   setLink('https://web.whatsapp.com/');
 }
  const handleDownload = () => {
   const link = document.createElement('a');
   link.href = `${process.env.PUBLIC_URL}/resume.pdf`; 
   link.download = 'Sab.pdf'; 
   link.click(); 
 };
  

    return (
    <div className="protfoli">  
    <div className="header">
     <nav className="nav">
        <h2 className="head">PORTFOLIO</h2>
        <a href="#aboutus" className="content"><h2 >HOME </h2></a>
        <a href="#intro" className="content"><h2 >ABOUT </h2></a>
        <a href="#skill" className="content"> <h2>SKILLS</h2></a>
        <a href="#project" className="content"><h2>PROJECT</h2></a>
        <a href="#project" className="content"><h2>CERTIFICATION</h2></a>
        <a href="#contact" className="content"> <h2>CONTACT</h2></a>

     </nav>
    </div>
    <div className='home'>
     <aside className="about" id="aboutus">
        <h2>Welcome,I'm Sabreen </h2>
        <h3>FullStack Developer</h3>
     </aside>
     <aside className="my_pic">
     <img src="/sab.jpg" alt="mypic"/>
     </aside>
    </div>
    <div id="intro">
       <aside className="intro-me">
       <h2 id="myself">About Me</h2>
      <h2 className="sab">Sabreen</h2>
      <p className='define'>I am a passionate FullStack Developer with a knack for 
        creating dynamic and responsive web applications. 
        My expertise lies in both front-end and back-end development, 
        ensuring seamless integration and functionality across the stack.
        With extensive experience in full-stack development.</p>
      </aside>
    </div>
   <div id="skill">
       <div className="skill-list">
       <h2 className='skill-topic'>SKILLS</h2>
        <div className="programlangu">
         <ul className="skill-list">
           <h2 className="pro-lang">Programming Language</h2>
           <li>Java(Programming Language)</li>
            <li>C (Programming Language)</li>
            </ul> 
         </div>
         <div className="frontend">
         <h2 className="pro-lang">Frontend</h2>
         <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          </ul>
         </div>
         <div className="backend">
         <h2 className="pro-lang">Backend</h2>
           <ul className="skill-list">
           <li>Php</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
            </ul>
         </div>
      </div>
      
    </div>
    
   <div id='project'>
    <h2 className='proj'>PROJECT</h2>
      <div className='project'>
         <div className='my-proj'>
            <h2 className='ecom'>Ecommerce Website</h2>
            <p>I develop on dynamic website called E-Commerce using 
               frontend language like HTML,CSS and JavaScript 
               and Backend language like MySQL,SQL,php using xampp</p>
          </div>
         <div className='my-proj2'>
            <h2 className='ecom'>Lab Session Website</h2>
            <p>I develop on dynamic website called Lab Session Website using 
               frontend language like HTML,CSS and JavaScript 
               and Backend language like MySQL,SQL,php using xampp</p>
         </div>
         <div className='my-proj3'>
            <h2 className='ecom'>Construction Website</h2>
            <p>I develop on dynamic website called Construction Website using 
               frontend language like React,CSS  
               and Backend language like MongoDB,Node.js,Express.js</p>
         </div>
      </div>
   </div>
 <div id="certificate">
   <h2 className='PICC-2'>CERTIFICATION</h2>
      <div className="pic-1">
       
        <div className="pic-3">
         <img src="/java.jpeg" alt="java" />
         
         </div>
         <div className="pic-3">
            <img src="\nsic.jpeg" alt="nsic"/>
         </div>
         <div className="pic-3">
            <img src="\marlion.jpeg" alt='marlion' />
         </div>
         <div className="pic-3">
            <img src="\couseera.jpeg" alt="nsic"/>
         </div>
         <div className="pic-3">
            <img src="\codsoft.png" alt='codsoft' />
         </div>
         <div className="pic-3">
            <img src="\exposy.png" alt='exposy' />
         </div>
      </div>
      <button onClick={handleDownload} className="download-button">
      Download My Resume ↧
      </button>
    </div>
    <div id="contact">
   <FontAwesomeIcon icon={faLinkedin} className='icon' onClick={handleLinkedinClick }/> 
   <FontAwesomeIcon icon={faGithub} className='icon' onClick={handlegithubClick } />
   <FontAwesomeIcon icon={faSquareWhatsapp} className='icon' onClick={handlewhats} />   
</div>
 </div>  
    );
}
export  default Self;