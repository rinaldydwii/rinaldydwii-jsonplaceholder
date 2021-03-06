import React from "react";
import AlbumItem from "../items/AlbumItem";
import Loading from "../Loading";
import ReadMoreButton from "../ReadMoreButton";

const AlbumsSection = ({albums, loading, finish, error, onLoadAlbums, paginateToPage = false, paginate = false}) => (
    <section>
        <h2 className="text-center">Albums</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { albums ? (
                <div className="grid grid-4">
                    { albums.map(album => (
                        <AlbumItem album={album} key={album.id} />
                    )) }
                </div>
            ) : <div>Albums not found!</div>
            }
            { paginateToPage ? <ReadMoreButton to="/albums" /> : "" }
            { paginate ? <ReadMoreButton onClick={onLoadAlbums} /> : ""}
        </Loading>
    </section>
)
export default AlbumsSection;