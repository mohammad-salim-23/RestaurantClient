import icon from "../images/RestaurantLogo.jpeg";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-300">
     

      <footer className="footer px-10 py-4 border-t text-base-content border-base-300 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo & Tagline */}
        <aside className="flex flex-col md:flex-row items-start md:items-center gap-4 text-left">
          <img className="w-16 h-16" src={icon} alt="Royal Crown Logo" />
          <p>
            <span className="font-bold text-lg">RoyalCrown Cafe & Restaurant </span> <br />
            Delighting taste buds since 2024
          </p>
        </aside>

        {/* Location Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 text-left">
          <IoLocationOutline className="text-red-600 text-2xl mt-2" />
          <div>
            <h2 className="font-bold text-lg">Royal Crown</h2>
            <p className="my-2">
              <span className="text-red-600 text-xl font-semibold">Sylhet Outlet:</span>
              <a
                href="https://www.google.com/maps/place/Royal+Crown+Cafe+%26+Restaurant,+JC+Trust+house,+2nd+Floor,+Fazil+Chist,+East,+Sylhet+3100/data=!4m2!3m1!1s0x375055dc97a98e23:0x4c4f9dacb918880c?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBjI1LjYuMRgAINeCAyp1LDk0MjU1NDQwLDk0MjQyNTE0LDk0MjIzMjk5LDk0MjE2NDEzLDk0MjEyNDk2LDk0MjA3Mzk0LDk0MjA3NTA2LDk0MjA4NTA2LDk0MjE3NTIzLDk0MjE4NjUzLDk0MjI5ODM5LDQ3MDg0MzkzLDk0MjEzMjAwQgJCRA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline block"
              >
                J.C Trust House (2nd Floor), Fazil Chist, Subid Bazar (East), Sylhet-3100
              </a>
            </p>
          </div>
        </div>

        {/* Contact & Social Media Section */}
        <div className="flex flex-col items-start gap-2 text-left">
         {/* Email */}
<a href="mailto:royalcrowncafe.info@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-red-600 hover:underline">
  <MdEmail className="text-2xl text-gray-700" />
  royalcrowncafe.info@gmail.com
</a>

{/* Facebook */}
<a href="https://www.facebook.com/royalcrowncafe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:underline">
  <FaFacebook className="text-2xl text-blue-500" />
  facebook.com/royalcrowncafe
</a>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;