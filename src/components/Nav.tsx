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

const StyledList = styled.li`
    float: left;
    text-decoration: none;
    background: blueviolet;
    margin-right: 30vw;
    padding: 10vw;
    line-height: 10px;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUnorderedList>
                <StyledList><Link to={'/'}> Home </Link></StyledList>
                <StyledList><Link to={'/education.html'}> Education </Link></StyledList>
                <StyledList><Link to={'/employment.html'}> Employment History </Link></StyledList>
                <StyledList><Link to={'/extracurriculars.html'}> Extracurriculars </Link></StyledList>
            </StyledUnorderedList>
        </StyledNav>
    )
}