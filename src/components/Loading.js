import React from "react";
import { Container, Loader } from "semantic-ui-react"

const Loading = ({loading, finish, error, children}) => {
    return loading ? (
        <Container>
            <Loader active={loading}/>
        </Container>
    ) : !error && finish ? children : <Container>{error}</Container>
}

export default Loading;