import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
`;

export default function Home() {
    return (
        <>
            <title>Home | Erin's Resume</title>
            <StyledPage id="main-page">
                <h3 id="main-title"> Home </h3>
                <div id="main">
                    <div id="main-image"><img id="profile-pic" src={""} alt="Erin Cho"/></div>

                    <div id="main-text">
                        <p>And if you don't love me now
                            You will never love me again
                            I can still hear you saying
                            You would never break the chain (never break the chain)
                            And if you don't love me now (you don't love me now)
                            You will never love me again
                            I can still hear you saying (still hear you saying)
                            You would never break the chain (never break the chain)</p>
                    </div>
                </div>
                <p>Chain keep us together (running in the shadow)
                    Chain keep us together (running in the shadow)
                    Chain keep us together (running in the shadow)
                    Chain keep us together (running in the shadow)
                    Chain keep us together (running in the shadow)
                    Chain
                </p>
            </StyledPage>
        </>
    )
}