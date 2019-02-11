import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Loading } from "../components";
import { fetchPhoto } from "../actions/photoActions";

class PhotoView extends Component {
    componentDidMount() {
        this.props.getPhoto(this.props.match.params.id)
    }
    render() {
        const { photo } = this.props
        return (
            <Container className="view text-center">
                <Loading
                    loading={this.props.loading}
                    finish={this.props.finish}
                    error={this.props.error}
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

const mapStateToProps = state => ({
    photo: state.photoReducer.photo,
    loading: state.photoReducer.loading,
    finish: state.photoReducer.finish,
    error: state.photoReducer.error,
})
  
const mapDispatchToProps = (dispatch) => ({
    getPhoto: (id) => dispatch(fetchPhoto(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PhotoView);