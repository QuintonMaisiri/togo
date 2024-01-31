import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Testimonial(){
    return (
        <div className="p-4 md:p-10 lg:p-28">
            <h2 className="text-xl text-green md:text-center">TESTIMONIAL</h2>
            <h1 className="font-bold text-5xl md:w-[600px] md:text-center mx-auto">What People are Saying About Us</h1>
            <div className="flex flex-wrap md:flex-nowrap mt-10 overflow-x-scroll">
                <div className="bg-green rounded-xl p-4 md:p-8 w-full md:w-1/2 mr-10 shrink-0 grow-0">
                    <div className="flex items-center">
                        <div>
                            <Image 
                            width={100}
                            height={100}
                            alt="pic"
                            src={"/images/user.jpg"}
                            className="w-[70px] h-[70px] mr-3 rounded-full border border-white border-2"
                            />
                        </div>
                        <div>
                            <h2 className="text-white text-lg">Roberto Fix</h2>
                            <p>Tourist</p>
                            <div className="flex">
                            <FontAwesomeIcon icon={faStar} className="w-3 tex mr-2 text-yellow"/>
                            <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                            <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                            <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                            <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                            
                            </div>
                        </div>
                    </div>
                    <p className="my-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores a quam totam error perspiciatis hic eligendi nostrum ab doloribus iste ipsum et non distinctio, dolorum sint, iure molestias nesciunt accusantium deserunt incidunt earum exercitationem facilis. Incidunt similique ut aspernatur corrupti magni eaque illum omnis?</p>
                </div>
                <div className="bg-green rounded-xl p-4 md:p-8 w-full md:w-1/2 shrink-0 grow-0 mt-5 md:mt-0">
                    <div className="flex items-center">
                        <div>
                            <Image 
                            width={100}
                            height={100}
                            alt="pic"
                            src={"/images/user.jpg"}
                            className="w-[70px] h-[70px] mr-3 rounded-full border border-white border-2"
                            />
                        </div>
                        <div>
                            <h2 className="text-white text-lg">Roberto Fix</h2>
                            <p>Tourist</p>
                            <div className="flex">
                                <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                                <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                                <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                                <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                                <FontAwesomeIcon icon={faStar} className="w-3 mr-2 text-yellow"/>
                                
                            </div>
                        </div>
                    </div>
                    <p className="my-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur asperiores a quam totam error perspiciatis hic eligendi nostrum ab doloribus iste ipsum et non distinctio, dolorum sint, iure molestias nesciunt accusantium deserunt incidunt earum exercitationem facilis. Incidunt similique ut aspernatur corrupti magni eaque illum omnis?</p>
                </div>
            </div>

        </div>
    )
}