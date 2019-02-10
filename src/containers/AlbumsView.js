import React, { Component } from "react";
import { Container, AlbumsSection } from "../components";

class AlbumsView extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadAlbums = () => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(res => res.json())
            .then(albums => this.setState({albums, finish: true, loading: false}))
            .catch(error => this.setState({error, finish: true}))
    }
    componentDidMount() {
        this.setState({loading: true})
        this.loadAlbums()
    }
    render() {
        return (
            <Container>
                <AlbumsSection 
                    albums={this.state.albums} 
                    loading={this.state.loading}
                    finish={this.state.finish}
                    error={this.state.error}
                />
            </Container>
        );
    }
}
export default AlbumsView;