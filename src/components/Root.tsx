import {Routes, Route} from "react-router";
import {Header} from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Home from "./main/Home.tsx";
import Education  from "./main/Education.tsx";
import Experiences from "./main/Experiences.tsx";
import Extracurriculars from "./main/Extracurriculars.tsx";
import styled from "styled-components";

const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
    background: aquamarine;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export default function Root() {
    return (
        <PageWrapper>
            < Header/>
            <ContentContainer>
                <Nav/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/education.html'} element={<Education/>}/>
                    <Route path={'/experiences.html'} element={<Experiences/>}/>
                    <Route path={'/extracurriculars.html'} element={<Extracurriculars/>}/>
                </Routes>
            </ContentContainer>
            <Footer/>
        </PageWrapper>
    )
}