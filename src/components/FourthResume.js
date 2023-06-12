import React from 'react'
import { HiMail } from 'react-icons/hi';
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillHtml5 } from 'react-icons/ai';
import { IoLogoTwitter, IoLogoCss3, IoMdJet } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMariadb, SiTypescript, SiJavascript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BiCameraMovie } from 'react-icons/bi';
import { FiMusic } from 'react-icons/fi';
import { CgGames } from 'react-icons/cg';
import { IoCarSport } from 'react-icons/io5';
import { GiArtificialHive } from 'react-icons/gi';
// import { FaRegDotCircle } from 'react-icons/go';


const FourthResume = () => {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-[800px] border m-auto flex flex-col'>
            <header className='w-full h-fit px-8 py-4 flex flex-col'>
                 <h2 className='font-bold text-4xl mb-4 w-fit relative before:absolute before:left-0 before:top-[100%] before:bg-blue-900 before:w-[70%] before:h-[3px]'>Ilonze ifeanyichukwu</h2>
                 <p className='text-gray-500'>Full-Stack Developer</p>
                 <p className='py-2 m-0'>Highly skilled Fullstack developer with <b>5 years of experience</b> in front and back end web development. I have successfully delivered simple and complex projects, including a high-traffic e-commerce website. My passion for clean code, problem-solving, and continuous learning makes me a valuable asset to any development team.</p>
            </header>
            <div className='flex bg-gray-100'>
                <div className='w-[50%] flex flex-col justify-start items-start px-8 py-5 gap-3'>
                    <a className='flex items-center gap-2 text-blue-900 text-sm' href='mailto:ifeanyiilonzejoseph@gmail.com'><HiMail className='text-blue-900' />ifeanyiilonzejoseph@gmail.com</a>
                    <a className='flex items-center gap-2 text-blue-900 text-sm' href='https://github.com/Mazi-Ifeanyi'><AiFillGithub className='text-blue-900' />GitHub Account</a>
                    <a className='flex items-center gap-2 text-blue-900 text-sm' href='https://twitter.com/mazii_ifeanyi'><IoLogoTwitter className='text-blue-900' />Twitter Account</a>
                </div>
                <div className='w-[50%] flex flex-col justify-start items-start py-5 gap-3'>
                   <a className='flex items-center gap-2 text-blue-900 text-sm' href='tel:+2348145023849'><BsFillPhoneFill className='text-blue-900' />(+234)8145023849</a>
                   <a className='flex items-center gap-2 text-blue-900 text-sm' href='https://www.linkedin.com/in/ifeanyichukwu-ilonze'><AiFillLinkedin className='text-blue-900' />LinkedIn</a>
                   <a className='flex items-center gap-2 text-blue-900 text-sm' href='https://www.facebook.com/MaziIfeanyiIlonze'><AiFillFacebook className='text-blue-900' />Facebook</a>
                </div>
            </div>
            <article className='flex flex-col w-full h-fit mb-8 px-8 py-10'>
                        <h2 className='text-xl text-blue-900 text-center'>TECHNICAL SKILLS</h2>
                        <div className='w-full h-fit flex flex-col gap-4 mt-4'>
                            <span className='flex justify-start items-center gap-2'>
                                <p className='w-[5rem]'>Languages:</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <SiJavascript className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>Javascript</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <SiTypescript className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>Typescript</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <FaReact className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>ReactJs</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <AiFillHtml5 className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>HTML</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <IoLogoCss3 className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>CSS</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <FaNodeJs className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>NodeJS</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-1 rounded-md'>
                                        <SiTailwindcss className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>Tailwindcss</p>
                                    </span>
                                </div>
                            </span>
                            <span className='flex justify-start items-center gap-2'>
                                <p className='w-[5rem]'>Databases:</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-2 rounded-md'>
                                        <SiMongodb className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>MongoDB</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-2 rounded-md'>
                                        <GrMysql className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>MySQL</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-2 rounded-md'>
                                        <GrMysql className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>MySQLite</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-2 rounded-md'>
                                        <SiMariadb className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>MariaDB</p>
                                    </span>
                                </div>
                            </span>
                            <span className='flex justify-start items-center gap-2'>
                                <p className='w-[5rem]'>Tools:</p>
                                <div className='flex justify-center items-center gap-2'>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-2 rounded-md'>
                                        <FaGitAlt className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>Git</p>
                                    </span>
                                    <span className='flex justify-center items-center bg-blue-900  px-2 py-1 gap-2 rounded-md'>
                                        <AiFillGithub className='text-white' />
                                        <p className='flex item-center justify-start bg-blue-900 rounded-sm text-white text-sm'>GitHub</p>
                                    </span>
                                </div>
                            </span>
                        </div>
                        <h2 className='text-xl text-blue-900 text-center mt-8'>SOFT SKILLS</h2>
                        <div className='w-full h-fit flex flex-col gap-4 mt-4'>
                            <span className='flex justify-start items-center gap-2'>
                                <div className='flex justify-center items-center gap-2 w-full'>
                                    <p className='flex item-center justify-start bg-blue-900 px-2 py-1 gap-2 rounded-md text-white text-sm'>Problem Solving</p>
                                    <p className='flex item-center justify-start bg-blue-900 px-2 py-1 gap-2 rounded-md text-white text-sm'>Critical Thinking</p>
                                    <p className='flex item-center justify-start bg-blue-900 px-2 py-1 gap-2 rounded-md text-white text-sm'>Discipline</p>
                                    <p className='flex item-center justify-start bg-blue-900 px-2 py-1 gap-2 rounded-md text-white text-sm'>Self Motivated</p>
                                    <p className='flex item-center justify-start bg-blue-900 px-2 py-1 gap-2 rounded-md text-white text-sm'>Self Confidence</p>
                                    <p className='flex item-center justify-start bg-blue-900 px-2 py-1 gap-2 rounded-md text-white text-sm'>Creative</p>
                                </div>
                            </span>
                        </div>
                    </article>
            <section className='w-full h-fit flex flex-col'>
                <article className='w-[100%] h-fit flex flex-col px-8'>
                    <h2 className='text-3xl mb-8 text-black text-center font-bold'>WORK EXPERIENCE</h2>
                <div className='flex flex-col w-full'>
                    <h3 className='mt-3 font-bold text-2xl'>Web Development</h3>
                    <p className='text-gray-500 text-sm'>AIException</p>
                    <div className='flex justify-between items-center my-2'>
                        <p className='text-gray-500 text-sm'>From: September 2022</p>
                        <p className='text-gray-500 text-sm'>To: December 2022</p>
                    </div>
                    <p className=''>Worked with a team of 2 to Create a decentralized web application(dAPP) and a telegram bot. The purpose of this project is to make trading and swapping of crypto assets very fast, safe, efficient and as user-friendly as possible.</p>
                    <h3 className='mt-10 font-semibold w-fit relative before:absolute before:left-0 before:top-[100%] before:bg-blue-900 before:w-[70%] before:h-[3px]'>MY ACHIEVEMENTS</h3>
                        <ul className='w-full gap-7'>
                            <li className='my-4 flex items-center gap-1'>- Created and managed the web application and all database structures and implementation.</li>
                            <li className='my-4 flex items-center gap-1'>-  Worked with a team of 2 to provide a fast and reliable server that feeds a comunity of over 3000 people with data from the blockchain.</li>
                            <li className='my-4 flex items-start gap-1'>-  Worked with the community to organise survery and AMA sessions to know the issues faced by users. This brought about 70% increase in user usage.</li>
                            <li className='my-4 flex items-start gap-1'>-  Created a tracking system within the admin panel that tracks the progress of our development.</li>
                            <li className='my-4 flex items-start gap-1'>-  Oversaw the community forum and responded to inquiries posed by users on the forum and social media platforms.</li>
                        </ul>
                        </div>
                        <div className='flex flex-col w-full'>
                    <h3 className='mt-3 font-bold text-2xl'>Full-stack Development</h3>
                    <p className='text-gray-500 text-sm'>AIException</p>
                    <div className='flex justify-between items-center my-2'>
                        <p className='text-gray-500 text-sm'>From: March 2022</p>
                        <p className='text-gray-500 text-sm'>To: June 2022</p>
                    </div>
                    <p className=''>Created a decentralized web application(dAPP) that interacts with the blockchain with etherjs and web3 API's to get blockchain data. The purpose of this project is to prevent our users from falling into scams.</p>
                    <h3 className='mt-10 font-semibold w-fit relative before:absolute before:left-0 before:top-[100%] before:bg-blue-900 before:w-[70%] before:h-[3px]'>MY ACHIEVEMENTS</h3>
                        <ul className='w-full gap-7'>
                            <li className='my-4 flex items-start gap-1'>-  Created and managed the web application and all database structures and implementation.</li>
                            <li className='my-4 flex items-start gap-1'>-  Had a community of over 5000. Application was used to monitor and scan contracts to make sure they are not honey potted or scams. This helped over 5000 people using it and secured their investments.</li>
                            <li className='my-4 flex items-start gap-1'>-  Meetings was held on several occassion with the community to know how we can better the application for their use and we achieved a lot.</li>
                        </ul>
                        </div>
                        <div className='flex flex-col w-full'>
                    <h3 className='mt-3 font-bold text-2xl'>Full-stack Development</h3>
                    <p className='text-gray-500 text-sm'>JayPromiseLighting</p>
                    <div className='flex justify-between items-center my-2'>
                        <p className='text-gray-500 text-sm'>From: December 2020</p>
                        <p className='text-gray-500 text-sm'>To: April 2021</p>
                    </div>
                    <p className=''>Created an E-commerce website that displays all kinds of light designs and brand.</p>
                    <h3 className='mt-10 font-semibold w-fit relative before:absolute before:left-0 before:top-[100%] before:bg-blue-900 before:w-[70%] before:h-[3px]'>MY ACHIEVEMENTS</h3>
                        <ul className='w-full gap-7'>
                            <li className='my-4 flex items-start gap-1'>-  Created and managed the web application, server and database implementation.</li>
                            <li className='my-4 flex items-start gap-1'>-  Created style guides, templates & content types, best practices, and workflows that increased the throughput of development.</li>
                            <li className='my-4 flex items-start gap-1'>-  Created SEO strategies that made multiple posts rank as the first result on Google for relevant keywords.</li>
                            <li className='my-4 flex items-start gap-1'>-  Researched, monitored, and used the latest technology for development that made sure the company is not lacking behind in technology.</li>
                        </ul>
                    </div>
                    <div className='flex flex-col w-full'>
                    <h3 className='mt-3 font-bold text-2xl'>Full-stack Development</h3>
                    <p className='text-gray-500 text-sm'>AIException</p>
                    <div className='flex justify-between items-center my-2'>
                        <p className='text-gray-500 text-sm'>From: October 2019</p>
                        <p className='text-gray-500 text-sm'>To: May 2020</p>
                    </div>
                    <p className=''>Worked with 2 teams to develop a laundry desktop and andriod application. The purpose of this projects is to connect users to the closest laundry shop depending on the current location of the user.</p>
                    <h3 className='mt-10 font-semibold w-fit relative before:absolute before:left-0 before:top-[100%] before:bg-blue-900 before:w-[70%] before:h-[3px]'>MY ACHIEVEMENTS</h3>
                        <ul className='w-full gap-7'>
                        <li className='my-4 flex items-start gap-1'>-  2 of my Teams and i worked together to create UI designs, database designs, logics, best practices and workflows to be used for the project development which made development very smooth and less stressful.</li>
                        <li className='my-4 flex items-start gap-1'>-  Tools, languages and API's we used throughout the development process are Java, JavaFX, SQLite, MySQL, google cloud messaging, firebase, google map.</li>
                        <li className='my-4 flex items-start gap-1'>-  Thorough research was made to make sure we gave an accurate location and distance of the laundry shop from your current position.</li>
                    </ul>
                    </div>
                    <div className='flex flex-col w-full'>
                    <h3 className='mt-3 font-bold text-2xl'>Full-stack Development</h3>
                    <p className='text-gray-500 text-sm'>AIException</p>
                    <div className='flex justify-between items-center my-2'>
                        <p className='text-gray-500 text-sm'>From: Janurary 2019</p>
                        <p className='text-gray-500 text-sm'>To: June 2019</p>
                    </div>
                    <p className=''>Created and managed an E-commerce web application together with a partner that deals on goods importation.</p>
                    <h3 className='mt-10 font-semibold w-fit relative before:absolute before:left-0 before:top-[100%] before:bg-blue-900 before:w-[70%] before:h-[3px]'>MY ACHIEVEMENTS</h3>
                        <ul className='w-full gap-7'>
                            <li className='my-4 flex items-start gap-1'>-  I and my partner worked together to create UI designs, database designs, logics, best practices and workflows to be used for the project development which made development very smooth and less stressful.</li>
                            <li className='my-4 flex items-start gap-1'>-  Languages used are Java, JavaFX, MySQL, SQLite, MariaDB.</li>
                    </ul>
                    </div>
                </article>
                
                    <div className='w-full h-fit my-8 flex flex-col justify-center items-center'>
                      <h2 className='text-xl text-blue-900 text-center mb-3'>LANGUAGES</h2>
                        <p>English Language-(Fluent)</p>
                        <p>Igbo Language-(Fluent)</p>
                    </div>
                    <article className='flex flex-col w-full h-fit bg-gray-100 mt-4 px-8 py-10'>
                        <h2 className='text-xl text-blue-900 text-center'>HOBBIES AND INTERESTS</h2>
                        <div className='w-full h-fit flex mt-4'>
                            <div className='w-[50%] flex flex-col justify-start items-start px-8 py-5 gap-3'>
                                <p className='flex items-center gap-2 text-blue-900 text-sm'><BiCameraMovie className='text-blue-900' />Anime</p>
                                <p className='flex items-center gap-2 text-blue-900 text-sm'><FiMusic className='text-blue-900' />Music</p>
                                <p className='flex items-center gap-2 text-blue-900 text-sm'><GiArtificialHive className='text-blue-900' />New Technology</p>
                            </div>
                            <div className='w-[50%] flex flex-col justify-start items-start py-5 gap-3'>
                                <p className='flex items-center gap-2 text-blue-900 text-sm'><CgGames className='text-blue-900' />Video Games</p>
                                <p className='flex items-center gap-2 text-blue-900 text-sm'><IoCarSport className='text-blue-900' />Super cars</p>
                                <p className='flex items-center gap-2 text-blue-900 text-sm'><IoMdJet className='text-blue-900' />Jets</p>
                            </div>
                        </div>
                    </article>
                    <button className='bg-gray-400 h-14' onClick={window.print}>download</button>
            </section>
        </div>
    </div>
  )
}

export default FourthResume;