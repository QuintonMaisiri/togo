import Image from "next/image";
import DestinationCard from "./destination_card";

export default function Destination() {
    return (
        <div className="px-4 py-10 md:p-10 lg:p-28">

            <h2 className="text-green text-lg text-center">DESTINATION LIST</h2>
            <h1 className="text-center md:w-[600px] mx-auto text-4xl ">Explore Most Popular Destinations Around The World</h1>
            <div className="flex justify-between mt-20">
                <DestinationCard width="560px" height="400px" />
                <DestinationCard width="560px" height="400px" />
            </div>
            <div className="flex justify-between mt-5 ">
                <DestinationCard width="400px" height="200px" />
                <DestinationCard width="400px" height="200px" />
                <DestinationCard width="400px" height="200px" />
            </div>
            <div className="mt-10 flex">
                <div className="lg:w-3/5">
                    <h2 className="text-green text-xl">CATEGORY</h2>
                    <h1 className="text-5xl">Pick Your Tour Category</h1>
                    <p className="my-8 text-dark-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid laudantium non incidunt error aut! Maxime error, iusto cum laborum vitae, corrupti pariatur rem adipisci sapiente animi illum quod nostrum.</p>
                    <div className="grid w-max grid-cols-2 md:grid-cols-3 gap-5">
                        <div className="bg-green rounded-xl flex flex-col items-center justify-center text-white w-[132px] h-[132px] md:h-[200px] md:w-[200px]">
                            <Image
                                className="w-[50px] md:w-[80px]"
                                width="80"
                                height="80"
                                src="https://img.icons8.com/external-nawicon-detailed-outline-nawicon/100/ffffff/external-Bonfire-camping-nawicon-detailed-outline-nawicon.png" alt="external-Bonfire-camping-nawicon-detailed-outline-nawicon" />
                            <h2 className="text-xl text-center">Bonfire</h2>
                        </div>

                        <div className="bg-green rounded-xl flex flex-col items-center justify-center text-white w-[132px] h-[132px] md:h-[200px] md:w-[200px]">
                            <Image
                                className="w-[50px] md:w-[80px]"
                                width="80"
                                height="80"
                                src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/ffffff/external-camping-canada-independence-day-flatart-icons-solid-flatarticons.png" alt="external-Bonfire-camping-nawicon-detailed-outline-nawicon" />
                            <h2 className="text-xl text-center">Camping</h2>
                        </div>
                        <div className="bg-green rounded-xl flex flex-col items-center justify-center text-white w-[132px] h-[132px] md:h-[200px] md:w-[200px]">
                            <Image
                                className="w-[50px] md:w-[80px]"
                                width="80"
                                height="80"
                                src="https://img.icons8.com/external-outline-02-chattapat-/100/ffffff/external-wildlife-hiking-and-camping-outline-02-chattapat-.png" alt="external-Bonfire-camping-nawicon-detailed-outline-nawicon" />
                            <h2 className="text-xl text-center">Wildlife</h2>
                        </div>
                        <div className="bg-green rounded-xl flex flex-col items-center justify-center text-white w-[132px] h-[132px] md:h-[200px] md:w-[200px]">
                            <Image
                                className="w-[50px] md:w-[80px]"
                                width="80"
                                height="80"
                                src="https://img.icons8.com/ios/100/ffffff/trekking.png" alt="external-Bonfire-camping-nawicon-detailed-outline-nawicon" />
                            <h2 className="text-xl text-center">Hiking</h2>
                        </div>
                        <div className="bg-green rounded-xl flex flex-col items-center justify-center text-white w-[132px] h-[132px] md:h-[200px] md:w-[200px]">
                            <Image
                                className="w-[50px] md:w-[80px]"
                                width="80"
                                height="80"
                                src="https://img.icons8.com/external-outlines-amoghdesign/100/ffffff/external-diving-sports-and-games-vol-02-outlines-amoghdesign.png" alt="external-Bonfire-camping-nawicon-detailed-outline-nawicon" />
                            <h2 className="text-xl text-center">Hang <br />Gliding</h2>
                        </div>
                        <div className="bg-green rounded-xl flex flex-col items-center justify-center text-white w-[132px] h-[132px] md:h-[200px] md:w-[200px]">
                            <Image
                                className="w-[50px] md:w-[80px]"
                                width="80"
                                height="80"
                                src="https://img.icons8.com/ios/100/ffffff/forest.png" alt="external-Bonfire-camping-nawicon-detailed-outline-nawicon" />
                            <h2 className="text-xl text-center">Forest</h2>
                        </div>

                    </div>
                </div>
                <div className="hidden relative h-full w-2/5">
                    <Image
                        width={200}
                        height={300}
                        alt="picture"
                        src={"/images/header1.jpg"}
                        className="absolute rounded-full h-[400px] border border-2 border-white z-10"
                    />
                    <Image
                        width={360}
                        height={300}
                        alt="picture"
                        src={"/images/header1.jpg"}
                        className="absolute rounded-full h-[620px] left-[100px] top-[80px]"
                    />
                    <div className="bg-yellow text-green font-style text-3xl p-4 py-8 rounded-full absolute top-[560px] z-10">Book your Tour</div>
                </div>

            </div>
        </div>
    )
}