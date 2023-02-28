import React from 'react';
import classes from '../styles/FirstResume.module.css';


const FirstResume = () =>{
    return(
        <section className={classes.parent}>
        <div className={classes.top}>
           <section className={classes.leftSection}>
              <h2>Ifeanyi Ilonze</h2>  
              <p>Full Stack Web Developer</p>
           </section>
           <section className={classes.rightSection}>
              <div>
                <h5>Phone Number&nbsp;</h5>
                <p>(+234)8145023849</p>
              </div>
              <div>
                <h5>Email&nbsp;</h5>
                <p>ifeanyiilonzejoseph@gmail.com</p>
              </div>
              <div>
                <h5>Address&nbsp;</h5>
                <p>Awka, Anambra 420102</p>
              </div>
           </section>
        </div>
        <div className={classes.description}>
           <p>Quality-oriented professional with 2+ years of experience and a proven knowledge of improvement, client relations and solutions selling. Aiming to leverage my skills to successfully fill any Stack Web Developer role at your company.</p>
        </div>
        <section className={classes.roleContainer}>
          <div className={classes.experienceContainer}>
             <h5>Experience</h5>
             <p>Worked as a Full Stack Web Developer at: </p>
          </div>
           <div className={classes.companyContainer}>
               <p>AI Exceptions, Ojo, Lagos</p>
               <p>December 2018-Present</p>
          </div>
        </section>
        <ul className={classes.ul}>
           <li>Designed and implemented a responsive front-end web application using ReactJS</li>
           <li>Developed a full-stack decentralized application(dAPP). Used react for the front end, nodeJS for the backend and mongoDB for storing data.</li>
           <li>Performed and directed Web site updates.</li>
           <li>Analyzed user needs to determine technical requirements.</li>
           <li>Backed up files from websites to local directories for instant recovery.</li>
           <li>Performed Web site tests accorded to planned schedules, and after any Web site and product revision.</li>
           <li>Wrote supporting code for web applications and websites.</li>
           <li>Monitored security system performance logs to identify problems.</li>
           <li>Wrote an efficient and secured backend using NodeJS and used RSA for encryption.</li>
           {/* <li>Implemented website firewalls and message encryption.</li> */}
           {/* <li>Installed and configured hypertext transfer protocol (HTTP) servers and associated operating systems.</li> */}
        </ul>
        <section className={classes.roleContainer}>
          <div className={classes.experienceContainer}>
             <h5>Education</h5>
             {/* <p>Full Stack Web Developer</p> */}
          </div>
           <div className={classes.companyContainer}>
               <p>Nnamdi Azikiwe University, Awka, Anambra</p>
               <p>December 2020-Present</p>
          </div>
        </section>
        <section className={classes.skillContainer}>
        <div>
             <p>Technical Skills</p>
             <ul className={classes.ul}>
               <li>Html</li>
               <li>Css</li>
               <li>JavaScript</li>
               <li>ReactJS</li>
               <li>NodeJS(Express)</li>
               <li>MongoDB</li>
             </ul>
        </div>
        <div>
             <p>Soft Skills</p>
             <ul className={classes.ul}>
               <li>Self Confidence</li>
               <li>Good Communication</li>
               <li>Creative Thinking</li>
               <li>Problem Solving</li>
               <li>Adaptability</li>
               <li>Responsible</li>
               <li>Diligent</li>
             </ul>
        </div>
        </section>
        <section className={classes.hobbyParent}>
        <div>
             <p>Hobbies</p>
             <ul className={classes.ul}>
               <li>Playing online games</li>
               <li>Watching Movies</li>
               <li>Learning new technologies</li>
               <li>Playing Tennis</li>
               {/* <li>Adaptability</li>
               <li>Responsible</li>
               <li>Diligent</li> */}
             </ul>
        </div>
        </section>
        <button onClick={window.print}>download</button>
    </section>
    )
}

export default FirstResume;