import { useRecoilValue } from "recoil";
import { useState } from 'react';
import { Usuario } from "state/atom";
import { UseUpdateProfile } from "state/hooks/UseUser";
import { ButtonDiv, Form, ImageProfile, NickProfile } from "./FormProfileStyle";
import { Input } from "./FormProfileStyle";


const FormProfile = () => {
    const user  = useRecoilValue(Usuario);
    const updateProfile = UseUpdateProfile();   

    const [ imageProfile, setimageProfile ] = useState<string>(user.imageProfile);
    const [ name, setName ] = useState<string>(user.name || '');
    
    
    function submitUptade(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateProfile({ name, imageProfile })
    }

    return(
        <Form onSubmit={(e) => submitUptade(e)}>
            <ImageProfile>
                <div className="image">
                    <img src={user.imageProfile} alt='Image profile'/>  
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Input type='url' value={imageProfile} onChange={(e) => setimageProfile(e.target.value)}/>
            </ImageProfile>
            <NickProfile>
                <label htmlFor="nickName">Seu nick:</label>
                <Input id='nickName'type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </NickProfile>
            <ButtonDiv>
                <button>Salvar</button>
            </ButtonDiv>
        </Form>
    )

}

export default FormProfile;