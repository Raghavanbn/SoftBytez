import ParentLayout from '../landingpage/parentlayout';
import { Typography } from "@mui/material";

const AboutUs = () => {

    return(
        <div>
            <ParentLayout/>
            <div className="mx-6 py-10 items-center justify-center">    
            <p className="text-prime-blue mt-2.5 text-neutral-400 font-bold text-2xl text-center">
            <Typography variant="h4" gutterBottom>
                    SoftBytez
              </Typography>
            </p>    
            <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                  <strong>Who We Are:</strong> 
                </Typography>
             </p>
            <p className="font-bold text-2xl text-left">
            <Typography gutterBottom>
                SoftBytez is a dynamic and innovative startup on a mission to revolutionize 
                industry. Founded by tech enthusiasts, 
                we are driven by a shared vision of creating cutting-edge solutions for a sustainable future.
             </Typography>
             </p>
             <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                  <strong>Our Vision:</strong> 
                </Typography>
             </p>
             <p className="font-bold text-2xl text-left mt-2.5">
             <Typography gutterBottom>
                At SoftBytez, we envision a world where to bring the technology accessible to every part of the world. Our team is 
                committed to pushing boundaries, embracing challenges, and delivering solutions that 
                empower individuals and businesses alike.
            </Typography>
            </p>
            <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                  <strong>What We Do:</strong> 
                </Typography>
             </p>
             <p className="font-bold text-2xl text-left mt-2.5">
             <Typography gutterBottom>
                We specialize in developing web, mobile applications and sustainable products. Our 
                solutions are designed to privide best-in-class products/services offer.
            </Typography>
            </p>
            <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                  <strong>Why Choose Us:</strong> 
                </Typography>
             </p>
             <p className="font-bold text-2xl text-left mt-2.5">
             <Typography gutterBottom>
                <strong>Innovation:</strong> We stay ahead of the curve by constantly innovating and 
                adapting to emerging trends and technologies.
            </Typography>
            </p>
             <p className="font-bold text-2xl text-left mt-2.5">
             <Typography gutterBottom>
                <strong>Quality:</strong> We take pride in delivering high-quality products/services 
                that exceed expectations.
            </Typography>
            </p>
             <p className="font-bold text-2xl text-left mt-2.5">
             <Typography gutterBottom>
                <strong>Customer-Centric:</strong> Our customers are at the heart of everything we do.
                 We listen, understand, and prioritize your needs.
            </Typography>
            </p>
            <p className="font-bold text-3xl text-left">
            <Typography gutterBottom>
                    <strong>Sustainability:</strong> We are committed to environmentally responsible 
                    practices and sustainable business growth.
                </Typography>
             </p>
             <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                  <strong>Our Team:</strong> 
                </Typography>
             </p>
             <p className="font-bold text-2xl text-left mt-2.5">
             <Typography gutterBottom>
                Our team of experts brings a wealth of knowledge and experience to the table. 
                We foster a culture of collaboration, creativity, and continuous learning.
            </Typography>
            </p>
            <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                  <strong>Join Us on Our Journey:</strong> 
                </Typography>
             </p>
            <p className="font-bold text-3xl text-left">
                <Typography gutterBottom>
                    We invite you to join us on this exciting journey of growth and discovery. 
                    Whether you're a potential customer, partner, or team member, SoftBytez welcomes you 
                    to be a part of our mission to make a positive impact on industry.
                </Typography>
             </p>
             <p className="font-bold text-2xl text-left mt-2.5">
            <Typography gutterBottom>
            Connect with us today to explore how we can work together to shape the future.
            </Typography>
            </p>
           
        </div>
        </div>
    );
};

export default AboutUs;