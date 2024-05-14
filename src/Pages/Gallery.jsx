import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import router from "../Routes/Route";

const Gallery = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState([]);
  const { user } = useContext(AuthContext);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleOpenModal = () => {
    if (user) return setSelectedGalleryIndex(true);

    return navigate("/signin?fallback_url=/gallery");
  };

  const handleCloseModal = () => {
    setSelectedGalleryIndex(false);
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.photo.value;
    const feedback = form.feedback.value;
    const email = form.email.value;
    const newFeedback = {
      name,
      image,
      feedback,
      email,
    };

    fetch(`http://localhost:5000/feedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Feedback added successfully!",
            icon: "success",
          });
          handleCloseModal();
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/feedback`)
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data);
      });
  }, [feedback]);

  return (
    <div>
      <Helmet>
        <title>Yummy | Gallery</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="md:ml-52 md:flex">
        <img
          className="flex justify-center md:h-[405px]"
          src="https://img.freepik.com/premium-photo/young-asian-indian-student-cartoon-character_113255-10356.jpg?w=740"
          alt=""
        />

        <button
          className="btn   btn-outline  mb-3 bg-primaryColor ml-20 md:mt-80 w-36 h-10"
          onClick={handleOpenModal}
        >
          Add Feedback
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feedback.map((feedback, index) => (
          <div
            className="relative w-96 "
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img className="h-80" src={feedback.image} alt="" />
            {hoveredIndex === index && (
              <div className="absolute top-0 left-0 bg-gray-900 bg-opacity-80 text-white p-2">
                {feedback.name && <p>Name: {feedback.name}</p>}
                {feedback.email && <p>Email: {feedback.email}</p>}
                {feedback.feedback && <p>Feedback: {feedback.feedback}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {user && selectedGalleryIndex && (
        <dialog open={selectedGalleryIndex} className="modal">
          <div className="modal-box mt-20">
            <form onSubmit={handleFeedback} method="dialog">
              <div className="form-control mt-10">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  value={user?.email}
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
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Gallery;
