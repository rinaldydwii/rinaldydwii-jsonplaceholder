import React, { Component } from "react";
import { Container, AlbumsSection } from "../components";

class AlbumsView extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            loading: false,
            finish: false,
            error: "",
            page: 1,
        }
    }
    loadAlbums = () => {
        const { page } = this.state
        const limit = 20
        this.setState({loading: page === 1 ? true : false})
        fetch(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}&_page=${page}`)
            .then(res => res.json())
            .then(albums => {
                
                if (!albums.length || albums.length < limit) return this.setState({page: null})
                this.setState(prevState => ({albums: [...prevState.albums, ...albums], finish: true, loading: false, page: page + 1}))
            })
            .catch(error => this.setState({error, finish: true}))
    }
    componentDidMount() {
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
                    onLoadAlbums={this.loadAlbums}
                    paginate={this.state.page ? true : false}
                />
            </Container>
        );
    }
}
export default AlbumsView;