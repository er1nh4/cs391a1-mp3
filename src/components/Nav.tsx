import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background: beige;
    
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledUnorderedList = styled.ul`
    list-style: none;
    text-decoration: none;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    @media screen and (max-width: 750px) {
        flex-direction: row;
    }
`;

const StyledList = styled.li`
    float: left;
    text-align: center;
    font-size: calc(2vh+ 2vw);
    font-family: "Arial Rounded MT Bold", "Helvetica", "Arial", sans-serif;
    margin: 35px 20px;
    padding: 20px 40px;
    
    border: black solid 1px;
    border-radius: 25px;

    @media screen and (max-width: 750px) {
        margin: 5px 5px;
        padding: 5px 10px;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUnorderedList>
                <StyledList><Link to={'/'}> Home </Link></StyledList>
                <StyledList><Link to={'/education.html'}> Education </Link></StyledList>
                <StyledList><Link to={'/employment.html'}> Employment </Link></StyledList>
                <StyledList><Link to={'/extracurriculars.html'}> Extracurriculars </Link></StyledList>
            </StyledUnorderedList>
        </StyledNav>
    )
}