import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, AlbumsSection } from "../components";
import { fetchAlbums } from "../actions/albumActions";

class AlbumsView extends Component {
    componentDidMount() {
        this.props.getAlbums()
    }
    render() {
        return (
            <Container>
                <AlbumsSection 
                    albums={this.props.albums} 
                    loading={this.props.loading}
                    finish={this.props.finish}
                    error={this.props.error}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albumsReducer.albums,
    loading: state.albumsReducer.loading,
    finish: state.albumsReducer.finish,
    error: state.albumsReducer.error
})
  
const mapDispatchToProps = (dispatch) => ({
    getAlbums: () => dispatch(fetchAlbums())
})
export default connect(mapStateToProps, mapDispatchToProps)(AlbumsView);