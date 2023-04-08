import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { Footer, Div } from './FooterStyles';

const FooterPage = () => {
    return(
        <Footer>
            <Div>
                <Link to='https://www.linkedin.com/in/leonardo-atanasio-4a7364219/'> 
                    <BsLinkedin size={40} className='icon'/> 
                </Link>
            </Div>
            <Div>
                <Link to='https://github.com/Ledosnardo'> 
                    <BsGithub size={40} className='icon'/> 
                </Link>
            </Div>
            <Div>
                <Link to='https://www.instagram.com/leuzada'> 
                    <BsInstagram size={40} className='icon'/> 
                </Link>
            </Div>
        </Footer>
    )
}

export default FooterPage;