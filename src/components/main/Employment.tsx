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

const StyledUnorderedList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const StyledList = styled.li`
    float: left;
    text-align: left;
    border-left: 1px solid #3e696a;
`;

export default function Employment() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <h2>Employment History</h2>
                <StyledUnorderedList>
                    <StyledList>
                        <h3>Match Charter Public High School — Face To Face Tutor</h3>
                        <h4><em> September 2025 - Present </em></h4>
                        <p> On top of my studies and supporting-education roles, I'm also
                            very excited about second-hand fashion, fabric crafts, and jewelry-making.
                            I love sharing my insights and my work to those around me, and I plan on
                            carrying these passions with me throughout my professional life!</p>
                    </StyledList>
                    <StyledList>
                        <h3>New York Tutoring Center — Coding Instructor</h3>
                        <h4><em> May - July 2025 </em></h4>
                        <p> On top of my studies and supporting-education roles, I'm also
                            very excited about second-hand fashion, fabric crafts, and jewelry-making.
                            I love sharing my insights and my work to those around me, and I plan on
                            carrying these passions with me throughout my professional life!</p>
                    </StyledList>
                    <StyledList>
                        <h3>Google — Software Engineering Intern, STEP</h3>
                        <h4><em> May - August 2024 </em></h4>
                        <p> On top of my studies and supporting-education roles, I'm also
                            very excited about second-hand fashion, fabric crafts, and jewelry-making.
                            I love sharing my insights and my work to those around me, and I plan on
                            carrying these passions with me throughout my professional life!</p>
                    </StyledList>
                    <StyledList>
                        <h3>YouTube — Software Engineering Intern, STEP</h3>
                        <h4><em> June - September 2023 </em></h4>
                        <p> On top of my studies and supporting-education roles, I'm also
                            very excited about second-hand fashion, fabric crafts, and jewelry-making.
                            I love sharing my insights and my work to those around me, and I plan on
                            carrying these passions with me throughout my professional life!</p>
                    </StyledList>
                </StyledUnorderedList>
            </StyledDiv>
        </StyledPage>
    )
}