import React, { useEffect, useState } from 'react';
import classes from '../styles/CustomCircle.module.css';


  const CustomCircle = ({ colorCount }) =>{
    const [ circleArray, setCircleArray ] = useState([])
     let circles =[];

    useEffect(()=>{
        for(let i = 0; i < 5; i++){
           circles.push({ isColored: i+1 <= colorCount? true: false });
        }
        setCircleArray(circles);
    },[]);


    return<div className={classes.parent}>
            {circleArray.map((item, index)=>(
                    <div key={index} className={classes.circle} style={{ backgroundColor: (item.isColored)? '#54a8db' : 'rgb(237, 237, 237)' }}></div>
            ))}
          </div>
  }

  export default CustomCircle;