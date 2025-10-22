import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StyledDiv = styled.div`
    padding: 0 5%;
    text-align: center;
    font-family: "Arial Rounded MT Bold", Arial, san-serif, serif;
`;

export default function Extracurriculars() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>

            </StyledDiv>
        </StyledPage>
    )
}