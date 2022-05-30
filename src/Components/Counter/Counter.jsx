import React from 'react';
import { useState } from 'react';
import classes from './Counter.module.scss'

const Counter = () => {

    let inc=()=>{   setLikes(count + 1);}
    let dec=()=>{   setLikes(count - 1);}
  
  const [count, setLikes] = useState(0)
 



    return (
        <div className={classes.Counter}>
             <h1> Простой счетчик</h1>
            <h1> likes = {count} </h1>


            <button onClick={inc}> inc</button>
            <button onClick={dec}> dec</button>


        </div>
    );
};

export default Counter;