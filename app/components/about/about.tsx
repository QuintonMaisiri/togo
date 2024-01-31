import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function About() {
    return (
        <div className=" p-4 py-10 md:p-10 lg:p-28">
            <div className="text-white grid grid-cols-1 md:grid-cols-3 gap-x-8">

                <div className="py-2 bg-green text-center rounded-lg flex flex-col items-center mb-5">
                    <Image
                        width={100}
                        height={100}
                        src="https://img.icons8.com/dotty/100/ffffff/map-marker.png"
                        alt="map-marker" />
                    <h2 className="text-xl mb-3">Most Popular Destination</h2>
                    <p className="text-xs lg:w-[230px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda excepturi eligendi!</p>
                </div>
                <div className="py-2 bg-yellow text-dark-gray text-center rounded-lg flex flex-col items-center mb-5">
                    <Image
                        width={100}
                        height={100}
                        src="https://img.icons8.com/dotty/80/343839/train-ticket.png"
                        alt="map-marker" />
                    <h2 className="text-xl mb-3">Most Popular Destination</h2>
                    <p className="text-xs lg:w-[230px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda excepturi eligendi!</p>
                </div>
                <div className="py-2 bg-green text-center rounded-lg flex flex-col items-center mb-5">
                    <Image
                        width={80}
                        height={80}
                        src="https://img.icons8.com/ios/80/ffffff/bus.png"
                        alt="map-marker"
                        className="my-2" />
                    <h2 className="text-xl mb-3">Easy Transport System</h2>
                    <p className="text-xs lg:w-[230px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga assumenda excepturi eligendi!</p>
                </div>
            </div>
            <div className="flex mt-5">
                <div className="w-3/5 relative hidden lg:block">
                    <div className="text-white bg-green rounded-xl absolute font-style text-3xl p-8 py-10 z-30 bottom-[160px]">Enjoy Your Travel</div>
                    <div className="w-[300px] border border-green border-2 rounded-xl h-[430px] absolute z-10 left-[220px] top-24 rotate-12"></div>
                    <Image 
                        alt="road"
                        width={300}
                        height={100}
                        src={"/images/about1.webp"}
                        className="rounded-xl absolute"
                    />
                    <Image 
                        alt="road"
                        width={300}
                        height={100}
                        src={"/images/about2.jpg"}
                        className="rounded-xl border border-white border-2 z-20 absolute left-[220px] top-24"
                    />
                </div>
                <div className="lg:w-2/5 w-full">
                    <h2 className="text-green text-lg ">ABOUT TOGO</h2>
                    <h1 className="text-5xl mb-5 font-bold">We Make Your Travel More Enjoyable</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aut obcaecati molestias facere nam reprehenderit commodi labore suscipit ducimus corporis? Eos numquam debitis explicabo necessitatibus rem quas praesentium eaque perferendis.</p>
                    <div className="my-5 flex">
                        <Image
                            width={60}
                            height={60}
                            src={"https://img.icons8.com/arcade/100/compass.png"}
                            alt="tavel"
                            className="rounded-full w-[60px] h-[60px] shadow-circle p-2 mr-4"
                        />
                        <div>
                            <h2 className="text-green text-lg">Trusted Travel Guide</h2>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident.</p>
                        </div>
                    </div>
                    <div className="my-5 flex">
                        <Image
                            width={60}
                            height={60}
                            src={"https://img.icons8.com/external-vectorslab-outline-color-vectorslab/100/external-Caravan-travel-and-hotels-vectorslab-outline-color-vectorslab.png"}
                            alt="tavel"
                            className="rounded-full w-[60px] h-[60px] shadow-circle p-2 mr-4"
                        />
                        <div>
                            <h2 className="text-green text-lg">Trusted Travel Guide</h2>
                            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4 text-center">
                        <div>
                            <h2 className="text-green text-lg">100%</h2>
                            <p >Trusted Travel Agency</p>
                        </div>
                        <div>
                            <h2 className="text-green text-lg">500K</h2>
                            <p >Local Guide</p>
                        </div>
                        <div>
                            <h2 className="text-green text-lg">99%</h2>
                            <p >Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-wrap md:flex-nowrap items-center">
                        <button className="text-white bg-green rounded-xl text-white px-16 py-5 shrink-0 grow-0 mr-16 items-center w-max h-max ">Book Now</button>
                        <button className="text-green flex items-center">
                            <div className="text-green md:px-10 py-5 flex items-center">
                                <div className="w-16 h-16 rounded-full shadow-circle flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full shadow-lg flex items-center justify-center">
                                        <FontAwesomeIcon icon={faPlay} className="w-3" />
                                    </div>
                                </div>
                            </div>
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}