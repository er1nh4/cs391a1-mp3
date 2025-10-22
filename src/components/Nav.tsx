import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    background-color: lightblue;
    border-right: 1px solid cadetblue;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: fit-content;
        border-bottom: 1px solid cadetblue;
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
    text-align: center;
    
    font-size: calc(10px + 1.25vw);
    
    margin: 15% auto;
    padding: 5%;
    width: 80%;
    
    border: 1px solid cadetblue;
    border-radius: 25px;
    
    @media screen and (max-width: 750px) {
        margin: 0 auto;
        padding: 1%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: cadetblue;
    font-family: "Arial Rounded MT Bold", Arial, sans-serif;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUnorderedList>
                <StyledList><StyledLink to={'/'}> Home </StyledLink></StyledList>
                <StyledList><StyledLink to={'/education.html'}> Education </StyledLink></StyledList>
                <StyledList><StyledLink to={'/employment.html'}> Employment </StyledLink></StyledList>
                <StyledList><StyledLink to={'/extracurriculars.html'}> Extracurricular </StyledLink></StyledList>
            </StyledUnorderedList>
        </StyledNav>
    )
}