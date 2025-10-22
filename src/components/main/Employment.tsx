import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default function Employment() {
    return (
        <StyledPage id="main-page">
            <h3 id="main-title"> Employment History </h3>
        </StyledPage>
    )
}