import { useRecoilValue } from "recoil";
import { Nav, Div, Profile, Img, Input, DivInput } from "./HeaderDefaultStyle";
import { Usuario } from "state/atom";
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from "react-router-dom";

const HeaderDefault = () => {
    const usuario = useRecoilValue(Usuario)
    return(
    <Nav>
        <Div>
            <Link to='/profile'>
                <Profile>
                    <Img src={`${usuario.imageProfile}`} alt="" />
                    <h3>{usuario.name}</h3>
                </Profile>
            </Link>
            <Link to='/homepage'><h3>Sua Loja</h3></Link>
            <Link to='/library'><h3>Biblioteca</h3></Link>
        </Div>
        <DivInput>
            <Input type='search' placeholder="Search"/>
            <span><BiSearchAlt/></span>
        </DivInput>
     </Nav>
)}

export default HeaderDefault;