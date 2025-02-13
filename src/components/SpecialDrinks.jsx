
import Marquee from "react-fast-marquee";
const SpecialDrinks = () => {
    return (
        <div >
            <h2 className="text-3xl font-bold text-center mt-4">Our Special <span className="text-red-600">Drinks</span> </h2>
         <div>
         <Marquee direction="right" >
            <div className="h-60 mt-5 mb-5 flex ">
                <img src="https://img.freepik.com/free-photo/cocktail-with-lemon-slices-ice-cubes-mint_141793-581.jpg?t=st=1715371569~exp=1715375169~hmac=afedc89dd9759463a1ef0d3999e2a6217ed90f19030bb99b60b7d532ab7c5950&w=360" alt="" />
                <img src="https://img.freepik.com/free-photo/delicious-american-beer-assortment_23-2148907562.jpg?t=st=1715371608~exp=1715375208~hmac=74f1ed974daca208222b88e2239e538d9ac07bfd40fcb42009686c18e52afd9f&w=360" alt="" />
                <img src="https://i.ibb.co.com/HDPtrRcB/Whats-App-Image-2025-02-09-at-1-18-49-PM-2.jpg" alt="" />
                <img src="https://i.ibb.co.com/1YTRSQn6/Whats-App-Image-2025-02-09-at-1-18-48-PM.jpg" alt="" />
                <img src="https://i.ibb.co.com/HpNfh8Qm/Whats-App-Image-2025-02-09-at-1-18-49-PM-1.jpg" alt="" />
            </div>
            </Marquee> 
         </div>
        </div>
    );
};

export default SpecialDrinks;