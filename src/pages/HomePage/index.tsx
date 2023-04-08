import { useRecoilValue } from "recoil"
import { LoginStatus } from "state/atom";

const HomePage = () => {

    const loginName = useRecoilValue(LoginStatus);

    return(
        <div>{loginName.name}</div>
    )
}

export default HomePage