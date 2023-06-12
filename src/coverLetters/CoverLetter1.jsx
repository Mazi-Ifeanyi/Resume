import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsFillPhoneFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { IoLogoTwitter } from 'react-icons/io'

const CoverLetter1 = () => {
  return (
    <div className='w-full h-screen flex'>
      <div className='w-[800px] border m-auto flex flex-col'>
        <header className='w-full h-fit flex px-6 py-6'>
          <div className='flex flex-col w-[50%]'>
              <h1 className='font-bold text-3xl'>Ifeanyichukwu</h1>
              <p className='text-gray-500'>Full-stack Web Developer</p>
              <p className='text-gray-500 mt-8 text-sm'>To</p>
              <h3 className='font-semibold text-sm'>Hiring Manager, <br />Full stack Developer, <br />Golden Hippo, <br />Woodland Hills, <br /> <br /></h3>
              <p className='text-gray-500 text-sm'>June 9, 2023</p>
          </div>
          <div className='flex flex-col w-[50%] justify-start items-end gap-3'>
          <a className='flex items-center gap-2 text-gray-900 text-sm' href='mailto:ifeanyiilonzejoseph@gmail.com'>ifeanyiilonzejoseph@gmail.com <HiMail className='text-gray-900' /></a>
          <a className='flex items-center gap-2 text-gray-900 text-sm' href='https://github.com/Mazi-Ifeanyi'>GitHub Account <AiFillGithub className='text-gray-900' /></a>
          <a className='flex items-center gap-2 text-gray-900 text-sm' href='https://twitter.com/mazii_ifeanyi'>Twitter Account <IoLogoTwitter className='text-gray-900' /></a>
          <a className='flex items-center gap-2 text-gray-900 text-sm' href='tel:+2348145023849'>(+234)8145023849<BsFillPhoneFill className='text-gray-900' /></a>
          <a className='flex items-center gap-2 text-gray-900 text-sm' href='https://www.linkedin.com/in/ifeanyichukwu-ilonze'>LinkedIn<AiFillLinkedin className='text-gray-900' /></a>
          <a className='flex items-center gap-2 text-gray-900 text-sm' href='https://www.facebook.com/MaziIfeanyiIlonze'>Facebook<AiFillFacebook className='text-gray-900' /></a>
          </div>
        </header>
        <article className='flex flex-col w-full h-fit px-6 py-4'>
           <p className='font-semibold text-sm'>Dear Hiring Manager,</p>
           <p className='mt-4'>
          I am writing to express my strong interest in the Full Stack developer position at Golden Hippo. With my extensive experience in web development and a passion for creating innovative and user-friendly solutions, I believe I am an excellent fit for your organization.<br/><br/>

          As a highly skilled full-stack web developer, I have a solid foundation in both front-end and back-end technologies. I am proficient in HTML, CSS,  JavaScript and i recently added Typescript to my stack for building responsive, efficient and intuitive user interfaces. Additionally, I have expertise in one of the front-end frameworks like React  which I have leveraged to create dynamic and interactive web applications. On the back-end, I have a strong command of server-side languages like Node.js, as well as experience with frameworks like Express and databases like mongodb.<br/><br/>

          Throughout my career, I have successfully completed numerous web development projects, working closely with cross-functional teams to deliver high-quality results. I am adept at translating complex business requirements into efficient and scalable code, ensuring that the end product aligns with the client's vision. My strong problem-solving skills allow me to troubleshoot issues and implement effective solutions in a timely manner.<br/><br/>

          Furthermore, I am committed to continuously expanding my knowledge and staying updated with the latest industry trends and best practices. I have a passion for learning and regularly participate in online courses and tech communities to enhance my skill set and stay at the forefront of the field.<br/><br/>

          Thank you for considering my application. I would welcome the chance to discuss how my qualifications align with your organization's needs in more detail. Please find attached my resume for your review. I look forward to the possibility of joining your team and contributing to your continued success.<br/><br/>

          Sincerely, <br />
          Ifeanyichukwu
          </p>
        </article>
        <button onClick={window.print}>print</button>
      </div>
    </div>
  )
}

export default CoverLetter1