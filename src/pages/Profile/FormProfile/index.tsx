import { useRecoilValue } from "recoil";
import { useState } from 'react';
import { Usuario } from "state/atom";
import { UseUpdateProfile } from "state/hooks/UseUser";


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
        <form onSubmit={(e) => submitUptade(e)}>
            <div>
                <img src={user.imageProfile} alt='Image profile'/>
                <input type='url' value={imageProfile} onChange={(e) => setimageProfile(e.target.value)}/>
            </div>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <button>Salvar</button>
        </form>
    )

}

export default FormProfile;