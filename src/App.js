import React, { useLayoutEffect, useEffect } from 'react';
import FirstResume from './components/FirstResume';
import SecondResume from './components/SecondResume';
import ThirdResume from './components/ThirdResume';
import FourthResume from './components/FourthResume';
import CoverLetter1 from './coverLetters/CoverLetter1';
import CoverLetter2 from './coverLetters/CoverLetter2';

function App() {
//   console.log('first place to run')

 
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect ran')
//   }, []);



  return (
    <>
     {/* <FirstResume /> */}
     {/* <SecondResume /> */}
     {/* <ThirdResume /> */}
     {/* <FourthResume /> */}
     <CoverLetter1 />
     {/* <CoverLetter2 /> */}
    </>
  );
}

export default App;
