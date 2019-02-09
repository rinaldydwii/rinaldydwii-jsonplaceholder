import React from "react";
import Container from "./Container";

const Navbar = () => (
    <div className="nav">
        <Container>
            <div className="nav__brand">Social Media</div>
            <nav>
                <ul>
                    <li className="nav__item"><a href="/users">Users</a></li>
                    <li className="nav__item"><a href="/posts">Posts</a></li>
                    <li className="nav__item"><a href="/albums">Albums</a></li>
                    <li className="nav__item"><a href="/photos">Photos</a></li>
                </ul>
            </nav>
        </Container>
    </div>
)
export default Navbar;