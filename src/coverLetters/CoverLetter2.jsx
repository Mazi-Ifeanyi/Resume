import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsFillPhoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { IoLogoTwitter } from 'react-icons/io'


const CoverLetter2 = () => {

  const requestNotifyPermission = () =>{
     if(!('Notification' in window))throw new Error('Browser doesn\'t support notification');
     Notification.requestPermission().then(permission=>{
      const notificationOption={
        body: 'Welcome bro'
      }
      new Notification('Hello world', notificationOption);
     })
  }


  return (
    <div className='w-full h-screen flex font-sans'>
       <div className='w-[800px] flex flex-col border m-auto'>
          <header className='flex flex-col px-6 pt-6 pb-2'>
            <h1 className='font-bold text-3xl text-black font-sans'>Ifeanyichukwu</h1>
            <p className='text-[#5ab6cc]'>Full-stack Web Developer</p>
            <div className='flex mt-10 bg-[#5ab6cc] rounded-lg'>
                <div className='w-[50%] flex flex-col justify-start items-start px-8 py-5 gap-3'>
                    <a className='flex items-center gap-2 text-white text-sm' href='mailto:ifeanyiilonzejoseph@gmail.com'><HiMail className='text-white' />ifeanyiilonzejoseph@gmail.com</a>
                    <a className='flex items-center gap-2 text-white text-sm' href='https://github.com/Mazi-Ifeanyi'><AiFillGithub className='text-white' />GitHub Account</a>
                    <a className='flex items-center gap-2 text-white text-sm' href='https://twitter.com/mazii_ifeanyi'><IoLogoTwitter className='text-white' />Twitter Account</a>
                </div>
                <div className='w-[50%] flex flex-col justify-start items-start py-5 gap-3'>
                   <a className='flex items-center gap-2 text-white text-sm' href='tel:+2348145023849'><BsFillPhoneFill className='text-white' />(+234)8145023849</a>
                   <a className='flex items-center gap-2 text-white text-sm' href='https://www.linkedin.com/in/ifeanyichukwu-ilonze'><AiFillLinkedin className='text-white' />LinkedIn</a>
                   <a className='flex items-center gap-2 text-white text-sm' href='https://www.facebook.com/MaziIfeanyiIlonze'><AiFillFacebook className='text-white' />Facebook</a>
                </div>
            </div>

            <div className='flex flex-col'>
              <p className='text-gray-500 mt-8 text-sm'>To</p>
              <h3 className='font-semibold text-sm'>Recepient Name, <br />Recepient's Job Title, <br />Company Name, <br />Company Address, <br />Email@gmail.com, <br />City, state, zip code</h3>
              <p className='text-gray-500 text-sm'>June 10, 2023</p>
            </div>
            <hr className='w-full h-[0.2rem] my-6 border-none bg-gradient-to-r from-[#5ab6cc] via-white to-white ' />
          </header>

          <article className='flex flex-col w-full h-fit px-6 py-2'>
           <p className='font-semibold text-sm'>Dear Hiring Manager,</p>
           <p className='mt-4'>
            I am writing to express my strong interest in the junior blockchain developer position at your company. With my extensive experience in web development and a passion for creating innovative and user-friendly solutions, I believe I am an excellent fit for your organization.<br/><br/>

            As a highly skilled full-stack web developer, I have a solid foundation in both front-end and back-end technologies. I am proficient in HTML, CSS,  JavaScript and typescript for building responsive and intuitive user interfaces. Additionally, I have expertise in various front-end frameworks such as React  which I have leveraged to create dynamic and interactive web applications. On the back-end, I have a strong command of server-side languages like Node.js, as well as experience with frameworks like Express and databases like mongodb and SQL databases.<br/><br/>

            Throughout my career, I have successfully completed numerous web development projects, working closely with cross-functional teams to deliver high-quality results. I am adept at translating complex business requirements into efficient and scalable code, ensuring that the end product aligns with the client's vision. My strong problem-solving skills allow me to troubleshoot issues and implement effective solutions in a timely manner.<br/><br/>

            Furthermore, I am committed to continuously expanding my knowledge and staying updated with the latest industry trends and best practices. I have a passion for learning and regularly participate in online courses, workshops, and tech communities to enhance my skill set and stay at the forefront of the field.<br/><br/>

            Thank you for considering my application. I would welcome the chance to discuss how my qualifications align with your organization's needs in more detail. Please find attached my resume for your review. I look forward to the possibility of joining your team and contributing to your continued success.<br/><br/>

          Sincerely, <br />
          Ifeanyichukwu
          </p>
        </article>
        <button className='bg-gray-500' onClick={window.print}>print</button>
       </div>
    </div>
  )
}

export default CoverLetter2