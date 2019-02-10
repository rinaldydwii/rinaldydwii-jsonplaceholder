import React, { Component } from "react";
import { Container, PhotosSection } from "../components";

class PhotosView extends Component {
    constructor() {
        super()
        this.state = {
            photos: [],
            loading: false,
            finish: false,
            error: "",
            page: 1
        }
    }
    loadPhotos = () => {
        const { page } = this.state
        const limit = 12
        this.setState({loading: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(photos => {
                if (!photos.length || photos.length < limit) return this.setState({page: null})
                this.setState(prevState => ({photos: [...prevState.photos, ...photos], finish: true, loading: false, page: page + 1}))
            })
            .catch(error => this.setState({error, finish: true, loading: false}))
    }
    componentDidMount() {
        this.loadPhotos()
    }
    render() {
        return (
            <Container>
                <PhotosSection 
                    photos={this.state.photos} 
                    loading={this.state.loading}
                    finish={this.state.finish}
                    error={this.state.error}
                    onLoadPhotos={this.loadPhotos}
                    paginate={this.state.page ? true : false}
                />
            </Container>
        );
    }
}
export default PhotosView;