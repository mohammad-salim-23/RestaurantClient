
import Marquee from "react-fast-marquee";
const FeaturedFoods = () => {
    return (
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Foods</h2>
         <Marquee>
         <div className="flex h-52">
            <img className="" src="https://i.ibb.co.com/GfVMTW4C/Whats-App-Image-2025-02-09-at-1-18-51-PM.jpg" alt="" />
            <img src="https://i.ibb.co.com/RkF5yRMc/Whats-App-Image-2025-02-09-at-1-18-47-PM.jpg" alt="" />
            <img src="https://i.ibb.co.com/S4pMSSCx/Whats-App-Image-2025-02-09-at-1-18-46-PM-1.jpg" alt="" />
            <img src="https://i.ibb.co.com/SwbSjWGX/Whats-App-Image-2025-02-09-at-1-18-46-PM.jpg" alt="" />
            <img src="https://i.ibb.co.com/zH0MbB9s/Whats-App-Image-2025-02-09-at-1-18-52-PM.jpg" alt="" />
            <img src="https://i.ibb.co.com/TxX0NBms/Whats-App-Image-2025-02-09-at-1-18-43-PM.jpg" alt="" />
        </div>
       </Marquee>
      </div>

    );
};

export default FeaturedFoods;