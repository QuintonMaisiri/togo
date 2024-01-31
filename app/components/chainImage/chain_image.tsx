import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
export default function ChainImage(){
    return (
        <div className="w-[220px] h-[50px]">
            <Image 
            width={70}
            height={30}
            alt="user"
            className="rounded-full border border-white h-[50px] w-[50px] absolute"
            src={'/images/user.jpg'}
            />
            <Image 
            width={70}
            height={30}
            alt="user"
            className="rounded-full border border-white h-[50px] w-[50px] absolute left-[50px] md:left-[150px] "
            src={'/images/user.jpg'}
            />
            <Image 
            width={70}
            height={30}
            alt="user"
            className="rounded-full border border-white h-[50px] w-[50px] absolute left-[90px] md:left-[190px]"
            src={'/images/user.jpg'}
            />
            <Image 
            width={70}
            height={30}
            alt="user"
            className="rounded-full border border-white h-[50px] w-[50px] absolute left-[130px] md:left-[230px]"
            src={'/images/user.jpg'}
            />
            <div className="rounded-full border border-white h-[50px] w-[50px] absolute left-[170px] md:left-[270px] bg-yellow flex items-center justify-center">
                <FontAwesomeIcon icon={faPlus} className="text-green w-2" />
            </div>
        </div>
    )
}