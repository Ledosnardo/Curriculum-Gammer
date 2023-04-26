import HeaderDefault from "components/Header";
import { Div } from "./ProfileStyle";
import  Footer  from "components/Footer";
import FormProfile from "./FormProfile";

const Profile = () => {
    return(
        <Div>
            <HeaderDefault />
            <FormProfile />
            <Footer />
        </Div>
    )
}

export default Profile;