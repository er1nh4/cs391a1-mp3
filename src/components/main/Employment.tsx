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

const StyledHeader = styled.div`
    text-align: left;
`;

export default function Employment() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <StyledHeader>
                    <h3>Match Charter Public High School</h3>
                    <h4> Face-To-Face Tutor <em> September 2025 - Present </em></h4>
                    <p> On top of my studies and supporting-education roles, I'm also
                        very excited about second-hand fashion, fabric crafts, and jewelry-making.
                        I love sharing my insights and my work to those around me, and I plan on
                        carrying these passions with me throughout my professional life!</p>
                </StyledHeader>
            </StyledDiv>
        </StyledPage>
    )
}