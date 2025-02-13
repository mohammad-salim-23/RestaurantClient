import logo from "../images/RestaurantLogo.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="mb-4">
      <h2 className="font-semibold text-3xl flex justify-center mb-3">About Us</h2>
      <h2 className="mb-3">At Royal Crown Cafe & Restaurant, we believe in serving freshly prepared, home-style dishes in a warm and inviting atmosphere. Our commitment to quality ensures that every meal is a delightful experience</h2>
      </div>
      <section
  className="relative w-full min-h-[70vh] lg:min-h-[90vh] flex items-center justify-center text-center text-white mb-4"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover"
    style={{
      backgroundImage: `url(${logo})`,
    }}
  ></div>

  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Text Content */}
  <div className="relative z-10 p-6">
    <h1 className="text-4xl md:text-6xl font-bold">Welcome to Royal Crown</h1>
    <p className="text-lg mt-2">A Taste of Elegance, A Feast of Freshness</p>
  </div>
</section>



      {/* Philosophy Section */}
      <section className="max-w-5xl mx-auto p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Philosophy</h2>
        <p className="mt-4 text-gray-600">
          At <span className="font-semibold">Royal Crown</span>, we believe in delivering 
          <strong> delicious food</strong> in a <strong> contemporary and relaxed environment</strong>. 
          Our <strong> home-style cooking</strong> emphasizes <strong> fresh ingredients</strong>, 
          sourced daily to ensure the best flavors and quality.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Fresh Ingredients",
              desc: "Sourced daily from local farms for the best quality.",
              img: "https://i.pinimg.com/736x/33/92/2f/33922fd459606d395b28baa3956cfdb5.jpg",
            },
            {
              title: "Authentic Taste",
              desc: "Home-style recipes with a touch of elegance.",
              img: "https://i.pinimg.com/736x/a8/86/da/a886daec7850c438ac035d6090d35de0.jpg",
            },
            {
              title: "Cozy Ambience",
              desc: "Enjoy a warm and contemporary dining experience.",
              img: "https://i.pinimg.com/736x/9f/84/22/9f8422d50ad19803130af6fff9d017be.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
              <img src={item.img} alt={item.title} className="w-24 h-24 mx-auto rounded-full" />
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white text-center py-10">
        <h2 className="text-3xl font-bold">Visit Us Today</h2>
        <p className="mt-2 text-lg">Experience the best in fine dining with a home-style touch.</p>
        <a
          href="https://www.facebook.com/royalcrowncafe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          Reserve a Table
        </a>
      </section>
    </div>
  );
};

export default AboutUs;
