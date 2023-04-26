import { useSetRecoilState } from "recoil";
import { Usuario } from "state/atom";
import { ILogin } from "types/ILogin";

export const UseAddUser = () => {
        const setLoginName = useSetRecoilState<ILogin>(Usuario);

        return(name: string) => {
                setLoginName(oldList => {return {"name": name, imageProfile: oldList.imageProfile}})
        }
}


export const UseUpdateProfile = () => {
        const setUser = useSetRecoilState<ILogin>(Usuario);
    
        return ({name, imageProfile}: ILogin) => {
            setUser(() => {
                return { "name": name, "imageProfile": imageProfile }
            })
        }
    }