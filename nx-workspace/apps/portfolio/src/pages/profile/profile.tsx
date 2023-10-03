import { Typography } from "@mui/material";
import ParentLayout from "../landingpage/parentlayout";
import { useForm, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer, DemoItem  } from '@mui/x-date-pickers/internals/demo';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import dayjs from 'dayjs';

const Profile = () => {

  const onSubmit = () => {
    // Send the form data to the Java back-end
    fetch('http://localhost:8080/service/user/fetchAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response from the back-end
        console.log('Response from Java:', responseData);
      })
      .catch((error) => {
        console.error('Error sending data to Java:', error);
      });
  };

 
  const createUser = () => {
   


    const timestamp = getValues().dateOfBirth; // Replace with your timestamp
    const formattedDate = dayjs(timestamp).format('YYYY-MM-DD');
    setValue('dateOfBirth',formattedDate);


  
    
   

    fetch('http://localhost:8080/service/user/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getValues()),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Response from Java:', responseData);
        reset();
      })
      .catch((error) => {
        console.error('Error sending user data:', error);
      });
  };
  

 

  
  const { control, getValues,  setValue,  reset, handleSubmit } = useForm({
    mode: 'all',  
    defaultValues: {
        userName : "", // textfield
        dateOfBirth : "", // datepicker
        gender : '', // radiobutton
        title : '', // Autocomplete
        isActive : false // checkbox
    }  
}); 



 
  
  






  const titleTypes = [
    { code: 'Mr', label: 'Mr'},
    { code: 'Mrs', label: 'Mrs'},
    { code: 'Dr', label: 'Dr'},
    { code: 'Ms', label: 'Ms'},
  ];


    return(
      <div>
          <ParentLayout/>
          <div className="mx-6 py-10 items-center justify-center">            
            <p className="font-bold text-2xl text-center">
              <Typography variant="h2" gutterBottom>Great, things are coming soon! </Typography>            
            </p>
          </div>
          <div >
          <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit(createUser)}> 
              <Controller
                name="userName"
                control={control}
                rules={{ required: true, pattern: /^[A-z\s.-]+$/, minLength:3, maxLength:30 }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    error={!!error}
                    required
                    helperText={!!error && 'Please enter your name , Minimum Characters is 3 '}                    
                    variant="outlined"
                    label="Name"
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <Controller
                  name="dateOfBirth"
                  control = {control}
                  rules={{required: true}}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                       <DemoContainer components={['MobileDatePicker']}>
                       <DemoItem label="Date of Birth">
                            <MobileDatePicker                              
                            value={value}
                            onChange={onChange}/>
                        </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    )}
              />

              <Controller
                  name="gender"
                  control = {control}
                  rules={{required: true}}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      value={value}
                      onChange={onChange}
                    >
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>
                  </FormControl>

                    )}
              />

              <Controller
                name="title"
                control={control}
                rules={{required: true}}                
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <Autocomplete
                    disableClearable
                    sx={{ width: '100%' }}
                    options={titleTypes}
                    
                    getOptionLabel={(option) => option.label}
                    
                    //{titleTypes.find((options) => options.code === value)}                                   
                    onChange={(e, value) => {
                      onChange(value.code);
                    }}
                    renderInput={(params) => (
                      <TextField
                        label="Title"
                        {...params}
                        variant="outlined"
                        helperText={
                          error
                            ? 'Selected title does not exist in all of selected organizations, please select available title'
                            : ''
                        }
                        error={!!error}
                      />
                    )}
                   
                  />
                )}
              />
              <Controller
                name="isActive"
                control={control}
                rules={{required: true}}
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
                      label="Active user"                      
                    />
                  );
                }}
              />   
                <Button type="submit"  variant="contained" color="primary">Save User</Button>
              </form>
          </div>
      </div>
    );
};

export default Profile;