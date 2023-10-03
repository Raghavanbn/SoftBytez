import ParentLayout from '../landingpage/parentlayout';
import { Typography } from "@mui/material";

const Blog =() => {

    return(

        <div>
            <ParentLayout/>
            <div className="mx-6 py-10 items-center justify-center">

                <p className="font-bold text-2xl text-left">
                    <Typography gutterBottom>
                        <strong>Exciting News:</strong> We've Successfully Completed API Development for a Leading Healthcare 
                        Provider!
                    </Typography>
                </p>
                <p className="font-bold text-2xl text-left">
                    <Typography gutterBottom>
                        We are thrilled to announce the successful completion of a complex API development 
                        project tailored for a prominent healthcare provider. This achievement marks another 
                        significant milestone in our commitment to delivering innovative solutions that enhance 
                        the healthcare industry's digital landscape.
                    </Typography>
                </p>
                <p className="font-bold text-2xl text-left">
                    <Typography gutterBottom>
                        Our dedicated team has worked tirelessly to create a robust and secure API that will 
                        empower our client to streamline processes, improve data accessibility, and ultimately 
                        provide better care to patients. This accomplishment highlights our expertise in 
                        healthcare technology and our unwavering dedication to excellence.
                    </Typography>
                </p>                
            </div>
        </div>
    );
};

export default Blog;