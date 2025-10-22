import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    background-color: lightblue;
    color: cadetblue;
    font-size: calc(2px+ 2vw);
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export function Header(){
    return (
        <StyledHeader>
            <div>
                <h1>Erin Cho</h1>
                <p>My Online Resume</p></div>
        </StyledHeader>
    )
}