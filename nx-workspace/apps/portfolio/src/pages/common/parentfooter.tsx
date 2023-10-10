
import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from './footer';
import { Typography } from '@mui/material';
import { Link  } from 'react-router-dom';

const ParentFooter = () => {   

    return(
        
        <footer
        className="mt-9 bg-prime-color text-center text-white dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        
        <div className="border-b-2 border-neutral-200 p-6 dark:border-neutral-500">
          <div className="container mx-auto px-10">
            <div className="flex items-center justify-center lg:justify-between">
              <div className="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
              </div>
              <div className="flex justify-center">
                <a href="https://www.facebook.com/people/SoftBytez/61551395003618/" className="mr-6">
                  <FacebookIcon/>
                </a>                
                {/* <a href="#!" className="mr-6">
                  <TwitterIcon/>
                </a>         */}
                <a href="https://instagram.com/softbytez2023?igshid=MzMyNGUyNmU2YQ==" className="mr-6">
                  <InstagramIcon/>
                </a>
                <a href="https://www.linkedin.com/in/raghavan1986" className="mr-6">
                  <LinkedInIcon/>
                </a>
                
              </div>
            </div>
            <div>
                <p className='text-center mt-6'>
                <Typography>
                    <Link to="/tnc">Terms of use</Link> | <Link to="/privacy">Privacy Policy</Link> 
                </Typography>
                </p>
            </div>
          </div>
        </div>
        
        <Footer/>
        
        
        </footer>       
    );
};

export default ParentFooter;