import React, {ChangeEvent, useState, useRef } from 'react';
import {
  Drawer,
  Typography,
  IconButton
} from "@material-tailwind/react";

import emailjs from 'emailjs-com';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import * as EmailValidator from 'email-validator';



export default function ContactUsForm() {
  const [open, setOpen] = useState(false); 
  const closeDrawer = () => setOpen(false); 

  const [openConfirmAlert, setOpenConfirmAlert] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState(''); 
  const [subject, setSubject] = useState('');   
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  let [isMessageValid, setIsMessageValid] = useState(true);
  let [isEmailValid, setIsEmailValid] = useState(true);
  let [isNameValid, setIsNameValid] = useState(true);
  let [isSubjectValid, setIsSubjectValid] = useState(true);  

  const [isConfirmAlertVisible, setIsConfirmAlertVisible] = useState(false);

  function handleClick() {  

    if(name.length != 0){
      setIsNameValid(true);
    }

  (EmailValidator.validate(email) ? setIsEmailValid(true) : setIsEmailValid(false));  

    (subject.length != 0 ? setIsSubjectValid(true) : setIsSubjectValid(false));

    (message.length != 0 ? setIsMessageValid(true) : setIsMessageValid(false));   

    (name.length != 0 ? setIsNameValid(true) : setIsNameValid(false));

    if ((subject.length != 0) && (message.length != 0) && (email.length != 0) && (name.length != 0)){       
      setIsConfirmAlertVisible(true);       
    }    
  }

  const sendEmail = (e:React.FormEvent) => {
    e.preventDefault();
    handleClick();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID || 'service_y0nmspl',
      process.env.REACT_APP_TEMPLATE_ID || 'template_l9idcm6',
      form.current || '',
      process.env.REACT_APP_USER_ID || 'SoftBytez'
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    );
    form.current && form.current.reset();
  };

  function openDrawer()  {
    setEmail('');
    setName('');
    setSubject('');    
    setMessage('');   
    setIsMessageValid(true);
    setIsEmailValid(true);
    setIsNameValid(true);
    setIsSubjectValid(true);
    setIsConfirmAlertVisible(false);
    setOpen(true);
    
  }
  
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
    const handleSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSubject(e.target.value);
        
    };
    
    function handleMessageChange(val :string) {      
      setMessage(val);
    }
  return (
    <React.Fragment>      
      <Button variant="contained" onClick={openDrawer}>Contact US</Button>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="gray">
            Contact Us
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
        <form className="flex flex-col gap-6 p-4" ref={form} onSubmit={sendEmail}> 

          <TextField id="name" required 
          label={"Name"} variant="outlined" 
          error={!isNameValid}
          helperText={!isNameValid ? "Incorrect entry." : ""}          
          onChange={handleNameChange} value={name}/> 

          <TextField id="email" required 
            label="Email" 
            error={!isEmailValid}
            helperText={!isEmailValid ? "Incorrect entry." : ""}
            variant="outlined" onChange={handleEmailChange} value={email}/> 
                   
          <TextField id="sub" required 
            label="Subject" 
            error={!isSubjectValid}
            helperText={!isSubjectValid ? "Incorrect entry." : ""}
            variant="outlined" onChange={handleSubjectChange} value={subject}/>
          
          <TextField id="comments" required            
            label="Message" 
            error={!isMessageValid}
            helperText={!isMessageValid ? "Incorrect entry." : ""}
            multiline rows={4} value={message} onChange={e=> handleMessageChange(e.target.value)}/>
                  
            <Button type='submit' variant="contained" onClick={sendEmail}>Send Message</Button>

            <Alert className= {isConfirmAlertVisible ? "visible" : "invisible" } onClose={closeDrawer}>Thanks for the message. Will reach you shortly!</Alert>

        </form>
        </div>        
      </Drawer>
    </React.Fragment>
  );
}