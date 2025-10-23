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

export default function Employment() {
    return (
        <StyledPage id="main-page">
            <StyledDiv>
                <h2>Employment History</h2>
                <StyledUnorderedList id="job-list">
                    <StyledList>
                        <h3>Match Charter Public High School — Face To Face Tutor</h3>
                        <h4><em> September 2025 - Present </em></h4>
                        <p> ● Lead small-group and 1:1 tutorials for 9th/10th grade
                                mathematics (Algebra 1, Geometry), foundational math skills,
                                and credit recovery.<br/>
                            ● Provide executive functioning support for students using various,
                                effective strategies, in order to strengthen their attention span,
                                material retention, and time management skills.<br/>
                            ● Communicate with parents and guardians regarding my students' in-school
                                behavior, academic performance, and student-support inquiries.<br/> </p>
                    </StyledList>
                    <StyledList>
                        <h3>New York Tutoring Center — Coding Instructor</h3>
                        <h4><em> May 2025 - July 2025 </em></h4>
                        <p> ● Served as a junior teacher for elementary and middle school
                                students attending introductory coding camp in Python. <br/>
                            ● Assisted the head teacher with lesson plan development in
                                the first 2 weeks and implemented appropriate Computer Science
                            course-load for students in grades 4-8. <br/>
                            ● Engaged in 1:1 sessions with parents to effectively
                                communicate student feedback and provide details for the
                                child's continued success based on their work samples and
                                completed projects. <br/>
                            ● Provided additional educator support for teachers in
                                SHSAT/SAT exam prep in response to peak student enrollment.</p>
                    </StyledList>
                    <StyledList>
                        <h3>Google — Software Engineering Intern, STEP</h3>
                        <h4><em> May 2024 - August 2024 </em></h4>
                        <p> ● Engineered a secure alerting service to support Google Web
                                Search EngProd’s continuous build integration tests,
                                replacing deprecated infrastructure to ensure stability
                                and timely fault detection.<br/>
                            ● Built a full-stack microservice including server generation
                                and backend logic in GoLang, along with unit testing for
                                production-readiness.<br/>
                            ● Diagnosed and resolved role-based access bugs that previously
                                allowed unvetted code to run in integration
                                environments, helping safeguard against potential
                                vulnerabilities. <br/>
                            ● Leveraged internal learning platforms (e.g., Grow C++ @ Google)
                                and collaborated with mentors and peers through structured
                                development programs.</p>
                    </StyledList>
                    <StyledList>
                        <h3>YouTube — Software Engineering Intern, STEP</h3>
                        <h4><em> June 2023 - September 2023 </em></h4>
                        <p> ● Delivered a high-impact feature, Variable Timeout, supporting
                                user moderation for creators and privileged users across the
                                YouTube Live Chat experience.<br/>
                            ● Completed cross-stack development using internal UI frameworks
                                and backend systems in C++, including full product lifecycle:
                                from design doc, UX mock approvals, to a team-wide bug bash to
                                ensure secure, stable feature deployment. <br/>
                            ● Helped unblock migration tasks related to a sister team’s
                                task on creating an extensible, server-driven UI framework,
                                in order to support future maintainability and modularity.<br/></p>
                    </StyledList>
                </StyledUnorderedList>
            </StyledDiv>
        </StyledPage>
    )
}