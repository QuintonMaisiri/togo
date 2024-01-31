import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function DestinationCard({width, height} : {width: string, height : string}){
    return(
        <div className={`rounded-xl w-[${width}] h-[${height}] relative`}>
            <div className="absolute w-full h-full rounded-xl bg-black opacity-35 z-10"></div>
            <div className="rounded-full bg-white p-1 px-3 text-sm flex shadow w-max z-20 absolute top-4 left-4">
                <FontAwesomeIcon icon={faStar} className="text-red-600 w-3 mr-2" />
                4.5
            </div>
            <div className="flex justify-between items-center z-20 absolute w-full bottom-0 p-4">
                <div className="text-white">
                    <h2 className="lg">Indonesia</h2>
                    <p className="text-sm">8 Tours</p>
                </div>
                <div>
                    <button className=" flex items-center text-white bg-green p-2 px-4 rounded-lg">View Details <FontAwesomeIcon icon={faArrowRight}  className="w-4 ml-3"/></button>
                </div>
            </div>
            <Image 
            width={400}
            height={400}
            alt="picture"
            src={"/images/header2.jpg"}
            className="w-full h-full absolute top-0 left-0 rounded-xl"
            />

        </div>
    )
}