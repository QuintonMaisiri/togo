import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function HostCard(){
    return (
        <div className="shadow-circle rounded-xl p-4 w-[280px] shrink-0 grow-0">
            <Image 
            width={200}
            height={200}
            alt="user"
            src={"/images/user.jpg"}
            className="w-full rounded-xl h-[240px]"/>
            <h2 className="font-bold text-center text-xl mt-5">Malina Rosario</h2>
            <p className="flex justify-center"><FontAwesomeIcon icon={faStar} className="w-4 text-yellow mr-3" /> 4.9 </p>
        </div>
    )
}