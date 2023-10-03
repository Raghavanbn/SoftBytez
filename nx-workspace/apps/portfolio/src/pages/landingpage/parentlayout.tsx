import { Typography } from '@mui/material';
import { Link  } from 'react-router-dom';
import PositionedMenu from './mobilemenu';


const ParentLayout = () => {

    return(
    <div className="flex flex-col h-full items-center justify-center">
        <div className='flex flex-row space-x-6 hidden md:block md:flex md:flex-row'> 
           
                <Typography>
                    <Link to="/">Home</Link> 
                </Typography>
                <Typography>
                    <Link to="/who-we-are">Who We Are</Link> 
                </Typography>
                <Typography>
                    <Link to="/what-we-do">What We Do</Link> 
                </Typography>
                <Typography>
                    <Link to="/contact-us">Contact US</Link> 
                </Typography>
                <Typography>
                    <Link to="/blog">Blog</Link> 
                </Typography>                                    
            
        </div>
        <div className='block md:hidden'>
                <PositionedMenu/>
            </div>
        <div className='bg-prime-blue h-0.5 w-2/3 mt-2'></div>        
    </div>
        
    );
};

export default ParentLayout;