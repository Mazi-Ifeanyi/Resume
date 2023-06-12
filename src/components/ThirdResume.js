import React from 'react';

import classes from '../styles/ThirdResume.module.css';


const ThirdResume = () => {
    return (
        <section className={classes.parent}>
        <div className={classes.top}>
           <section className={classes.leftSection}>
              <h2>Ifeanyi Ilonze</h2>  
              <p>Full Stack Web Developer</p>
           </section>
           <section className={classes.rightSection}>
              <div>
                {/* <h5>Phone Number&nbsp;</h5> */}
                <a href='tel:+2348145023849'>(+234)8145023849</a>
              </div>
              <div>
                {/* <h5>Email&nbsp;</h5> */}
                <a href='mailto:ifeanyiilonzejoseph@gmail.com'>ifeanyiilonzejoseph@gmail.com</a>
              </div>
              {/* <div>
                <h5>Address: &nbsp;</h5>
                <p>Ojo, Lagos state</p>
              </div> */}
              <div>
                {/* <h5>Twitter: &nbsp;</h5> */}
                <a href='https://twitter.com/mazii_ifeanyi'>https://twitter.com/mazii_ifeanyi</a>
              </div>
              <div>
                {/* <h5>LinkedIN: &nbsp;</h5> */}
                <a href='https://www.linkedin.com/in/ifeanyichukwu-ilonze'>https://www.linkedin.com/in/ifeanyichukwu-ilonze</a>
              </div>
           </section>
        </div>
        <article className={classes.header}>SUMMARY</article>
        <ul className={classes.ul}>
            <li>I have <b>5 years of experience</b> in software engineering and community management.</li>
            <li>I'm very <b>fluent in english</b> to an advanced level that enables me communicate very efficiently with my team.</li>
            <li><b>Time management efficient and detail oriented</b> which enables me handle projects and deliver before deadline.</li>
            <li>Proficient in utilizying various software tools to create and manage multiple forms of documentation. </li>
        </ul>
        <article className={classes.header}>TECHNICAL SKILLS</article>
        <ul className={classes.ul}>
            <li><b>Languages: </b>Javascript, HTML, CSS, ReactJS, NodeJS, Express, Java.</li>
            <li><b>Databases: </b>MongoDB, MySQL, SQLite, MariaDB.</li>
            <li><b>Tools: </b>Postman, GIT, GitHub.</li>
            <li><b>Development Skills: </b>Blockchain Development(WEB3), Web Delevopment, Backend Development, Software Development Lifecycle(SDLC).</li>
        </ul>
        <article className={classes.header}>WORK EXPERIENCE</article>
        <div className={classes.xyz}>
            <p>Web Development | AIException</p>
            <p>October 2022-December 2022</p>
        </div>
        <p className={classes.experienceTxt}>Worked with a team of 2 to Create a decentralized web application(dAPP) and a telegram bot. The purpose of this project is to make trading and swapping of crypto assets very fast, safe, efficient and as user-friendly as possible.</p>
        <p className={classes.achievementTxt}>My Achievements</p>
        <ul className={classes.ul}>
            <li>Created and managed the web application and all database structures and implementation.</li>
            <li>Worked with a team of 2 to provide a fast and reliable server that feeds a comunity of over 3000 people with data from the blockchain.</li>
            <li>Worked with the community to organise survery and AMA sessions to know the issues faced by users. This brought about 70% increase in user usage.</li>
            <li>Created a tracking system within the admin panel that tracks the progress of our development.</li>
            <li>Oversaw the community forum and responded to inquiries posed by users on the forum and social media platforms.</li>
        </ul>

        <div className={classes.xyz}>
            <p>Full-stack Development | AIException</p>
            <p>June 2022-August 2022</p>
        </div>
        <p className={classes.experienceTxt}>Created a decentralized web application(dAPP) that interacts with the blockchain with etherjs and web3 API's to get blockchain data. The purpose of this project is to prevent our users from falling into scams.</p>
        <p className={classes.achievementTxt}>My Achievements</p>
        <ul className={classes.ul}>
            <li>Created and managed the web application and all database structures and implementation.</li>
            <li>Had a community of over 5000. Application was used to monitor and scan contracts to make sure they are not honey potted or scams. This helped over 5000 people using it and secured their investments.</li>
            <li>Meetings was held on several occassion with the community to know how we can better the application for their use and we achieved a lot.</li>
        </ul>

        <div className={classes.xyz}>
            <p>Full-stack Development | JayPromise</p>
            <p>March 2022-May 2022</p>
        </div>
        <p className={classes.experienceTxt}>Created an E-commerce website that displays all kinds of light designs and brand.</p>
        <p className={classes.achievementTxt}>My Achievements</p>
        <ul className={classes.ul}>
            <li>Created and managed the web application, server and database implementation.</li>
            <li>Created style guides, templates & content types, best practices, and workflows that increased the throughput of development.</li>
            <li>Created SEO strategies that made multiple posts rank as the first result on Google for relevant keywords.</li>
            <li>Researched, monitored, and used the latest technology for development that made sure the company is not lacking behind in technology.</li>
        </ul>
        
        <div className={classes.xyz}>
            <p>Full-stack Development | AIException</p>
            <p>October 2018-December 2018</p>
        </div>
        <p className={classes.experienceTxt}>Worked with 2 teams to develop a laundry desktop and andriod application. The purpose of this projects is to connect users to the closest laundry shop depending on the current location of the user.</p>
        <p className={classes.achievementTxt}>My Achievements</p>
        <ul className={classes.ul}>
            <li>2 of my Teams and i worked together to create UI designs, database designs, logics, best practices and workflows to be used for the project development which made development very smooth and less stressful.</li>
            <li>Tools, languages and API's we used throughout the development process are Java, JavaFX, SQLite, MySQL, google cloud messaging, firebase, google map.</li>
            <li>Thorough research was made to make sure we gave an accurate location and distance of the laundry shop from your current position.</li>
        </ul>

        <div className={classes.xyz}>
            <p>Full-stack Development | AIException</p>
            <p>Jan 2018-April 2018</p>
        </div>
        <p className={classes.experienceTxt}>Created and managed an E-commerce web application together with a partner that deals on goods importation.</p>
        <p className={classes.achievementTxt}>My Achievements</p>
        <ul className={classes.ul}>
            <li>I and my partner worked together to create UI designs, database designs, logics, best practices and workflows to be used for the project development which made development very smooth and less stressful.</li>
            <li>Languages used are Java, JavaFX, MySQL, SQLite, MariaDB.</li>
        </ul>
        <article className={classes.header}>EDUCATION & QUALIFICATION</article>
        <p className={classes.experienceTxt}><b>Command day secondary school: </b>I got my first school leaving certificate[2015].</p>
        <p className={classes.experienceTxt}><b>Unizik: </b>Studied medical laboratory science[2022].</p>
       



{/* Studied Medical Laboratory Science at the university of Nnamdi Azikiwe University.

    <p>High School @ Command Day Secondary School</p>
            <p>October 2009-Dec 2015</p>
        </div>
        <div className={classes.xyz}>
            <p> Bachelor @ Unizik Awka</p>
            <p>October 2018-Dec 2022</p>
        </div>
        <p className={classes.experienceTxt}>Studied Medical Laboratory Science at the university of Nnamdi Azikiwe University.</p>
       */}
        <button onClick={window.print}>download</button>
    </section>
    )
}

/*Fullstack developer @ Ai Exception

Jan 2018-April 2018

Worked with a team to develop an application that deals on goods importation. Users place an order for the goods to be imported and select their desired mode of importation etc. I worked on the desktop application using JAVAFX and backend using JAVA and SQL. Database used were MySQL, MYSQLite and MariaDB*/
export default ThirdResume;