import { faBookmark, faClock, faLocationDot, faPeopleGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
export default function ResortCard() {
    return (
        <div className="text-xs md:text-base shadow-lg bg-white rounded-xl w-max my-10 mr-10 shrink-0 grow-0">
            <Image
                width={340}
                height={200}
                alt="place"
                src={"/images/about2.jpg"}
                className="rounded-t-xl w-[250px] md:h-[200px] h-[150px]"
            />
            <div className="p-2 text-dark-gray">
                <div className="flex justify-between">
                    <h2 className="text-xl text-black">Hill Tracking</h2>
                    <FontAwesomeIcon icon={faBookmark} className="w-4 text-green " />
                </div>
                <p className="text-sm">12 Places | 4 Activities</p>
                <div className="flex justify-between mt-4 border-b border-gray pb-3">
                    <p className="flex"><FontAwesomeIcon icon={faClock} className="w-4 text-green mr-2" />5 Days 4 Nights</p>
                    <p className="flex"><FontAwesomeIcon icon={faPeopleGroup} className="w-4 text-green mr-2" />12 Person</p>
                </div>
                <div className="flex justify-between mt-3 items-center text-sm">
                    <p>From <span className="text-green">$499</span></p>
                    <button className="bg-green text-white p-2 rounded-lg ">Booking Now</button>
                </div>
                <p className="text-sm flex items-center mt-3"> <FontAwesomeIcon icon={faLocationDot} className="w-4 text-green mr-3" /> 7926 Alexandria Pike USA</p>
            </div>

        </div>
    )
}