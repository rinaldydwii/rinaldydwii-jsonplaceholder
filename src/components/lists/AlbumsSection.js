import React from "react";
import AlbumItem from "../items/AlbumItem";
import Loading from "../Loading";

const AlbumsSection = ({albums, loading, finish, error}) => (
    <section>
        <h2 className="text-center">Albums</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { albums ? (
                <div className="grid grid-5">
                    { albums.map(album => (
                        <AlbumItem album={album} key={album.id} />
                    )) }
                </div>
            ) : <div>Albums not found!</div>
            }
        </Loading>
    </section>
)
export default AlbumsSection;