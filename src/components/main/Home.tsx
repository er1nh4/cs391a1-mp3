// import {ThemeContext} from "../ThemeContext.tsx";
// import {useContext} from "react";
// import type {ThemeTypes} from "../../types";
import styled from "styled-components";
import profilePic from "./echo_pfp.jpg";

const StyledPage = styled.main`
    width: 70%;
    height: 100%;
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
    width: 55%;
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

                        <p>     Hi, I'm Erin! I'm an enthusiastic and passionate
                            senior at Boston University majoring in Computer Science and
                            minoring in Educational Public Policy. Currently, I serve as a
                            Peer Tutor for the College of Arts & Sciences Core Curriculum, and
                            as a high school tutor, specializing in Algebra and Geometry. </p>

                        <p>     On top of my studies and supporting-education roles, I'm also
                            very excited about second-hand fashion, fabric crafts, and jewelry-making.
                            I love sharing my insights and my work to those around me, and I plan on
                            carrying these passions with me throughout my professional life!

                        </p>
                </StyledDiv>
            </StyledPage>
        </>
    )
}