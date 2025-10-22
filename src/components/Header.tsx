import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    border-bottom: 1px solid cadetblue;
    background-color: lightblue;
    color: cadetblue;
    
    font-family: "Arial Rounded MT Bold", Arial, san-serif, serif;
    font-size: calc(2px+ 2vw);
    
    display: grid;
    flex-direction: column;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

const StyledH1 = styled.h1`
    padding-left: 5%;
`;

const StyledP = styled.p`
    padding-left: 5%;
`;

export function Header(){
    return (
        <StyledHeader>
            <div>
                <StyledH1>Erin Cho</StyledH1>
                <StyledP>My Online Resume</StyledP></div>
        </StyledHeader>
    )
}