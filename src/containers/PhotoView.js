import React, { Component } from "react";
import { Container, Loading } from "../components";

class PhotoView extends Component {
    constructor() {
        super()
        this.state = {
            photo: {},
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadPhoto = () => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(photo => this.setState({photo, finish: true, loading: false}))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    componentDidMount() {
        this.setState({loading: true})
        this.loadPhoto()
    }
    render() {
        const { photo } = this.state
        return (
            <Container className="view text-center">
                <Loading
                    loading={this.state.loading}
                    finish={this.state.finish}
                    error={this.state.error}
                >
                    <div className="photo__image">
                        <img src={photo.url} alt={photo.title} />
                    </div>
                    <h1>{photo.title}</h1>
                </Loading>
            </Container>
        );
    }
}
export default PhotoView;