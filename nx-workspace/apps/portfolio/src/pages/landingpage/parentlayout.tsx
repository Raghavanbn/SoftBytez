import { Typography } from '@mui/material';
import { Link  } from 'react-router-dom';
import PositionedMenu from './mobilemenu';


const ParentLayout = () => {

    return(
    <div className="flex flex-col h-full items-center justify-center">
        <div className='flex flex-row space-x-6 hidden md:block md:flex md:flex-row'> 
           
                <Typography>
                    <Link to="/"><span className='font-righteous font-normal'>Home</span></Link> 
                </Typography>
                <Typography>
                    <Link to="/who-we-are"><span className='font-righteous'>Who We Are</span></Link> 
                </Typography>
                <Typography>
                    <Link to="/what-we-do"><span className='font-righteous'>What We Do</span></Link> 
                </Typography>
                <Typography>
                    <Link to="/contact-us"><span className='font-righteous'>Contact US</span></Link> 
                </Typography>
                {/* <Typography>
                    <Link to="/blog">Blog</Link> 
                </Typography>                                     */}
            
        </div>
        <div className='block md:hidden'>
                <PositionedMenu/>
            </div>
        <div className='bg-prime-color h-0.5 w-2/3 mt-2'></div>        
    </div>
        
    );
};

export default ParentLayout;