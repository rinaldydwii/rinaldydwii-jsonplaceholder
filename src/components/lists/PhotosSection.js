import React from "react";
import PhotoItem from "../items/PhotoItem";
import Loading from "../Loading";
import ReadMoreButton from "../ReadMoreButton";

const PhotosSection = ({photos, loading, finish, error, onLoadPhotos, paginateToPage = false, paginate = false}) => (
    <section>
        <h2 className="text-center">Photos</h2>
        <Loading loading={loading} finish={finish} error={error}>
            { photos ? (
                <div className="grid grid-4">
                    { photos.map(photo => (
                        <PhotoItem photo={photo} key={photo.id} />
                    )) }
                </div>
            ) : <div>Photos not found!</div>
            }
            { paginateToPage ? <ReadMoreButton to="/photos" /> : "" }
            { paginate ? <ReadMoreButton onClick={onLoadPhotos} /> : ""}
        </Loading>
    </section>
)
export default PhotosSection;