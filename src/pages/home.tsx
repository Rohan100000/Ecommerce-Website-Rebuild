import React from 'react';
import Homeimg from '../assets/images/Homeimg.jpg';
import Shirt from '../assets/images/Shirts.jpg';
import Sweater from '../assets/images/sweters.jpg';
import Lehenga from '../assets/images/lehengas.jpg';
import BestDesign from '../assets/images/bestdesign.jpg';
import Image1 from '../assets/images/des1.jpg';
import Image2 from '../assets/images/des2.jpg';
import Image3 from '../assets/images/des3.jpg';
import Product1 from '../assets/images/product1.jpg';
import Product2 from '../assets/images/product2.jpg';
import Product3 from '../assets/images/product3.jpg';
import Product4 from '../assets/images/product4.jpg';
import Product5 from '../assets/images/product5.jpg';
import Product6 from '../assets/images/product6.jpg';
import Dealimg from '../assets/images/deal.jpg';

const ProductCard = ({ imgSrc, fakePrice, realPrice }: { imgSrc: string; fakePrice: string; realPrice: string }) => {
    return (
        <div className="postcard bg-white transition-transform duration-700 border-2 border-black/10 rounded-b-lg shadow-lg hover:scale-90 hover:shadow-2xl m-2">
            <img src={imgSrc} alt="Product" className="w-72 h-88" />
            <div className="text-area p-6 font-ubuntu text-left">
                <h3 className="text-xl font-normal">Curvz Founded</h3>
                <span className="fake-price line-through text-gray-500">{fakePrice}</span>{" "}
                <span className="real-price font-bold text-black">{realPrice}</span>
            </div>
        </div>
    );
};

// HomeView Component
const Home: React.FC = () => {
    return (
        <>
            <div className="h-screen w-full bg-[#5A1413]">
                {/* Section 1 */}
                <div className="flex justify-around">
                    <div className="w-1/2 my-6 ml-44 pr-40">
                        {/* Dotted Collection */}
                        <div className="relative bottom-2 right-60 h-28 w-28 bg-[radial-gradient(circle,_#C6B79B_1.5px,_transparent_1.5px)] bg-repeat bg-[length:19px_19px]"></div>

                        {/* Find the Best Style */}
                        <div>
                            <h1 className="font-syne text-6xl text-[#C6B79B] font-normal tracking-tighter pr-28">
                                FIND THE BEST STYLE FOR YOU
                            </h1>
                        </div>

                        {/* Lorem Ipsum Details */}
                        <div>
                            <p className="font-syne text-lg text-[#C6B79B] pr-28 py-4">
                                LOREM IPSUM DOLAR SIT AMIT, CONSECTETUR ADRESS ING ALET. QUISQ POLYSYONARA PORTA LUCTUS. EMINEM GUAVA MI AC MOLOTOVE.
                            </p>
                        </div>

                        {/* Shop Now Button */}
                        <div className="w-48 transition-all duration-500">
                            <a href="#" className="font-syne text-[#C6B79B] text-sm font-bold py-4 px-8 border border-[#C6B79B] hover:bg-transparent hover:border-white hover:text-white">
                                SHOP NOW
                            </a>
                        </div>
                    </div>

                    {/* Section 1-2 */}
                    <div className="relative right-44 top-6">
                        {/* Image with Rounded Corner */}
                        <div className="relative h-[430px] w-[400px] rounded-br-[125px] bg-cover" style={{ backgroundImage: `url(${Homeimg})` }}></div>

                        {/* Dotted Collections */}
                        <div className="absolute left-[390px] top-20">
                            <div className="h-28 w-28 bg-[radial-gradient(circle,_#C6B79B_1.5px,_transparent_1.5px)] bg-repeat bg-[length:19px_19px]"></div>
                        </div>
                        <div className="absolute left-[-10px] top-[309px] z-[-1]">
                            <div className="h-28 w-28 bg-[radial-gradient(circle,_#C6B79B_1.5px,_transparent_1.5px)] bg-repeat bg-[length:19px_19px]"></div>
                        </div>
                    </div>
                </div>

                {/* Section 2 - Circle */}
                <div className="relative top-[-125px] left-[-50px] z-[-1]">
                    <div className="h-[500px] w-[500px] bg-gradient-to-b from-[#ffe4c8] to-[#C6B79B] rounded-full"></div>
                </div>
            </div>

            {/* New Collection Starts*/}
            <div className="w-full mx-auto text-center pt-24 bg-[whitesmoke]">
                <div className="container">
                    <h1 className="font-syne text-[75px] uppercase">New Collection</h1>
                    <p className="font-syne text-sm py-5 px-[105px] uppercase">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
                        ipsum quam numquam! Quod, nemo aliquam.
                    </p>

                    {/* Three Square Boxes */}
                    <div className="flex justify-between">
                        {/* First Box */}
                        <div className="relative flex-[0_0_32%] mb-7 overflow-hidden group">
                            <img
                                src={Shirt}
                                alt="shirts"
                                className="object-cover w-full h-[430px] transition-opacity duration-500 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 transition-all duration-500 cursor-pointer">
                                <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black font-syne text-sm font-bold border border-black px-9 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-1/2 hover:bg-[#5A1413] hover:text-[#ffd4a8] hover:border-[#5A1413]">
                                    SHIRTS
                                </h3>
                            </div>
                        </div>

                        {/* Second Box */}
                        <div className="relative flex-[0_0_32%] mb-7 overflow-hidden group">
                            <img
                                src={Lehenga}
                                alt="lehengas"
                                className="object-cover w-full h-[430px] transition-opacity duration-500 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 transition-all duration-500 cursor-pointer">
                                <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black font-syne text-sm font-bold border border-black px-9 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-1/2 hover:bg-[#5A1413] hover:text-[#ffd4a8] hover:border-[#5A1413]">
                                    LEHENGAS
                                </h3>
                            </div>
                        </div>

                        {/* Third Box */}
                        <div className="relative flex-[0_0_32%] mb-7 overflow-hidden group">
                            <img
                                src={Sweater}
                                alt="sweaters"
                                className="object-cover w-full h-[430px] transition-opacity duration-500 group-hover:opacity-50"
                            />
                            <div className="absolute inset-0 transition-all duration-500 cursor-pointer">
                                <h3 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black font-syne text-sm font-bold border border-black px-9 py-3 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-1/2 hover:bg-[#5A1413] hover:text-[#ffd4a8] hover:border-[#5A1413]">
                                    SWEATERS
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[114px] w-[114px] bg-repeat-radial bg-[repeating-radial-gradient(circle at center, #7f7676 1.5px, transparent 1.5px)] bg-[19px_19px] bottom-28 left-[50%] transform -translate-x-1/2 z-[-1]"></div>
            </div>

            {/* Best Design Section */}

            <div className="w-full mt-[-70px] pt-24 pb-24 bg-[whitesmoke]">
                <div className="flex relative mx-[90px] box-border">
                    {/* Left Component */}
                    <div
                        className="h-[600px] w-[800px] bg-cover bg-no-repeat rounded-tl-[80px]"
                        style={{
                            backgroundImage: `url(${BestDesign})`,
                        }}
                    ></div>

                    {/* Dot Holder */}
                    <div className="absolute left-[35%] top-[-50px]">
                        <div className="h-[114px] w-[114px] bg-repeat-radial bg-[repeating-radial-gradient(circle at center, #7f7676 1.5px, transparent 1.5px)] bg-[19px_19px]"></div>
                    </div>

                    {/* Right Component */}
                    <div className="h-[500px] w-[80%]">
                        <div className="pt-20 px-[20px]">
                            <div className="pt-[80px] pl-[100px] text-[50px] font-light font-syne tracking-tight leading-none">
                                <h2>BEST DESIGNS AVAILABLE</h2>
                            </div>
                            <div className="pt-[10px] px-[105px] text-base leading-relaxed max-w-[800px]">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                                    aperiam suscipit. Distinctio tempora excepturi ut corrupti
                                    explicabo nemo atque, libero nobis beatae totam voluptatibus
                                    ratione. Eligendi laudantium optio at nesciunt!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Left Element */}
                    <div className="absolute bottom-[-30px] left-[-50px] h-[200px] w-[200px] bg-[#5A1413] opacity-40"></div>

                    {/* Information Section */}
                    <div className="absolute bg-[whitesmoke] bottom-0 right-0 h-[40%] w-[70%] p-[70px] shadow-md flex justify-between z-10">
                        <div className="text-center">
                            <h4 className="text-xl font-bold pl-7 pt-5 font-ubuntu">2022</h4>
                            <p className="font-medium">Curvz Founded</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold pl-6 pt-5 font-ubuntu">8600+</h4>
                            <p className="font-medium">Products Sold</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-bold pl-6 pt-5 font-ubuntu">3105</h4>
                            <p className="font-medium">Best Reviews</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Best Seller Section */}

            <div className="bg-[#5A1413] py-20 px-10 min-h-[110vh] flex flex-wrap justify-evenly gap-8">
                <div className="pt-16 w-[40%]">
                    <h2 className="text-[#C6B79B] font-syne text-[50px] font-light">
                        BEST SELLING PRODUCT
                    </h2>

                    <div className="text-[#C6B79B] font-syne text-left mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, rem
                        quia repellat nesciunt molestiae, aliquid suscipit laudantium
                    </div>
                    <div className="text-[#C6B79B] font-syne text-left mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, rem
                        quia repellat nesciunt molestiae, aliquid suscipit laudantium
                    </div>
                    <div className="text-[#C6B79B] font-syne text-left mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, rem
                        quia repellat nesciunt molestiae, aliquid suscipit laudantium
                    </div>

                    {/* Call to Action */}
                    <div className="mt-5 w-[155px] border-2 border-[#C6B79B] text-center flex items-center justify-center cursor-pointer py-3">
                        <a
                            href="#"
                            className="font-syne text-xs font-bold text-[#C6B79B] hover:text-white hover:border-white"
                        >
                            SEE MORE
                        </a>
                    </div>
                </div>

                {/* Carousel Section */}
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div style={{ height: "400px", overflow: "hidden" }}>
                                <img src={Image1} className="d-block w-100" style={{ height: "100%", objectFit: "cover" }} alt="First slide" />
                            </div>
                            <div className="card-body text-center">
                                <div className="font-bold">Curvz Founded</div>
                                <div>
                                    <del>$1200</del> <strong className="text-lg">$750</strong>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div style={{ height: "400px", overflow: "hidden" }}>
                                <img src={Image2} className="d-block w-100" style={{ height: "100%", objectFit: "cover" }} alt="Second slide" />
                            </div>
                            <div className="card-body text-center">
                                <div className="font-bold">Curvz Founded</div>
                                <div>
                                    <del>$1200</del> <strong className="text-lg">$750</strong>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div style={{ height: "400px", overflow: "hidden" }}>
                                <img src={Image3} className="d-block w-100" style={{ height: "100%", objectFit: "cover" }} alt="Third slide" />
                            </div>
                            <div className="card-body text-center">
                                <div className="font-bold ">Curvz Founded</div>
                                <div>
                                    <del>$1200</del> <strong className="text-lg">$750</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            {/* Our Products */}

            <div className="our-products text-center font-syne pt-24">
                <h1 className="pb-10 text-6xl font-bold uppercase">Our Products</h1>

                {/* Product List Buttons */}
                <div className="product-list flex justify-center flex-wrap">
                    <span className="button mx-2 mb-4 px-6 text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-3 cursor-pointer">
                        &nbsp;Hot&nbsp;
                    </span>
                    <span className="button mx-2 mb-4 px-6 text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-3 cursor-pointer">
                        &nbsp;On Sale&nbsp;
                    </span>
                    <span className="button mx-2 mb-4 px-6 text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-3 cursor-pointer">
                        &nbsp;Trending Now&nbsp;
                    </span>
                    <span className="button mx-2 mb-4 px-6 text-gray-500 hover:text-black hover:underline hover:underline-offset-4 hover:decoration-3 cursor-pointer">
                        &nbsp;New Arrival&nbsp;
                    </span>
                </div>

                {/* FlexBox - First Row */}
                <div className="flexbox flex justify-center flex-wrap mx-16 my-16">
                    <ProductCard imgSrc={Product1} fakePrice="$244" realPrice="$140" />
                    <ProductCard imgSrc={Product2} fakePrice="$244" realPrice="$140" />
                    <ProductCard imgSrc={Product3} fakePrice="$244" realPrice="$140" />
                </div>

                {/* FlexBox - Second Row */}
                <div className="flexbox flex justify-center flex-wrap mx-16 my-16">
                    <ProductCard imgSrc={Product4} fakePrice="$244" realPrice="$140" />
                    <ProductCard imgSrc={Product5} fakePrice="$244" realPrice="$140" />
                    <ProductCard imgSrc={Product6} fakePrice="$244" realPrice="$140" />
                </div>
            </div>

            {/* Deals of the Day */}

            <div className="dealsDay pt-24 font-syne">
                <div className="deals-container flex flex-wrap items-start justify-stretch max-w-full p-8 m-8 bg-[#C6B79B]">
                    {/* Left Box */}
                    <div className="left-box flex flex-col justify-between flex-wrap basis-1/2 p-4">
                        <h1 className="text-5xl font-bold">DEAL OF THE DAY</h1>
                        <p className="text-lg mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
                            natus aliquam eos voluptas architecto harum.
                        </p>

                        {/* Countdown Timer */}
                        <div className="image-container flex flex-wrap items-center justify-start mt-6 w-full">
                            <div className="box flex flex-col items-center text-center bg-gray-100 h-36 w-36 m-5 p-5">
                                <h1 className="text-3xl font-ubuntu">06</h1>
                                <p className="mt-2">Hours</p>
                            </div>
                            <div className="box flex flex-col items-center text-center bg-gray-100 h-36 w-36 m-5 p-5">
                                <h1 className="text-3xl font-ubuntu">12</h1>
                                <p className="mt-2">Minutes</p>
                            </div>
                            <div className="box flex flex-col items-center text-center bg-gray-100 h-36 w-36 m-5 p-5">
                                <h1 className="text-3xl font-ubuntu">19</h1>
                                <p className="mt-2">Seconds</p>
                            </div>
                        </div>

                        {/* Shop Now Button */}
                        <button className="mt-6 min-h-16 min-w-48 text-[#C6B79B] bg-[#5A1413] tracking-widest text-sm font-bold py-4 px-8 hover:bg-[#C6B79B] hover:text-[#5A1413] hover:border-[#5A1413] transition">
                            SHOP NOW
                        </button>
                    </div>

                    {/* Right Box with Image */}
                    <div className="right-box flex items-center justify-center basis-1/2 p-4">
                        <img className="big-image w-96 h-auto" src={Dealimg} alt="Deal of the Day" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
