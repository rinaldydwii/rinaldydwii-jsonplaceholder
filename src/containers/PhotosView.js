import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, PhotosSection } from "../components";
import { fetchPhotos } from "../actions/photoActions";

class PhotosView extends Component {
    componentDidMount() {
        this.props.getPhotos()
    }
    render() {
        return (
            <Container>
                <PhotosSection 
                    photos={this.props.photos} 
                    loading={this.props.loading}
                    finish={this.props.finish}
                    error={this.props.error}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    photos: state.photosReducer.photos,
    loading: state.photosReducer.loading,
    finish: state.photosReducer.finish,
    error: state.photosReducer.error
})
  
const mapDispatchToProps = (dispatch) => ({
    getPhotos: () => dispatch(fetchPhotos())
})
export default connect(mapStateToProps, mapDispatchToProps)(PhotosView);