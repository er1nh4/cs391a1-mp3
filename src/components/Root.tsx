import {Routes, Route} from "react-router";
import {Header} from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Home from "./main/Home.tsx";
import Education  from "./main/Education.tsx";
import Employment from "./main/Employment.tsx";
import Extracurriculars from "./main/Extracurriculars.tsx";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: scroll;
    background: #e9f8f8;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default function Root() {
    return (
        <PageWrapper>
            < Header/>
            <ContentContainer id="RootCC">
                <Nav/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/education.html'} element={<Education/>}/>
                    <Route path={'/employment.html'} element={<Employment/>}/>
                    <Route path={'/extracurriculars.html'} element={<Extracurriculars/>}/>
                </Routes>
            </ContentContainer>
            <Footer/>
        </PageWrapper>
    )
}