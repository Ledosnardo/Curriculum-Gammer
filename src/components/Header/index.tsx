import { useRecoilValue } from "recoil";
import { Header ,Nav, Div, Profile, Img, Input, DivInput, DivSearch } from "./HeaderDefaultStyle";
import { Usuario } from "state/atom";
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from "react-router-dom";
import { useFilterSearch } from "state/hooks/useFilters";
import { useState } from 'react';


const HeaderDefault = () => {
    const usuario = useRecoilValue(Usuario)
    const [ filterSearch, setFilterSearch ] = useState('')
    const games = useFilterSearch(filterSearch)

    return(
    <Header>
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
            <div>
                <DivInput>
                    <Input type='search' placeholder="Search" 
                        value={filterSearch} onChange={(e) => setFilterSearch(e.target.value)}
                        onBlur={() => {
                            setTimeout(() => {
                                setFilterSearch('')
                            }, 100)
                        }}
                    />
                    <span><BiSearchAlt/></span>
                </DivInput>
                <DivSearch style={{ display: games?.length == undefined ?  'none' : 'block' }}>
                    {games?.map(game => {
                        return(
                            <Link to={`/games/${game.slug}`}  key={game.id}>
                                <div>
                                    <h1>{game.name}</h1>
                                    <img src={`${game.image}`} alt="gameImage" />
                                </div>
                            </Link>
                        )
                    })}
                </DivSearch>
            </div>
        </Nav>
    </Header>
)}

export default HeaderDefault;