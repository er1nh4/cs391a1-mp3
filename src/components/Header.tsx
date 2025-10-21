import styled from "styled-components";

const StyledHeader = styled.header`
    position: relative;
    background-color: lightblue;
    color: darkgreen;
    font-size: calc(2px+ 2vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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