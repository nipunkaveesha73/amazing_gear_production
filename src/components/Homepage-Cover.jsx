import image from '../images/Slide/25.jpg';
import titilenamesvg from '../images/01.svg'
import { ReactComponent as Logo} from '../images/02.svg';


export default function Cover() {
    return (
        <>
        <div id='home' style={{
            background:'rgba(0,0,0,0)',
            width:'100%',
            height:'1000px'
        }}></div>
        <img src={titilenamesvg} alt='title'/>
        <Logo/>
        </>
    );
}
