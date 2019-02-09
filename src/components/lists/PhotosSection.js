import React from "react";
import PhotoItem from "../items/PhotoItem";

const PhotosSection = ({photos}) => (
    <section>
        <h2 className="text-center">Photos</h2>
        { photos ? (
            <div className="grid grid-5">
                { photos.map(photo => (
                        <PhotoItem photo={photo} />
                    ))
                }
            </div>
        ) : <div>Photos not found!</div>}
    </section>
)
export default PhotosSection;