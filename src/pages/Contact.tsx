import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');

  const sendEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus('sending');



    if(name && email && message) {

      const template_params = {
        from_name: name,
        from_email: email,
        message: message
      };

      emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('sent');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch((error) => {
          console.error('FAILED...', error);
          setStatus('error');
        });


    };

    return;
  }


  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={fadeInUp}
      className='bg-[#0F172B] min-h-screen'>


      <div className='w-full h-full flex justify-center items-center pt-[130px]'>
        <form action="" className='flex flex-col gap-6 w-full sm:w-[372px]'>

          <p className='text-[18px] sm:text-2xl'>
            Send me a message:
          </p>
          <div className='flex flex-col gap-2'>
            <label className='text-[#90A1B9]' htmlFor="name">_name:</label>
            <input value={name} onChange={(event) => setName(event.target.value)} type="text" id="name" name="name" className="text-[#90A1B9] p-3 rounded-md border-[#CAD5E2] border leading-6 bg-[#020618]" />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[#90A1B9]' htmlFor="email">_email:</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" className="text-[#90A1B9] bg-[#020618] p-3 rounded-md border-[#CAD5E2] border leading-6 " />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[#90A1B9]' htmlFor="message">_message:</label>
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} id="message" name="message" className="text-[#90A1B9] p-3 rounded-md border-[#CAD5E2] border leading-6 pb-[84px] bg-[#020618]" placeholder='your message here...' />
          </div>

          <div>
            <button className={`bg-[#314158] text-[#62748E] text-[14px] px-[12px] py-2.5 rounded-md ${(name && email && message) && 'text-white'}`} type="submit" disabled={(name && email && message) ? false : true} onClick={sendEmail}>submit-message</button>
          </div>

          {
            status === 'sent' && <p>Message sent!</p>
          }
          {
            status === 'sending' && <p>Sending message...</p>
          }
          {
            status === 'error' && <p>Something went wrong, please try again</p>
          }
        </form>
      </div>

    </motion.div>
  );
};

export default Contact;