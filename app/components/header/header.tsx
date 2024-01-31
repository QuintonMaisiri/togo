import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../navbar/navbar";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Footer from "./footer";
import Image from "next/image";

export default function Header() {
    return (
        <div>
            <Navbar />
            <div className="flex relative mb-20 lg:mb-0">
                <div className="p-4 py-10 md:p-10 lg:p-28 md:w-2/3">

                    <h1 className="font-style text-green text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-0">Explore the World</h1>
                    <h1 className="md:text-7xl text-3xl text-black font-bold">Travel Your Dream Destination <span className="text-green">with us</span></h1>
                    <p className="text-dark-gray my-5 text-md md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reprehenderit dignissimos.</p>
                    <div className="mt-5 flex flex-wrap md:flex-nowrap items-center mb-10 md:mb-0">
                        <button className="text-white bg-green rounded-xl text-white px-10 py-5 shrink-0 grow-0 mr-16 items-center w-max h-max ">Explore more</button>
                        <button className="text-green md:px-10 py-5 flex items-center">
                            <div className="w-16 h-16 rounded-full shadow-circle flex items-center justify-center mr-3">
                                <div className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center">
                                    <FontAwesomeIcon icon={faPlay} className="w-3" />
                                </div>
                            </div>
                            <p className="text-green">Take a tour</p>
                        </button>
                    </div>
                </div>
                <div className="1/3 hidden lg:block">
                    <Image
                        width={340}
                        height={200}
                        alt="image"
                        src={'/images/header1.jpg'}
                        className="absolute rounded-lg top-10 right-[240px] "
                    />
                    <Image
                        width={340}
                        height={200}
                        alt="image"
                        src={'/images/header2.jpg'}
                        className="absolute rounded-t-lg z-10 -bottom-32 right-5"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}