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
            errorPhotos: "",
            pagePhotos: 1
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
        const page = this.state.pagePhotos
        const limit = 8
        this.setState({loading: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}&_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(photos => {
                if (photos.length) this.setState(prevState => ({photos: [...prevState.photos, ...photos], finishPhotos: true, loadingPhotos: false, pagePhotos: page + 1}))
                if (!photos.length || photos.length < limit) this.setState({pagePhotos: null})
            })
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
                        onLoadPhotos={this.loadPhotos}
                        paginate={this.state.pagePhotos ? true : false}
                    />
                </Loading>
            </Container>
        );
    }
}
export default AlbumView;