import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;

    @media screen and (max-width: 750px) {
        align-items: center;
    }
    
`;


export default function Extracurriculars() {
    return (
        <StyledPage id="main-page">

        </StyledPage>
    )
}