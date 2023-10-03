
import { Route, Routes  } from 'react-router-dom';

import LandingScreen from '../landingpage/landingpage';
import ContactUsForm from '../landingpage/contactus';
import WorkCard from '../landingpage/work';
import TermsAndConditions from './tnc';
import PrivacyPolicy from './privacypolicy';
import AboutUs from './aboutus';
import Blog from './blog';

const MenuHeader = () => {

    return (

        <div> 
            <Routes>
                <Route path="/" element={<LandingScreen/> }/>
                <Route path="/what-we-do" element={<WorkCard/> }/>
                <Route path="/contact-us" element={<ContactUsForm/> }/>                
                <Route path="/tnc" element={<TermsAndConditions/> }/>
                <Route path="/privacy" element={<PrivacyPolicy/> }/>
                <Route path="/who-we-are" element={<AboutUs/> }/>
                <Route path="/blog" element={<Blog/> }/>
            </Routes>
        </div>
    );
};

export default MenuHeader;