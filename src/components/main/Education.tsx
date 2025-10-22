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

export default function Education() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <h3 id="main-title"> Education </h3>
                <div>
                    <h5><strong>Boston University</strong> | <em> B.A. in Computer Science </em></h5>
                    <em>May 2027</em>
                </div>
            </StyledDiv>
        </StyledPage>
    );
}