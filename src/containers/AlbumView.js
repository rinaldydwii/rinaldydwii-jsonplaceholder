import React, { Component } from "react";
import { Container, PhotosSection } from "../components";

class AlbumView extends Component {
    constructor() {
        super()
        this.state = {
            album: {},
            loading: false,
            finish: false,
            error: ""
        }
    }
    loadAlbum = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(album => this.setState({album}))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    loadPhotos = async() => {
        await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(res => res.json())
            .then(photos => this.setState(prevState => ({album: {...prevState.album, photos}, finish: true, loading: false})))
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    async componentDidMount() {
        this.setState({loading: true})
        await this.loadAlbum()
        await this.loadPhotos()
    }
    render() {
        const { album, loading, finish, error } = this.state
        return (
            <Container className="view">
                <h1 className="text-center">{album.title}</h1>
                <PhotosSection photos={album.photos} />
            </Container>
        );
    }
}
export default AlbumView;