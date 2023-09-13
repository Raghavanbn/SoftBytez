import React, {ChangeEvent, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { Typography } from "@material-tailwind/react";
import * as EmailValidator from 'email-validator';

import Header from './pages/components/header';
import Footer from './pages/components/Parentfooter';
import ContactUsForm from './pages/components/contactus';


function MyButton() {   
  const [subscriptionEmail, setSubscriptionEmail] = useState('');  
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isSubscriptionEmailValid, setIsSubscriptionEmailValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscriptionEmail(e.target.value);
    
  };

  function handleClick() { 

    if(EmailValidator.validate(subscriptionEmail)){      
      setSubscriptionEmail('');
      setOpenConfirm(true);      
      setIsSubscriptionEmailValid(true);
    } else { 
      setOpenConfirm(false); 
      setIsSubscriptionEmailValid(false);
    }
    
  }
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="relative mb-4 flex flex-wrap items-stretch">
     
        <TextField required
          className='relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
          id="subscription" 
          label="Email" 
          error={!isSubscriptionEmailValid}
          helperText={!isSubscriptionEmailValid ? "Incorrect entry." : ""}
          onChange={handleChange} value={subscriptionEmail} variant="outlined" />
        
        <Button type='submit' variant="contained" onClick={handleClick}>Sign in</Button>
        <br/>

        

        
    </div>
    <Alert className= {openConfirm ? "visible" : "invisible" } onClose={() =>{setOpenConfirm(false)}}>Great, now you subscribed to our newsletter! </Alert>
    </div>
    
  );
}

function App() {
  return (
    <div>
      <Header/>
      <section>
          
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-[32rem]"
        style={{backgroundImage: "url(/images/laptop.png)"}}>

          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                  <div className="text-white">
                    <h4 className="mb-6 text-xl font-semibold ">We make technology accessible!</h4>
                    <h2 className="mb-4 text-4xl font-semibold text-justify">Professional</h2>     
                    <h2 className="mb-4 text-4xl font-semibold text-justify">Technology</h2>
                    <h2 className="mb-4 text-4xl font-semibold text-justify">Assistance</h2>               
                  </div>
              </div>
          </div>

      </div> 
        <header>
            <p className="mt-6 text-neutral-400 font-bold text-2xl text-center">
            <Typography variant="h1" color="gray" textGradient>
                About Us
            </Typography>
            </p>
        </header> 
        <section className="mt-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/a1.png" alt="Technical Experience"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-center font-semibold">
                    Technical Experience
                </div>                
                    <p className="mt-2">We are well-versed in a variety of operating systems, networks, and databases. 
                    We work with just about any technology that a small business would encounter. 
                    We use this expertise to help customers with small to mid-sized projects.
                </p>
              </div>
            </div>
        </section>     

        <section className="mt-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex flex-row-reverse">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/a2.png" alt="High ROI"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-center font-semibold">
                    High ROI
                </div>                
                     <p className="mt-2">Do you spend most of your IT budget on maintaining 
                        your current system? Many companies find that constant maintenance eats into 
                        their budget for new technology. By outsourcing your IT management to us, you 
                        can focus on what you do best--running your business.
                    </p>
              </div>
            </div>
        </section>  
        
        <section className="mt-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/a3.png" alt="Satisfaction Guaranteed"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-center font-semibold">
                    Satisfaction Guaranteed
                </div>                
                    <p className="mt-2">The world of technology can be fast-paced and scary. 
                        That's why our goal is to provide an experience that is tailored to your 
                        company's needs. No matter the budget, we pride ourselves on providing 
                        professional customer service. We guarantee you will be satisfied with our work.
                </p>
              </div>
            </div>
        </section> 

        <header>
            <p className="regal-grey mt-9 text-neutral-400 font-bold text-2xl text-center">
              <Typography variant="h1" color="gray" textGradient>
                  Photo Gallery
              </Typography>
            </p>
        </header>

        <section>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/pg1.png" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/pg2.png" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/pg3.png" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/pg4.png" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/pg5.png" />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src="/images/pg6.png" />
                    </div>
                  </div>
                </div>
              </div>
        </section> 
        
        <header>
            <p className="mt-9 text-neutral-400 font-bold text-2xl text-center">
            <Typography variant="h1" color="gray" textGradient>
                Subscribe
            </Typography>              
            </p>
            <h5 className="mt-9 text-base text-center">
              Sign up to hear from us about specials, sales and events.
            </h5>
            
        </header>
        <MyButton/>
      </section>
      <div className="mt-9 text-base text-center">
        <ContactUsForm/>
      </div>
      
     
      <Footer/>

    </div>
  );
}

export default App;
