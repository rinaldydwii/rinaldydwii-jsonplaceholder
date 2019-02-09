import React, { Component } from "react";
import { Container, PhotosSection } from "../components";

class PhotosView extends Component {
    constructor() {
        super()
        this.state = {
            photos: [],
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(photos => this.setState({photos, finish: true, loading: false}))
            .catch(error => this.setState({error, finish: true}))
    }
    componentDidMount() {
        this.setState({loading: true})
        this.loadPhotos()
    }
    render() {
        return (
            <Container>
                <PhotosSection photos={this.state.photos} />
            </Container>
        );
    }
}
export default PhotosView;