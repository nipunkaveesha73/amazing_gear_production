import './Nav-bar.css';
import logo from '../images/newee.png';
import { useState,useEffect } from 'react';
import { IoIosHome } from "react-icons/io";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import Logo from '../images/02.svg';
import { Link } from 'react-router-dom';

function Logoimg() {
  return <img style={{position:'absolute' , bottom:'40px'}} src={Logo} alt='logo'/>
}

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    return (
        <>
        <nav className={scrolling ? 'navbar-scroll' : 'navbar'}>
            <div className='menu'>
                <img src={logo} className='logo' alt='logo'/>
                <ul>
                    <li><Link to="/"><font>Home</font><ico><IoIosHome fontSize="30px" /></ico></Link></li>
                    <li><Link href="/"><font>Album Design</font><ico><BiPhotoAlbum fontSize="30px" /></ico></Link></li>
                    <li><a href="/"><font>Retouching</font><ico><MdOutlineFaceRetouchingNatural fontSize="30px"/></ico></a></li>
                    <li><Link to="/Courses"><font>Our Courses</font><ico><FaDiscourse fontSize="30px" /></ico></Link></li>
                    <li><a href="/"><font>Common Questions</font><ico><BsFillQuestionSquareFill fontSize="30px" /></ico></a></li>
                    <li><a href="/about"><font>About</font><ico><SiAboutdotme fontSize="30px" /></ico></a></li>
                </ul>
                <Logoimg/>
                <p>Amazing Gear Production, has been the most trusted
                company in the online business since 2018 in Sri Lanka.<br/>
                </p>
            </div>
        </nav>
        </>
      );
}

export function Navbarsc() {
  return (
    <nav className='navbar-scroll'>
            <div className='menu'>
                <img src={logo} className='logo' alt='logo'/>
                <ul>
                    <li><Link to="/"><font>Home</font><ico><IoIosHome fontSize="30px" /></ico></Link></li>
                    <li><Link to="/"><font>Album Design</font><ico><BiPhotoAlbum fontSize="30px" /></ico></Link></li>
                    <li><a href="/"><font>Retouching</font><ico><MdOutlineFaceRetouchingNatural fontSize="30px"/></ico></a></li>
                    <li><Link to="/Courses"><font>Our Courses</font><ico><FaDiscourse fontSize="30px" /></ico></Link></li>
                    <li><a href="/"><font>Common Questions</font><ico><BsFillQuestionSquareFill fontSize="30px" /></ico></a></li>
                    <li><a href="/about"><font>About</font><ico><SiAboutdotme fontSize="30px" /></ico></a></li>
                </ul>
                <Logoimg/>
                <p>Amazing Gear Production, has been the most trusted
                company in the online business since 2018 in Sri Lanka.<br/>
                </p>
            </div>
        </nav>
  )
}


export default Navbar