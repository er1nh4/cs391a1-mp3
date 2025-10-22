import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: cadetblue;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: fit-content;
    }
`;

const StyledUnorderedList = styled.ul`
    list-style: none;
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
    text: cadetblue;
    text-align: center;

    font-size: calc(10px + 1.5vw);
    
    margin: 35px 20px;
    padding: 20px 40px;
    
    border: black solid 1px;
    border-radius: 25px;

    @media screen and (max-width: 750px) {
        margin: 5px 5px;
        padding: 5px 10px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font: cadetblue;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUnorderedList>
                <StyledList><StyledLink to={'/'}> Home </StyledLink></StyledList>
                <StyledList><StyledLink to={'/education.html'}> Education </StyledLink></StyledList>
                <StyledList><StyledLink to={'/employment.html'}> Employment </StyledLink></StyledList>
                <StyledList><StyledLink to={'/extracurriculars.html'}> Extracurriculars </StyledLink></StyledList>
            </StyledUnorderedList>
        </StyledNav>
    )
}