import { faCalendar, faLocation, faLocationDot, faMagnifyingGlass, faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChainImage from "../chainImage/chain_image";

export default function Footer() {
    return (
        <div className="bg-green md:px-28 px-4 py-2 text-white md:h-max relative">
            <div className="absolute shadow rounded p-8 bg-white text-dark-gray flex justify-between items-center w-11/12 -top-20 md:left-10 lg:left-0 flex-wrap">
                <div className="md:border-r border-r-gray flex flex-col md:items-center md:w-1/4 w-full mb-5">
                    <div>
                        <p className="text-green">Where</p>
                        <div className="flex mt-5">
                            <p>Your Desination</p>
                            <FontAwesomeIcon icon={faLocationDot} className="w-3 ml-3" />
                        </div>
                    </div>
                </div>
                <div className="md:border-r border-r-gray flex flex-col md:items-center md:w-1/4 w-full">
                    <div>
                        <p className="text-green">Date</p>
                        <div className="flex mt-5">
                            <p>Select date</p>
                            <FontAwesomeIcon icon={faCalendar} className="w-3 ml-3" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:border-r border-r-gray flex flex-col md:items-center md:w-1/4 w-full">
                    <div>
                        <p className="text-green">Where</p>
                        <div className="flex mt-5">
                            <p>Select Person</p>
                            <FontAwesomeIcon icon={faPeopleGroup} className="w-3 ml-3" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 md:mt-0  md:w-1/4 w-full md:pl-4">
                    <button className="w-full p-4 bg-yellow text-dark-gray px-8 rounded"><FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 mx-auto" /> </button>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap items-center md:mt-20 mt-72">
                <div className="mt-5 md:mt-0">
                    <ChainImage />
                </div>
                <div className="flex mt-3 md:mt-0 ">
                    12500 Happy clients
                    <FontAwesomeIcon icon={faStar} className="w-3 text-yellow ml-5 mr-2" />
                    4.9 (1.2K)
                </div>
            </div>
        </div>
    )
}