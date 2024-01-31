import { faArrowRight, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function BlogCard() {
    return (
        <div className="bg-white rounded-xl shadow-lg w-[240px] md:w-[370px] shrink-0 grow-0 mr-5">
            <Image 
                width={300}
                height={300}
                alt="picture"
                src={'/images/about2.jpg'}
                className="w-full h-[200px] md:h-[240px] rounded-t-xl"
            />
            <div className="p-4">
                <p className="text-dark-gray flex items-center"> <FontAwesomeIcon icon={faCalendar} className="w-4 text-green mr-3" /> 21 jul 2024</p>
                <h2 className="text-2xl font-bold my-3">Travelling Along With The Best Accomodation</h2>
                <p  className="text-dark-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque quod dolor illo assumenda at quos, amet eaque cupiditate.</p>
                <div className="flex  flex-wrap md:flex-nowrap justify-between mt-5 border-t border-t-2 border-t-light-gray pt-5">
                    <div className="flex">
                        <Image 
                        width={200}
                        height={200}
                        alt="user"
                        src={'/images/user.jpg'}
                        className="w-[50px] h-[50px] rounded-full mr-3"
                        />
                        <div>
                        <h2 className="text-xl">Aldous Fano</h2>
                        <p className="text-dark-gray">Tourist</p>
                        </div>
                    </div>
                    <button className="text-green w-full md:w-max flex items-center mt-4 md:mt-0">
                        <p className="mr-3">Read more</p> <FontAwesomeIcon icon={faArrowRight} className="w-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}