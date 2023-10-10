import { Typography } from '@mui/material';

import AboutUs1 from '/assets/images/aboutus1.png';
import AboutUs2 from '/assets/images/aboutus2.png';
import AboutUs3 from '/assets/images/aboutus3.png';
import PG1 from '/assets/images/pg1.png';
import PG2 from '/assets/images/pg2.png';
import PG3 from '/assets/images/pg3.png';
import PG4 from '/assets/images/pg4.png';
import Video from '/assets/videos/galVideo1.mp4'
import Video1 from '/assets/videos/galVideo2.mp4'
import ParentLayout from './parentlayout';

const LandingScreen = () => {

    return(

      <section>
        <ParentLayout/>
        <header>
          <p className='text-prime-color mt-6 text-neutral-400 text-2xl text-center'>          
            <Typography  variant="h4" gutterBottom>
               <span className='font-righteous'> We make technology accessible! </span>
            </Typography>  
          </p>           
        </header>       

      <div
        className="mt-6 relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-[32rem] bg-laptop">       
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"></div>

      </div> 
        <header>
            <p className="text-prime-color mt-6 text-neutral-400 text-2xl text-center">
            <Typography  variant="h4" gutterBottom>
               <span className='font-righteous'> About Us </span>
            </Typography>
            </p>
        </header> 
        <section className="mt-9 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={AboutUs1} alt="Technical Experience"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-center ">
                <span className='font-righteous'>Technical Experience </span>
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
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={AboutUs2} alt="High ROI"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-center">
                <span className='font-righteous'>High ROI </span>
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
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={AboutUs3} alt="Satisfaction Guaranteed"/>
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-center">
                <span className='font-righteous'>Satisfaction Guaranteed </span>
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
            <p className="text-prime-color mt-9 text-neutral-400 text-2xl text-center">
            <Typography variant="h4" gutterBottom>
              <span className='font-righteous'> Gallery </span>
              </Typography>
            </p>
        </header>

        <section>
            <div className="mt-6 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={PG1} />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={PG2} />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <video  autoPlay controls muted>
                          <source src={Video1} type="video/mp4"></source>
                        </video>
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={PG4} />
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <video  autoPlay controls muted>
                        <source src={Video} type="video/mp4"></source>
                      </video>
                    </div>
                  </div>
                  <div className="flex w-1/3 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg object-cover object-center"
                        src={PG3} />
                    </div>
                  </div>
                </div>
              </div>
        </section> 
        
        

      </section>

    );
};

export default LandingScreen;