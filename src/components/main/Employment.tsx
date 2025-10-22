import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default function Exployment() {
    return (
        <StyledPage id="main-page">
            <h3 id="main-title"> Experiences </h3>
            <div>
                <h5><strong>Boston University</strong> | <em><u> B.A. in Computer Science </u></em></h5>
                <em>May 2027</em>
            </div>
        </StyledPage>
    )
}