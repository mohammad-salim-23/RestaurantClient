import { Link } from 'react-router-dom';

import './All.css'
const Banner = () => {
    return (
        <div className="carousel w-full h-[595px] mt-2">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?w=740&t=st=1715330807~exp=1715331407~hmac=6efd2789b4afa50b839dffd8d77bc87e729e833c559872148600316f3cc88b8e" className="w-full lg:banner rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-3xl md:text-6xl font-bold'>Yummy: Discover Culinary Delights from Around the Globe</h2>
                        <p>Embark on a gastronomic journey with TastyBites and explore a world of flavors through our curated selection of mouthwatering dishes and recipes.</p>
                        <div>
                          <Link to="/allFoods"> <button className="btn bg-primaryColor btn-outline ">All Foods</button></Link>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle ">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/top-view-fresh-vegetables-with-greens-dark-space_140725-76235.jpg?t=st=1715330557~exp=1715334157~hmac=3de9781f2950395a5bb81b413894323491dd20189a63345c56e79d8c22111839&w=826" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-3xl md:text-6xlfont-bold'>Yummy: Discover Culinary Delights from Around the Globe</h2>
                        <p>Embark on a gastronomic journey with TastyBites and explore a world of flavors through our curated selection of mouthwatering dishes and recipes.</p>
                        <div>
                          <Link to="/allFoods"> <button className="btn bg-primaryColor btn-outline">All Foods</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle ">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/selection-various-cocktails-table_140725-2909.jpg?w=740&t=st=1715331549~exp=1715332149~hmac=50824734fd1af0518f08ef1307afa2c503fa6d2a894dc0baa2f20803425762c7" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-3xl md:text-6xl font-bold'>Yummy: Discover Culinary Delights from Around the Globe</h2>
                        <p>Embark on a gastronomic journey with TastyBites and explore a world of flavors through our curated selection of mouthwatering dishes and recipes.</p>
                        <div>
                          <Link to="/allFoods"> <button className="btn bg-primaryColor btn-outline ">All Foods</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle ">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?t=st=1715330441~exp=1715334041~hmac=f013173792229847ab08c2b5afe8e73a15214c80376be52e23d7b2d0a673fd9f&w=996" className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#2F4F4F] to-[rgba(220, 220, 220, 1)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-3xl md:text-6xl font-bold'>Yummy: Discover Culinary Delights from Around the Globe</h2>
                        <p>Embark on a gastronomic journey with TastyBites and explore a world of flavors through our curated selection of mouthwatering dishes and recipes.</p>
                        <div>
                          <Link to="/allFoods"> <button className="btn bg-primaryColor btn-outline mr-5">All Foods</button></Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  justify-end lg:justify-center lg:items-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle ">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;