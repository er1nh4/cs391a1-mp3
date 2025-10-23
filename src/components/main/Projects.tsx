import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 0 5%;
`;

const StyledDiv = styled.div`
    text-align: center;
    font-family: "Arial Rounded MT Bold", Arial, san-serif, serif;
    color: #3e696a;
`;

export default function Projects(){

    return (
        <>
            <StyledPage>
                <h2> Projects </h2>
                <StyledDiv>
                    <label htmlFor="one">Give me a number: </label><input id="one"/>
                    <label htmlFor="two">Give me a number: </label><input id="two"/>
                    <button>+</button>
                    <h4 id="output"></h4>
                </StyledDiv>
            </StyledPage>
        </>
    )
}