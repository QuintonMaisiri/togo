import ResortCard from "../resort_card/resort_card";

export default function Featured(){
    return(
        <div className="px-4 py-10 md:p-10 lg:p-28 bg-light-gray">

                <h2 className="text-green text-lg text-center ">FEATURED TOUR</h2>
                <h1 className="text-4xl text-center md:w-[400px] mx-auto font-bold">Find Your Most Popular Destination</h1>
                <div className="flex overflow-x-scroll justify-center">
                    <ResortCard />
                    <ResortCard />
                    <ResortCard />      
                    <ResortCard />      
                </div>
                <div className="text-green text-center mt-5 md:mt-0 md:w-max rounded-full border border-green px-4 py-1 mx-auto">
                    Explore Beautiful Places Around The World
                </div>

        </div>
    )
}