// import {ThemeContext} from "../ThemeContext.tsx";
// import {useContext} from "react";
// import type {ThemeTypes} from "../../types";
import styled from "styled-components";

const StyledPage = styled.main`
    width: 70%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StyledDiv = styled.div`
    padding-left: 5%;
    text-align: center;
    font-family: "Arial Rounded MT Bold", Arial, san-serif, serif;
`;

export default function Home() {
    // const themeContext = useContext(ThemeContext);

    return (
        <>
            <title>Home | Erin's Resume</title>
            <StyledPage id="main-page" /*theme={themeContext!}*/>
                <StyledDiv id="main">
                    <h3 id="main-title"> Home </h3>
                        <div id="main-image"><img id="profile-pic" src={""} alt="Erin Cho"/></div>

                        <p>     And if you don't love me now
                                You will never love me again
                                I can still hear you saying
                                You would never break the chain (never break the chain)
                                And if you don't love me now (you don't love me now)
                                You will never love me again
                                I can still hear you saying (still hear you saying)
                                You would never break the chain (never break the chain)</p>
                        <p>     Chain keep us together (running in the shadow)
                                Chain keep us together (running in the shadow)
                                Chain keep us together (running in the shadow)
                                Chain keep us together (running in the shadow)
                                Chain keep us together (running in the shadow)
                                Chain
                        </p>
                </StyledDiv>
            </StyledPage>
        </>
    )
}