import React from "react";
import AlbumItem from "../items/AlbumItem";

const AlbumsSection = ({albums}) => (
    <section>
        <h2 className="text-center">Albums</h2>
        { albums ? (
            <div className="grid grid-5">
                { albums.map(album => (
                    <AlbumItem album={album} />
                )) }
            </div>
        ) : <div>Albums not found!</div>}
    </section>
)
export default AlbumsSection;