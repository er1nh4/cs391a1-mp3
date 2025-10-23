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
`;

const StyledList = styled.li`
    text-align: left;
    margin: 5% auto;
    padding: 0 5%;
    border-left: 1px solid #3e696a;

    @media screen and (max-width: 750px) {
        margin: 2% auto;
    }
`;

export default function Extracurriculars() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <h2> My Extracurriculars </h2>
                <StyledUnorderedList id="extracurricular-list">
                    <StyledList>
                        <h3>Boston University CAS Core Curriculum — Peer Tutor </h3>
                        <h4><em> September 2025 - Present6 </em></h4>
                        <p> ● Train and assist in 2-hour lab component for CC 111: Core
                                Natural Sciences I.<br/>
                            ● Cohost weekly study sessions.<br/></p>
                    </StyledList>
                    <StyledList>
                        <h3>Boston University Art4TheHeart Creative Team</h3>
                        <h4><em> September 2025 - Present </em></h4>
                    </StyledList>
                </StyledUnorderedList>

            </StyledDiv>
        </StyledPage>
    )
}