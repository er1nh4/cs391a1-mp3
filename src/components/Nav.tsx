import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledUnorderedList = styled.ul`
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 750px) {
        flex-direction: row;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUnorderedList>
                <li><Link to={'/'}> Home </Link></li>
                <li><Link to={'/education.html'}> Education </Link></li>
                <li><Link to={'/employment.html'}> Employment History </Link></li>
                <li><Link to={'/extracurriculars.html'}> Extracurriculars </Link></li>
            </StyledUnorderedList>
        </StyledNav>
    )
}