import React, { Component } from "react";
import { Container, PhotosSection, Loading } from "../components";

class AlbumView extends Component {
    constructor() {
        super()
        this.state = {
            album: {},
            photos: [],
            loadingAlbum: false,
            finishAlbum: false,
            errorAlbum: "",
            loadingPhotos: false,
            finishPhotos: false,
            errorPhotos: ""
        }
    }
    loadAlbum = () => {
        this.setState({loadingAlbum: true})
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(album => this.setState({album, finishAlbum: true, loadingAlbum: false}))
            .catch(errorAlbum => this.setState({errorAlbum, finishAlbum: true, loadingAlbum: false}))
    }
    loadPhotos = () => {
        this.setState({loadingPhotos: true})
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(res => res.json())
            .then(photos => this.setState({photos, finishPhotos: true, loadingPhotos: false}))
            .catch(errorPhotos => this.setState({errorPhotos, finishPhotos: true, loadingPhotos: false}))
    }
    componentDidMount() {
        this.loadAlbum()
        this.loadPhotos()
    }
    render() {
        const { album } = this.state
        return (
            <Container className="view">
                <Loading
                    loading={this.state.loadingAlbum}
                    finish={this.state.finishAlbum}
                    error={this.state.errorAlbum}
                >
                    <h1 className="text-center">{album.title}</h1>
                    <PhotosSection 
                        photos={this.state.photos} 
                        loading={this.state.loadingPhotos}
                        finish={this.state.finishPhotos}
                        error={this.state.errorPhotos}
                    />
                </Loading>
            </Container>
        );
    }
}
export default AlbumView;