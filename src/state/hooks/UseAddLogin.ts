import { useSetRecoilState } from "recoil";
import { Usuario } from "state/atom";
import { ILogin } from "types/ILogin";

const UseAddLogin = () => {
        const setLoginName = useSetRecoilState<ILogin>(Usuario);

        return(name: String) => {
                setLoginName(oldList => {return {"name": name, imageProfile: oldList.imageProfile}})
        }
}

export default UseAddLogin;