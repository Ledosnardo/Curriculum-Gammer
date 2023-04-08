import { useSetRecoilState } from "recoil";
import { LoginStatus } from "state/atom";
import { ILogin } from "types/ILogin";

const UseAddLogin = () => {
        const setLoginName = useSetRecoilState<ILogin>(LoginStatus);

        return(name: String) => {
                setLoginName(oldList => {return {"name": name}})
        }
}

export default UseAddLogin;