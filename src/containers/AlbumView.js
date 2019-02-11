import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, PhotosSection, Loading } from "../components";
import { fetchAlbum } from "../actions/albumActions";
import { fetchPhotosByAlbumId } from "../actions/photoActions";

class AlbumView extends Component {
    componentDidMount() {
        const albumId = this.props.match.params.id
        this.props.getAlbum(albumId)
        this.props.getPhotos(albumId)
    }
    render() {
        const { album } = this.props
        return (
            <Container className="view">
                <Loading
                    loading={this.props.loadingAlbum}
                    finish={this.props.finishAlbum}
                    error={this.props.errorAlbum}
                >
                    <h1 className="text-center">{album.title}</h1>
                    <PhotosSection
                        photos={this.props.photos} 
                        loading={this.props.loadingPhotos}
                        finish={this.props.finishPhotos}
                        error={this.props.errorPhotos}
                        // onLoadPhotos={this.loadPhotos}
                        // paginate={this.state.pagePhotos ? true : false}
                    />
                </Loading>
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    album: state.albumReducer.album,
    loadingAlbum: state.albumReducer.loading,
    finishAlbum: state.albumReducer.finish,
    errorAlbum: state.albumReducer.error,
    photos: state.photosReducer.photos,
    loadingPhotos: state.photosReducer.loading,
    finishPhotos: state.photosReducer.finish,
    errorPhotos: state.photosReducer.error,
})
  
const mapDispatchToProps = (dispatch) => ({
    getAlbum: (id) => dispatch(fetchAlbum(id)),
    getPhotos: (id) => dispatch(fetchPhotosByAlbumId(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AlbumView);