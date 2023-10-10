
import Typography from '@mui/material/Typography';

import Web_Development from '/assets/images/web_dev.jpg';
import Mobile_Development from '/assets/images/mobile_dev.jpg';
import API_Development from '/assets/images/microservices_dev.jpg';
import DATA_ANALYTICS from '/assets/images/data_analytics.jpg';
import DB_DEV_NGMT from '/assets/images/db.jpg';
import TESTING from '/assets/images/testing.jpg';
import ParentLayout from './parentlayout';

const WorkCard = ()  => {
  return (
    <div>
      <ParentLayout/>

      <div className='mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row'>
        <div className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={Web_Development} alt="Web development" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" component="div">
              <span className='font-righteous font-normal'>Web Development</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transforming ideas into digital experiences, our web development expertise brings your 
                vision to life. With cutting-edge technologies and creative design, we craft responsive,
                 user-friendly websites. Our team ensures seamless functionality, captivating visuals,
                 and optimal performance, creating a strong online presence for your brand. Count on
                 us to deliver tailored web solutions that engage, convert, and drive success in the
                 digital landscape.
              <br/>
              <strong></strong>                                  
            </Typography>
          </div>
        </div>
        <div className=" block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={Mobile_Development} alt="Mobile App Development" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" >
            <span className='font-righteous font-normal'>Mobile App Development</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                  Unlock the power of mobility with our mobile app development services. We specialize 
                  in crafting intuitive, feature-rich apps across platforms. Our team combines 
                  innovative design and robust development to create engaging user experiences. 
                  From concept to launch, we ensure your app aligns with your business goals, 
                  leveraging the latest technologies. Elevate your brand with our mobile solutions 
                  that connect, engage, and thrive in the mobile-first world.
                <br/>
                <strong> </strong>                  
            </Typography>
          </div>
        </div>
        
      </div>
      <div className='mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row'>
      <div className=" block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={API_Development} alt="API Development" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" >
             <span className='font-righteous font-normal'>Microservices and API Development </span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Driving digital innovation, our expertise extends to both API and microservices 
                development. We architect flexible, scalable APIs that connect and empower your
                 applications, fostering seamless data exchange. Simultaneously, our microservices
                 solutions break down complex systems into agile, manageable components, enhancing
                 scalability and agility. Our team excels in building the backbone of modern 
                 applications, fueling your growth and adaptability in the digital landscape. 
                 With our integrated approach, we transform ideas into robust, interconnected 
                 ecosystems, ready to thrive in the digital era
                <br/>
                <strong> </strong>                  
            </Typography>
          </div>
        </div>
        <div className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={DATA_ANALYTICS} alt="Data Integration" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" component="div">
              <span className='font-righteous font-normal'>Data Integration </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Our Power BI development services transform your company's data into 
                  stunning and interactive visualizations. With Power BI, we create 
                  insightful reports and dashboards that can be seamlessly embedded into 
                  your website. Now, you can provide your website visitors with real-time 
                  access to critical business data, making informed decisions easier than 
                  ever. Empower your users with data-driven insights, all without leaving
                  your website. Explore our Power BI development solutions today and take 
                  your data presentation to the next level.
              <br/>
              <strong>  </strong>                                  
            </Typography>
          </div>
        </div>
        
        
      </div>
      <div className='mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row'>        
        <div className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={DB_DEV_NGMT} alt="Database" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" component="div">
                <span className='font-righteous font-normal'> Database Development and Management </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Empowering businesses with seamless data solutions, our team excels in both database
                   development and management. We craft tailored database systems, ensuring optimal 
                   schema design and data organization. Simultaneously, our experts handle ongoing 
                   operations, ensuring peak performance, security, and scalability. With our 
                   comprehensive services, your data ecosystem is in capable hands, allowing you to 
                   focus on your core business objectives.
              <br/>
              <strong> </strong>                                  
            </Typography>
          </div>
        </div>
        <div className="block md:w-fit lg:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={TESTING} alt="Testing" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" component="div">
              <span className='font-righteous font-normal'>Testing </span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Delivering excellence in software quality assurance, our testing services ensure 
                  your applications meet the highest standards. Our skilled QA engineers meticulously
                  assess functionality, performance, and security, identifying and addressing issues
                  before deployment. With a focus on precision and efficiency, we guarantee a seamless 
                  user experience and minimize the risk of defects. Trust us to enhance your software's
                  reliability and user satisfaction through comprehensive testing solutions.
              <br/>
              <strong>  </strong>                                  
            </Typography>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default WorkCard;