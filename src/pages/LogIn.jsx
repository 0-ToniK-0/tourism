import React from 'react'
import LogIn_form from '../components/LogIn_form';
import raoucheLogIn2 from '../assets/images/raoucheLogIn2.jpg';
import { motion as m } from 'framer-motion';


const LogIn = () => {

  const updateUser = async (userUpdated) => {

    
    const res = await fetch (`http://localhost:8000/users/${userUpdated.id}`, {
        method:'PUT',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userUpdated)
    });
      return;
    };

  return (
    <section className='my-14 mb-16'>
      <m.div className='w-full lg:w-2/3 flex flex-col lg:flex-row-reverse m-auto gap-7 '>
        <m.div 
        animate={{ 
          translateX:"var(--transRB)",
        }} 
        transition={{ duration:0.75, ease:'easeOut' }}
        className= "w-2/3 m-auto lg:w-3/5 z-20 2xl:[--transRB:-80vh] xl:[--transRB:-75vh] lg:[--transRB:-40vh]">
          <img src ={raoucheLogIn2}></img>
        </m.div>
        <m.div
        initial={{opacity:0}}
        animate={{ 
          translateX:'var(--transLB)',
          opacity:1
        }}
        transition={{ duration:0.9, ease:'easeOut' }}
        className='m-auto w-11/12 lg:w-1/2 my-auto 2xl:[--transLB:80vh] xl:[--transLB:75vh] lg:[--transLB:40vh]  '>
        <LogIn_form  />
        </m.div>
      </m.div>
    </section>
  )
}

export default LogIn