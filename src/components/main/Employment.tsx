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

export default function Employment() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <h2 id="main-title"> Employment History </h2>
            </StyledDiv>
        </StyledPage>
    )
}