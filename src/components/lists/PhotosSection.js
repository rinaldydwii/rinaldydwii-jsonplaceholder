import React from "react";
import PhotoItem from "../items/PhotoItem";
import Loading from "../Loading";

const PhotosSection = ({photos, loading, finish, error}) => (
    <section>
        <h2 className="text-center">Photos</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { photos ? (
                <div className="grid grid-4">
                    { photos.map(photo => (
                            <PhotoItem photo={photo} key={photo.id} />
                        ))
                    }
                </div>
            ) : <div>Photos not found!</div>
            }
        </Loading>
    </section>
)
export default PhotosSection;