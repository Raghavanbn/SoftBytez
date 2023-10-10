import Logo from '/assets/images/logo.jpg';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link  } from 'react-router-dom';

export default function Layout() {

    const toggleMenu = () => {
        const mobileMenu = document.getElementById('menuUL');
        alert(mobileMenu);
        mobileMenu?.classList.toggle('hidden');
        mobileMenu?.classList.toggle('w-full');
        mobileMenu?.classList.toggle('h-screen');
    }

    return (
        <div>
            <header>
                <div className="flex flex-col items-center py-10">       
                    <div className="w-[35%] md:w-[10%] lg:w-[10%]">
                        <img  src={Logo} alt="logo"/>                      
                    </div> 
                    <div className="flex flex-col h-full items-center justify-center">
                        <ul id='menuUL' className='hidden flex flex-row space-x-6 hidden md:block md:flex md:flex-row'>
                            <li className='md:hidden fixed top-4 right-4 mt-14'>
                                <a href="#!" className="text-right text-4xl" onClick={toggleMenu}>                                   
                                    <CloseIcon/>
                                </a>
                            </li>
                            <li>
                                <Link to="/">Home</Link> 
                            </li>
                            <li>
                                <Link to="/who-we-are">Who We Are</Link> 
                            </li>
                            <li>
                                <Link to="/what-we-do">What We Do</Link> 
                            </li>
                            <li>
                                <Link to="/contact-us">Contact US</Link> 
                            </li>
                        </ul>
                        <div className="flex items-center sm:block lg:hidden">
                            <button className="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                                onClick={toggleMenu}>
                                 <MenuIcon/>
                            </button>
                        </div>
                    </div>
                </div>                                
            </header>
        </div>
    );
}