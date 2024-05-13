
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
                <img src="https://img.freepik.com/free-photo/expert-female-barman-is-making-cocktail-isolated-white-wall-international-barman-day-bar-alcohol-restaurant-party-pub-nightlife-cocktail-nightclub-concept_155003-40207.jpg?t=st=1715371677~exp=1715375277~hmac=d215bcd2eff031390cdd8bfa2968a8df30510820eb58d7d8030dc186f382afe8&w=826" alt="" />
                <img src="https://img.freepik.com/free-vector/happy-girl-cartoon-character-holding-drink-plastic-cup_1308-56217.jpg?t=st=1715371761~exp=1715375361~hmac=ba410c1b93a53d0d683a0b6ee7da0aee67ccd8cd98605dad67cff064d3ef8ac5&w=360" alt="" />
                <img src="https://img.freepik.com/premium-psd/fresh-water-drink-poster-design-template_987701-1088.jpg?w=740" alt="" />
            </div>
            </Marquee> 
         </div>
        </div>
    );
};

export default SpecialDrinks;