import Image from "next/image"
export default function Why(){
    return (
        <div className="py-10 px-4 md:p-10 lg:p-28 bg-light-gray">
            <div className=" grid md:grid-cols-2 grid-cols-1">
                <div className="md:pr-10">
                    <Image 
                    width={400}
                    height={200}
                    alt="pic"
                    src={"/images/about2.jpg"}
                    className="w-full h-[320px] rounded-xl"
                    />
                </div>
                <div className="mt-5 md:mt-0">
                    <h2 className="text-green text-xl">WHY CHOOSE USE</h2>
                    <h1 className="text-5xl font-bold">Why you Should Choose Our Trip</h1>
                    <p className="text-dark-gray my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam explicabo eaque eius quo nisi minima magni tenetur illum laboriosam. Ut expedita voluptas labore deserunt rem, unde corporis sed, itaque reiciendis voluptate ex quos, error saepe. Architecto eligendi obcaecati eos eveniet!</p>
                    <h2 className="text-green font-style text-3xl">Best way to enjoy Adventure</h2>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap mt-10 items-center">
                <div className="w-full md:w-2/3 bg-yellow py-4 p-2 flex flex-wrap lg:flex-nowrap rounded-xl ">
                    <div className="flex ">
                        <div className="w-[70px] h-[70px] bg-white rounded-full mr-3 flex items-center justify-center">
                            <Image 
                            width="60" 
                            height="60" 
                            src="https://img.icons8.com/ios/100/399F6E/airport.png" 
                            alt="airport"
                            className="w-[40px]"
                            />
                            
                        </div>
                        <p className="text-md p-2">Professional & Certified</p>
                    </div>
                    <div className="flex mt-5 md:mt-5">
                        <div className="w-[70px] h-[70px] bg-white rounded-full mr-3 flex items-center justify-center">
                            <Image 
                            width="60" 
                            height="60" 
                            src="https://img.icons8.com/pastel-glyph/100/399F6E/suitcase--v4.png" 
                            alt="airport"
                            className="w-[40px]"
                            />
                            
                        </div>
                        <p className="text-md p-2">Professional & Certified</p>
                    </div>
                    <div className="flex mt-5 md:mt-5">
                        <div className="w-[70px] h-[70px] bg-white rounded-full mr-3 flex items-center justify-center">
                            <Image 
                            width="60" 
                            height="60" 
                            src="https://img.icons8.com/ios/100/399F6E/booking.png" 
                            alt="airport"
                            className="w-[40px]"
                            />
                            
                        </div>
                        <p className="text-md p-2">Professional & Certified</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 pl-0 md:pl-5 mt-5 md:mt-0">
                    <button className="w-full text-white text-xl bg-green px-12 py-4 rounded-xl">Explore more</button>
                </div>
            </div>
        </div>
    )
}