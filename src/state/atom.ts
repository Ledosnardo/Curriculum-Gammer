import { atom } from "recoil";
import { ILogin } from "types/ILogin";

export const LoginStatus = atom<ILogin>({
    key: 'addLogin',
    default: {
        'name': ''
    }
})
