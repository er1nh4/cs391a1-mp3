// import {ThemeContext} from "../ThemeContext.tsx";
// import {useContext} from "react";
// import type {ThemeTypes} from "../../types";
import styled from "styled-components";
import profilePic from "./echo_pfp.jpg";

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

const StyledImg = styled.img`
    width: 40%;
`;

export default function Home() {
    // const themeContext = useContext(ThemeContext);

    return (
        <>
            <title>Home | Erin's Resume</title>
            <StyledPage id="main-page" /*theme={themeContext!}*/>
                <StyledDiv id="main">
                    <h3 id="main-title"> Home </h3>
                    <div id="main-image"><StyledImg src={profilePic} alt="Erin Cho"/></div>

                        <p>     Hi! My name is Erin a</p>

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