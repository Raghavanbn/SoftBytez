import React from 'react';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MessageUs() {

    const { register, handleSubmit } = useForm({
        defaultValues: {
          firstName: '',
          lastName: '',
          
        }
      });

    return (
        <form onSubmit={handleSubmit(console.log)}>
          <input {...register("firstName", { required: true })} placeholder="First name" />        
          <input type="submit" />
        </form>
    );
}