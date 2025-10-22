import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        padding: 0;
        align-items: center;
        justify-content: center;
    }
`;

export default function Employment() {
    return (
        <StyledPage id="main-page">
            <h3 id="main-title"> Employment History </h3>
        </StyledPage>
    )
}