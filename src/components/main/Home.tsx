import {ThemeContext} from "../ThemeContext.tsx";
import {useContext} from "react";
import type {ThemeTypes} from "../../types";
import styled from "styled-components";

const StyledPage = styled.main<{ theme: ThemeTypes }>`
    width: ${(props)=> props.theme.width};
    height: ${(props)=> props.theme.height};
    display: ${(props)=> props.theme.display};;
    flex-direction: ${(props)=> props.theme.flexDirection};;
`;

export default function Home() {
    const themeContext = useContext(ThemeContext);

    return (
        <>
            <title>Home | Erin's Resume</title>
            <StyledPage id="main-page" theme={themeContext!}>
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