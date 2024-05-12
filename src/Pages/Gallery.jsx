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
  const handleFeedback = (e, galleryId) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.photo.value;
    const feedback = form.feedback.value;
    const newFeedback={
        name,image,feedback
    }

    fetch(`http://localhost:5000/feedback`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            galleryId,
            newFeedback
        })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    console.log(name);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {gallerys.map((gallery, index) => (
        <div key={index}>
          <img src={gallery.image} alt="" />
          <div>
            {user ? (
              <button className="btn" onClick={() => handleOpenModal(index)}>
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
                <form
                  onSubmit={(e) => handleFeedback(e, gallery._id)}
                  method="dialog"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
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
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      className="input input-bordered"
                    />
                    <input className="btn" type="submit" value="Add" />
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
