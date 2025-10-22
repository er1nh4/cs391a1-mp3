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

export default function Education() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <h3 id="main-title"> Education </h3>
                <div>
                    <h5><strong>Boston University</strong> | <em><u> B.A. in Computer Science </u></em></h5>
                    <em>May 2027</em>
                </div>
            </StyledDiv>
        </StyledPage>
    );
}