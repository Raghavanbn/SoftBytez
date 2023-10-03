import { Typography } from '@mui/material';
import { Link  } from 'react-router-dom';


const ProfileLayout = () => {

    return(
    <div className="flex flex-col h-full items-center justify-center">
        <div className='flex flex-row space-x-6'>               
            <Typography>
                <Link to="/my-account">My Profile</Link> 
            </Typography>
            <Typography>
                <Link to="/my-timesheet">Timesheet</Link> 
            </Typography>
            <Typography>
                <Link to="/my-travel">My Travel</Link> 
            </Typography>
            <Typography>
                <Link to="/">Logout</Link> 
            </Typography>
        </div>
        <div className='bg-prime-blue h-0.5 w-2/3 mt-3'></div>        
    </div>
        
    );
};

export default ProfileLayout;