
import Typography from '@mui/material/Typography';

import Web_Development from '../../assets/images/web_dev.jpg';
import Mobile_Development from '../../assets/images/mobile_dev.jpg';
import API_Development from '../../assets/images/microservices_dev.jpg';
import DATA_ANALYTICS from '../../assets/images/data_analytics.jpg';
import ParentLayout from './parentlayout';

const WorkCard = ()  => {
  return (
    <div>
      <ParentLayout/>

      <div className='mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row'>
        <div className="block md:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={Web_Development} alt="" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" component="div">
                Web Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Elevate your online presence with our expert Web Development services. Our skilled team 
                designs and builds dynamic, user-friendly websites that captivate your audience and 
                drive results. From e-commerce platforms to stunning portfolios, we craft digital 
                experiences that leave a lasting impression.
              <br/>
              <strong>Angular, React and Progressive Web Apps </strong>                                  
            </Typography>
          </div>
        </div>
        <div className=" block md:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={Mobile_Development} alt="" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" >
                Mobile App Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Transform your vision into a reality with our Mobile Development expertise. We specialize
                 in crafting cutting-edge mobile apps for iOS and Android platforms. Our team's 
                 innovative solutions cater to your unique needs, ensuring engaging user experiences 
                 and seamless functionality. Stay ahead in the mobile-first world with our top-tier 
                 mobile development services.
                <br/>
                <strong>React Native, IOS and Android </strong>                  
            </Typography>
          </div>
        </div>
        <div className=" block md:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={API_Development} alt="" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" >
                Microservices and API Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
                  Unlock the potential of your applications with API and Microservices Development. 
                  Our expert team crafts seamless communication channels between your software 
                  components, ensuring efficient data exchange and functionality sharing. Seamlessly
                  integrate and extend your systems with our top-notch API solutions.Empower your 
                  development teams to work efficiently and maintain software with ease.
                <br/>
                <strong>Spring Boot </strong>                  
            </Typography>
          </div>
        </div>
      </div>
      <div className='mt-6 md:flex md:justify-evenly md:flex-col lg:flex lg:flex-row'>
        <div className="block md:max-w-[24rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img className="rounded-t-lg" src={DATA_ANALYTICS} alt="" />
          </div>
          <div className="p-6">
            <Typography gutterBottom variant="h5" component="div">
                Power BI
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
              <strong> </strong>                                  
            </Typography>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default WorkCard;