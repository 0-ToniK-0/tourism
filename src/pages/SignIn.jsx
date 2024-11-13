import SignIn_form from '../components/SignIn_form'
import signInImage from '../assets/images/signInImage.jpeg'
import { AnimatePresence, motion} from 'framer-motion'


const SignIn = () => {
  const addUser = async (newUser) => {
    const res = await fetch ('/api/users', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
    });
      return;
    };

  return (
    <section className='mt-14'>
      <motion.div className='w-full lg:w-2/3 flex flex-col-reverse lg:flex-row-reverse m-auto gap-7 pb-16 '>
        <motion.div 
          initial={{opacity:0}}
          animate={{ 
            translateX:"var(--transRB)",
            opacity:1
          }} 
          transition={{ duration:0.9, ease:'easeOut' }}
        className='m-auto w-11/12 lg:w-1/2 mt-7 2xl:[--transRB:-80vh] xl:[--transRB:-75vh] lg:[--transRB:-40vh]'>
        <SignIn_form addNewUser={addUser}/>
        </motion.div>
        <motion.div 
        animate={{ 
          translateX:"var(--transLB)",
        }} 
        transition={{ duration:0.75, ease:'easeOut' }}
        className='w-3/5 m-auto  2xl:[--transLB:80vh] xl:[--transLB:75vh] lg:[--transLB:40vh]'>
          <img src ={signInImage}></img>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SignIn