import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: coral;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p> All Rights Reserved by Erin Cho <Link to="/main/Home.tsx"> Credits</Link> &copy;</p>
            <div id="time-date"></div>
        </StyledFooter>
    )
}