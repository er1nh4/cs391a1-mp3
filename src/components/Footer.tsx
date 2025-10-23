import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #3e696a;
    font-family: "Arial Rounded MT Bold", Arial, sans-serif, serif;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p> All Rights Reserved by Erin Cho <Link to="/"> Credits</Link> &copy;</p>
            <div id="time-date"></div>
        </StyledFooter>
    )
}