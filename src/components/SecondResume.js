import React from 'react';

import classes from '../styles/SecondResume.module.css';
import logo from '../assets/contract_icon.png';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';
import addressIcon from '../assets/address.png';
import profile from '../assets/profile.jpg';
import RatingStars from './RatingStars';
import CustomCircle from './CustomCircle';

const SecondResume = () => {
    // console.log('resume section')
    return (
        <section className={classes.parent}>
            <section className={classes.box}>
                <header className={classes.header}>
                    <div className={classes.imgContainer}>
                        <img src={profile} alt='' className={classes.profileIcon} />
                    </div>
                    <div className={classes.nameContainer}>
                        <h2>Mazi IfeanyiChukwu</h2>
                        <p>Full Stack Web Developer</p>
                        <hr className={classes.hr1} />
                    </div>
                    <div className={classes.detailContainer}>
                        <hr className={classes.hr2} />
                        <div>
                            <img src={emailIcon} alt='' className={classes.emailIcon} />
                            <p className={classes.txt}>ifeanyiilonzejoseph@gmail.com</p>
                        </div>
                        <div>
                            <img src={phoneIcon} alt='' className={classes.phoneIcon} />
                            <p className={classes.txt}>+2348145023849</p>
                        </div>
                        <div>
                            <img src={addressIcon} alt='' className={classes.addressIcon} />
                            <p className={classes.txt}>Awka Anambra 420102</p>
                        </div>
                    </div>
                </header>
                <article className={classes.article}>
                    <section className={classes.leftArticle}>
                        <div className={classes.aboutTitle}>
                            <p className={classes.p1}>About&nbsp;</p>
                            <p className={classes.p2}>Me</p>
                        </div>
                        <span className={classes.content}>
                            I'm a full stack web developer that is passionate about web application development and i have 2 years of experience in this field. I started my programming career in 2017 and my first ever language was JAVA. I did it for about 2 and half yrs before diving into web development.
                        </span>
                        <div className={classes.aboutTitle}>
                            <p className={classes.p1}>My&nbsp;</p>
                            <p className={classes.p2}>Skills</p>
                        </div>
                        <ul className={classes.unordered1}>
                            <li>
                                <div className={classes.skillName}>ReactJS</div>
                                <CustomCircle colorCount={5} />
                            </li>
                            <li>
                                <div className={classes.skillName}>Javascript</div>
                                <CustomCircle colorCount={5} />
                            </li>
                            <li>
                                <div className={classes.skillName}>nodeJS</div>
                                <CustomCircle colorCount={5} />
                            </li>
                            <li>
                                <div className={classes.skillName}>Css</div>
                                <CustomCircle colorCount={5} />
                            </li>
                            <li>
                                <div className={classes.skillName}>HTML</div>
                                <CustomCircle colorCount={5} />
                            </li>
                            <li>
                                <div className={classes.skillName}>MongoDB</div>
                                <CustomCircle colorCount={5} />
                            </li>
                            <li>
                                <div className={classes.skillName}>SQL, MYSQL</div>
                                <CustomCircle colorCount={4} />
                            </li>
                            <li>
                                <div className={classes.skillName}>MariaDB</div>
                                <CustomCircle colorCount={4} />
                            </li>
                            <li>
                                <div className={classes.skillName}>Git</div>
                                <CustomCircle colorCount={3} />
                            </li>
                        </ul>
                        <div className={classes.aboutTitle}>
                            <p className={classes.p1}>Soft&nbsp;</p>
                            <p className={classes.p2}>Skills</p>
                        </div>
                        <ul className={classes.unordered2}>
                            <li>Cheerful</li>
                            <li>Self Confident</li>
                            <li>Good Communication</li>
                            <li>Creative Thinking</li>
                            <li>Problem Solving</li>
                            <li>Adaptability</li>
                            <li>Diligent</li>
                            <li>Team Leadership</li>
                        </ul>
                        <div className={classes.aboutTitle}>
                            <p className={classes.p1}>Known&nbsp;</p>
                            <p className={classes.p2}>Language</p>
                        </div>
                        <ul className={classes.unordered1}>
                            <li>
                                <div className={classes.skillName}>English</div>
                                <CustomCircle colorCount={5} />
                            </li>
                        </ul>
                        <div className={classes.aboutTitle}>
                            <p className={classes.p1}>My&nbsp;</p>
                            <p className={classes.p2}>Interests</p>
                        </div>
                        <ul className={classes.unordered2}>
                            <li>Watching Animes</li>
                            <li>Space Exploration and Jets</li>
                            <li>Playing Racing games</li>
                            <li>Watching Pranks and crazy football skills</li>
                            <li>Listening to Electronics and native musics</li>
                            <li></li>
                        </ul>
                    </section>
                    <section className={classes.rightArticle}>
                        <span className={classes.experience}>
                            <div className={classes.rightTitle}>
                                <p className={classes.p1}>Work&nbsp;</p>
                                <p className={classes.p2}>Experience</p>
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Full stack Developer <b className={classes.companyTxt}>@ AiException</b></p>
                                <p className={classes.yearTxt}>October 2022-December 2022</p>
                            </div>
                            <div className={classes.content}>
                                {/* Wrote a special dAPP that has some special and popular features in it. Popular features there are swaps, ability to transfer tokens to other wallets, buy, sell etc. The special ones, i'm not allowed to say because of Non-disclosure agreement.  */}
                                Worked with a team to build a decentralized web application and a telegram bot. Some of it's features are: 
                                <br/>
                                It supports different networks.
                                <br/>
                                It calculate the buys, sells, volume and total transactions that happened for a token within the supported networks.
                                <br/>
                                It tracks the number of  wallets that have bought and sold a particular token within a network etc.
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Front end Developer <b className={classes.companyTxt}>@ AiException</b></p>
                                <p className={classes.yearTxt}>June 2022-August 2022</p>
                            </div>
                            <div className={classes.content}>
                                {/* Wrote a special dAPP that has some special and popular features in it. Popular features there are swaps, ability to transfer tokens to other wallets, buy, sell etc. The special ones, i'm not allowed to say because of Non-disclosure agreement.  */}
                                Built a dAPP that interacts with the blockchain using web3 and ethersjs to fetch the price, supply, decimal, name, symbol etc of any contract on ethereum and smartchain network. It also get the tax of the contract and also detect if it's a honey pot.
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Full Stack Developer <b className={classes.companyTxt}>@ JayPromise</b></p>
                                <p className={classes.yearTxt}>March 2022-May 2022</p>
                            </div>
                            <div className={classes.content}>
                                Wrote a full stack E-commerce website using reactjs, css, nodejs and mongodb. Products are been uploaded by the admin while users can view, rate and order products. Products are also sorted in order of the most viewed and most rated.
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Back end web developer <b className={classes.companyTxt}>@ Ai Exception</b></p>
                                <p className={classes.yearTxt}>Dec 2021-Jan 2022</p>
                            </div>
                            <div className={classes.content}>
                                Worked with the team member to build a fast and efficient server for a telegram bot. The backend was written with nodeJS and express. What it does is it comments on every user buys and sells on smartchain and ethereum network. There is no UI for this as it is telegram based.
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Fullstack developer <b className={classes.companyTxt}>@ Ai Exception</b></p>
                                <p className={classes.yearTxt}>October 2018-December 2018</p>
                            </div>
                            <div className={classes.content}>
                                Worked with a team to develop a laundry app that connects users to closest laundry store depending on the current location of the user. API's used throughout the application were google cloud messaging, firebase and google map. Languages used were Java, javafx, SQL. Database used were MySQL and MySQLite
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Fullstack developer <b className={classes.companyTxt}>@ Ai Exception</b></p>
                                <p className={classes.yearTxt}>Jan 2018-April 2018</p>
                            </div>
                            <div className={classes.content}>
                                Worked with a team to develop an application that deals on goods importation. Users place an order for the goods to be imported and select their desired mode of importation etc. I worked on the desktop application using JAVAFX and backend using JAVA and SQL. Database used were MySQL, MYSQLite and MariaDB
                            </div>
                        </span>
                        <span className={classes.experience}>
                            <div className={classes.rightTitle}>
                                <p className={classes.p1}>My&nbsp;</p>
                                <p className={classes.p2}>Education</p>
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>High School <b className={classes.companyTxt}>@ Command Day Secondary School</b></p>
                                <p className={classes.yearTxt}>October 2009-Dec 2015</p>
                            </div>
                            <div className={classes.content}>
                                This is where i got my first school leaving certificate..
                            </div>
                            <div className={classes.roleTitle}>
                                <p className={classes.titleTxt}>Bachelor <b className={classes.companyTxt}>@ Unizik Awka</b></p>
                                <p className={classes.yearTxt}>October 2018-Dec 2021</p>
                            </div>
                            <div className={classes.content}>
                                Studied Medical Laboratory Science at the university of Nnamdi Azikiwe University.
                            </div>
                            <button onClick={window.print}>download</button>
                        </span>
                    </section>
                </article>
            </section>
        </section>
    )
}

export default SecondResume;