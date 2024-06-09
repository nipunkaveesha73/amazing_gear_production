import {Navbarsc} from '../Nav-bar'
import './About.css';
import imag1 from '../../images/01.svg'

function About() {
    return (
        <div style={{paddingRight:'50px',paddingLeft:'50px'}}>
        <Navbarsc/>
        <object width='100%' data={imag1} > </object>
        <h1>About</h1>
        <h2>We, Amazing Gear Production, has been the most trusted company in the online business since 2018 in Sri Lanka</h2>
        <p>We are professionals in photography. Elevate your visual storytelling with our photography skills.
Our Company designs professional wedding albums, professional Image Retouches and professional Manipulations with the best customer services.
Also, We provide many courses for students to develop their graphic designing skills and retouching skills.

</p>
        <a href='https://sites.google.com/view/amazinggearproduction/home'>https://sites.google.com/view/amazinggearproduction/home</a>
        
        </div>
    )
}

export default About