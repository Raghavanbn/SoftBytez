import React, {useState, useRef  } from 'react';
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from "@mui/material";
import Alert from '@mui/material/Alert';
import emailjs from 'emailjs-com';
import { Link  } from 'react-router-dom';
import ParentLayout from './parentlayout';
import { object, string,  boolean } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const ContactUsForm = () => {

  const [isConfirmAlertVisible, setIsConfirmAlertVisible] = useState(false); 
  const [isErrorAlertVisible, setIsErrorAlertVisible] = useState(false);
  
    const formRef = useRef<HTMLFormElement | null>(null);

    const contactSchema = object({

      userName: string()
                .required("Name is required.")                
                .min(3, "Must be atleast 3 characters long.")
                .max(20,"Must not be greater than 20 characters long.")
                .matches(/^[A-z\s.-]+$/, "Please enter only characters."),
      
      contactEmail: string()
                    .required("Email is required.")
                    .min(3, "Must be atleast 3 characters long.")
                    .email("Must be valid email."),

      contactNumber: string()
                    .required("Contact Number is required.")
                    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/," Invalid Phone Number.")
                    .min(10,"Must be 10 digits.")
                    .max(10, "Must not be more than 10 digits."),
                    
      contactMessage: string()
                      .required("Message is required.")
                      .min(5,"Must be atleast 5 characters long.")
                      .max(50,"Must not be more than 50 characters long."),

      hasSubscription: boolean(),

      tnc: boolean().oneOf([true],"Please read and accept the Terms of Use.")

    }).required()
    
    const { control,  formState:{isValid, errors},  reset, handleSubmit } = useForm({
        resolver: yupResolver(contactSchema),      
        mode:'all', 
        defaultValues: {
          userName:'',
          contactEmail:'',
          contactNumber:'',
          contactMessage:'',
          hasSubscription:false,
          tnc:false
        }
    });    

    interface FormData {
      userName: string;
      contactEmail: string;
      contactMessage: string;
      contactNumber: string;
    }

    const onSubmit =  async (formData: FormData) => {
      if(isValid){

        try{        
         
        const serviceId = 'service_y0nmspl';
        const templateId = 'template_l9idcm6';      
        
        const formDataObject = {
          userName: formData.userName,
          contactEmail: formData.contactEmail,
          contactMessage: formData.contactMessage, 
          contactNumber: formData.contactNumber
        };
  
          const response = await emailjs.send(
            serviceId,
            templateId,
            formDataObject,
            'Pdl4L1crm9SS0OudH'
          );
          console.log(response.text);
          setIsConfirmAlertVisible(true);         
          
          
        } catch (error) {
          console.error('Error sending email:', error);  
          setIsErrorAlertVisible(true);       
        }
        reset();
      }      
      
    };
    
   

    const TnCAndPrivacy = () => {

      return(
        <div>           
            <Typography>
              I have read and agree to SoftBytez's <u> <Link to="/tnc">Terms of Use</Link></u> and 
              <u><Link to="/privacy"> Privacy Policy </Link></u>
            </Typography>
        </div>
      );
    };

    return(
      <div>
        <ParentLayout/>

        <div className="mx-6 py-10 items-center justify-center">
          <p className="font-bold text-2xl text-center">
            <Typography gutterBottom>Better yet, see us in person!</Typography>
            <Typography gutterBottom>We love our customers, so feel free to visit during normal business hours.</Typography>
            <Typography gutterBottom>Hours Open   Mon - Fri 09:00 – 17:00 IST</Typography>
            <Typography gutterBottom>Chennai, TamilNadu, India</Typography>
          </p>
        </div>
        <header>
            <p className="text-prime-blue mt-9 text-neutral-400 font-bold text-2xl text-center">
            <Typography variant="h4" gutterBottom>
                  Contact US
              </Typography>
            </p>
        </header>
        <div className="flex flex-col gap-6 p-4">        
        <form  className="flex flex-col gap-6 p-4" ref={formRef}  onSubmit={handleSubmit(onSubmit)}> 
            <Controller
                name="userName"                
                control={control}                
                render={({ field: { onChange, value } }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    required
                    id="userName"
                    error={!!errors.userName}                    
                    helperText={!!errors.userName && errors.userName?.message}                    
                    variant="outlined"
                    label="Name"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

            <Controller
                name="contactEmail"
                control={control}                
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField                    
                    sx={{ width: '100%' }}
                    required
                    id="contactEmail"
                    label="Email"                   
                    variant="outlined"
                    error={!!error}
                    helperText={!!error && errors.contactEmail?.message}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

            <Controller
                name="contactNumber"
                control={control}
                rules={{ pattern: /^[0-9\s.-]+$/, minLength:10, maxLength:10 }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    required
                    id="contactNumber"
                    error={!!error}                    
                    helperText={!!error && errors.contactNumber?.message}                    
                    variant="outlined"
                    label="Contact Number"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

            <Controller
                name="contactMessage"
                control={control}
                rules={{ required: true, pattern: /^[a-zA-Z0-9\s.-]+$/, minLength:5 }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                    required
                    id="contactMessage"
                    sx={{ width: '100%' }}
                    error={!!error}                    
                    helperText={!!error && errors.contactMessage?.message}  
                    label="Message"
                    multiline
                    rows={4}
                    value={value}
                    onChange={onChange}                    
                  />
                )}
              />

            <Controller
                name="hasSubscription"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value || false}
                          onChange={(e, value) => {
                            onChange(value);
                          }}
                        />
                      }
                      label="Yes, I would like to receive marketing communications regarding Softbytez services and events."                      
                    />
                  );
                }}
              />   
              <Controller
                name="tnc"
                control={control}
                rules={{required: true}}
                render={({ field: { onChange, value }, fieldState: { error } }) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox  
                          required  
                          id="tnc"        
                          checked={value || false}                          
                          onChange={(e, value) => {
                            onChange(value);
                          }}
                         
                        />
                      }
                      label={<TnCAndPrivacy/>}                      
                    />                    
                  );
                  
                }}
              /> 
                       
             {errors.tnc && <p className='text-red-600'>{errors.tnc?.message}</p>}
                    
            <Button type="submit" variant="contained" color="primary">Send Message</Button>
            </form>
            
            <Alert className= {isConfirmAlertVisible ? "visible" : "invisible" } onClose={() => setIsConfirmAlertVisible(false)}>Thanks for the message. Will reach you shortly!</Alert>
            <Alert severity='error' className= {isErrorAlertVisible ? "visible" : "invisible" } onClose={() => setIsErrorAlertVisible(false)}>Error sending email, please try later</Alert>
            
        </div>
        </div>
    );

};

export default ContactUsForm;