import { SectionLeft, SectionRight, Div, Form, InputName, InputPassWord, Title, Inputs, Button } from './FormLoginStyles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrCode from './qr-code.png';
import UseAddLogin from 'state/hooks/UseAddLogin';

const FormLogin = () => {

    const [ name, setName ] = useState<string>('');
    const navigate = useNavigate();
    const addLogin = UseAddLogin();

    const submitForm = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        addLogin(name);
        navigate('/homepage');
    }

    return (
        <Div>
            <section>
                <Title>Iniciar sessão</Title>
                <Form>
                    <SectionLeft>
                        <InputName>
                            <label>Iniciar sessão com o nome de usúario</label>
                            <Inputs type='text' onChange={(e) => setName(e.target.value)} value={name}/>
                        </InputName>
                        <InputPassWord>
                            <label>Senha</label>
                            <Inputs type='password' disabled/>
                        </InputPassWord>
                        <Button onClick={(e) => submitForm(e)}>Iniciar sessão</Button>
                    </SectionLeft>
                    <SectionRight>
                        <h3>ou com o codigo qr</h3>
                        <img src={qrCode}/>
                        <h4>Use a câmera do celular para ler o Qr Code</h4>
                    </SectionRight>
                </Form>
            </section>
        </Div>
    )
}

export default FormLogin;