import steamLogo from './steam.png';
import FormLogin from './FormLogin';
import { HeaderPage } from './LoginStyles';
import FooterPage from '../../components/Footer';

const Login = () => {
    return (
        <>
            <HeaderPage>
                <img src={steamLogo} width='20'/>
                <h3>Curriculum Gammer</h3>
            </HeaderPage>
                <FormLogin />
            <FooterPage/>
        </>
    )
}

export default Login;