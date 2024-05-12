import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/AuthContext/AuthProvider";

const Gallery = () => {
  const gallerys = useLoaderData();
  const { user } = useContext(AuthContext);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);

  const handleOpenModal = (index) => {
    setSelectedGalleryIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedGalleryIndex(null);
  };
 const handleFeedback = (galleryId)=>{
    e.preventDefault();
    const form = e.target;

 }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {gallerys.map((gallery, index) => (
        <div key={index}>
          <img src={gallery.image} alt="" />
          <div>
            {user ? (
              <button
                className="btn"
                onClick={() => handleOpenModal(index)}
              >
                Add Feedback
              </button>
            ) : (
              <Link to="/signin">
                <button>Add Feedback</button>
              </Link>
            )}
          </div>
          {user && selectedGalleryIndex === index && (
            <dialog
              open={selectedGalleryIndex !== null}
              id={`modal_${index}`}
              className="modal"
            >
              <div className="modal-box">
                <form onSubmit={()=>handleFeedback(gallery._id)} method="dialog">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="foodname"
                      value={user?.displayName}
                      className="input input-bordered"
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Experience</span>
                    </label>
                    <input
                      type="text"
                      name="feedback"
                      className="input input-bordered"
                    />
                  </div>
                  <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={handleCloseModal}
                  >
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">
                  Press ESC key or click on ✕ button to close
                </p>
              </div>
            </dialog>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
