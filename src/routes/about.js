import React from 'react';
import './about.css';

function About(props){
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “It is a website where you can see information about movies that many audiences have visited and movies that i have enjoyed deeply.”
        <br/><br/>
        Thank you for watching my web site :)
      </span>
      <br/><br/>
      <strong>Hanseunghoon, 1996</strong>
    </div>
  );
}

export default About;