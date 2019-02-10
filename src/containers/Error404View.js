import React, { Component } from "react";
import { Container } from "../components";

class Error404View extends Component {
    render() {
        return (
            <Container className="view text-center full-screen">
                <h1 style={{marginBottom: 10}}>404</h1>
                <h2>Error Not Found!</h2>
            </Container>
        );
    }
}
export default Error404View;