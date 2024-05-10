
import Marquee from "react-fast-marquee";
const FeaturedFoods = () => {
    return (
      <div className="mt-6">
        <h2 className="text-3xl font-bold text-center mb-4">Featured Foods</h2>
         <Marquee>
         <div className="flex h-52">
            <img className="" src="https://img.freepik.com/free-photo/cake-oiled-with-white-cream-garnished-with-strawberries_140725-4496.jpg?t=st=1715366047~exp=1715369647~hmac=73a3cffb7f33436a269fd14ec4fa81c2021d4ab5f86c3674356372cc62eb59a5&w=360" alt="" />
            <img src="https://img.freepik.com/free-photo/front-view-blue-cool-lemonade-with-ice-blue-background-fruit-cold-cocktail-drink-color-bar-juice_140725-156766.jpg?w=360&t=st=1715367167~exp=1715367767~hmac=51c0f65b77f4efb71172224dd543a953be20cadc917ba68ecbb600b5d990f6ed" alt="" />
            <img src="https://img.freepik.com/free-photo/front-view-cocktail-with-strawberries-grapes_140725-13857.jpg?w=740&t=st=1715367469~exp=1715368069~hmac=7d70d3fbcd54cb8414b4b1681b9453330d61183950d8105bc85c6520659b12e0" alt="" />
            <img src="https://img.freepik.com/free-photo/cake-oiled-with-white-cream-garnished-with-strawberries_140725-4496.jpg?t=st=1715366047~exp=1715369647~hmac=73a3cffb7f33436a269fd14ec4fa81c2021d4ab5f86c3674356372cc62eb59a5&w=360" alt="" />
            <img src="https://img.freepik.com/premium-photo/happy-cute-kid-boy-think-choose-food_977617-100772.jpg?w=900" alt="" />
            <img src="https://img.freepik.com/free-photo/people-ramadan-celebration_23-2151344680.jpg?t=st=1715367780~exp=1715371380~hmac=9bb9487bacdadbfa8a7b1cb354bee7ceb3b9f7d4d95b728bc9bd75611683a78d&w=826" alt="" />
        </div>
       </Marquee>
      </div>

    );
};

export default FeaturedFoods;