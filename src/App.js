import React, { useLayoutEffect, useEffect } from 'react';
import FirstResume from './components/FirstResume';
import SecondResume from './components/SecondResume';
import ThirdResume from './components/ThirdResume';

function App() {
//   console.log('first place to run')

 
//   useLayoutEffect(() => {
//     console.log('useLayoutEffect ran')
//   }, []);

useEffect(() => {
  // console.log('useEffect ran')
  
  let promise1 = Promise.resolve('resolve 1')
  let promise2 = Promise.reject('reject 2')
  let promise3 = Promise.resolve('resolve 3')
  // console.log(promise1);
   Promise.all([promise1, promise2, promise3]).then((results)=>{
    console.log('Results is: ',results)
  }).catch(err=>{
    console.log('Error is: ', err)
  })

}, []);

  return (
    <>
     {/* <FirstResume /> */}
     {/* <SecondResume /> */}
     <ThirdResume />
    </>
  );
}

export default App;
