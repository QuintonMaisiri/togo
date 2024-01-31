import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="py-10 px-4 md:p-20 md:px-28 bg-teal text-white">
            <div className="flex flex-wrap md:flex-nowrap justify-between">
                <div className="w-full md:w-2/5 mr-10">
                    <h2 className="font-bold text-lg mb-5 flex items-center" >
                        <Image
                            alt="logo"
                            height={50}
                            width={50}
                            src={"/images/logo.png"}
                        />
                        Togo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima hic accusantium aut aperiam velit!</p>
                    <h2 className="mt-5 font-bold text-lg">Follow us</h2>
                    <div className="flex py-4">

                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                            fill="#000000">
                            <g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" ><g transform="scale(5.12,5.12)"><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path></g></g>
                        </svg>
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                            fill="#000000">
                            <g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
                        </svg>
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" fill="#FFFFFF" height="20" viewBox="0 0 50 50">
                            <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                        </svg>
                        <svg className="mr-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                        >
                            <g fill="#ffffff" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" ><g transform="scale(5.12,5.12)"><path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path></g></g>
                        </svg>
                    </div>
                </div>
                <div className="w-full md:w-1/5 mt-5 mr-10 text-sm">
                    <h2 className="font-bold text-lg mb-5">Quick Link</h2>
                    <ul>
                        <li className="mb-5">Home</li>
                        <li className="mb-5">About</li>
                        <li className="mb-5" >Tour</li>
                        <li className="mb-5">Blogs</li>
                        <li className="mb-5">Host</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5 mt-5 mr-10 text-sm">
                    <h2 className="font-bold text-lg mb-5">Contact Us</h2>
                    <ul>
                        <li className="mb-5 flex items-center"> <FontAwesomeIcon icon={faPhone} className="w-4 mr-3" />+263 776 441 883</li>
                        <li className="mb-5 flex items-center"> <FontAwesomeIcon icon={faEnvelope} className="w-4 mr-3" /> maisiriquinton@gmail.com</li>
                        <li className="mb-5 flex items-center"> <FontAwesomeIcon icon={faLocationDot} className="w-5 mr-3" /> New green road 123NV street #4 Marondera Zimbabwe</li>
                    </ul>
                </div>
                <div className="w-full md:w-1/5 mt-5 mr-10 text-sm">
                    <h2 className="font-bold text-lg mb-5">Gallery</h2>
                    <div className="grid grid-cols-3 gap-y-3">
                        <Image
                            alt="picture"
                            width={100}
                            height={100}
                            src={"/images/about2.jpg"}
                            className="w-[50px] h-[50px]"
                        />
                        <Image
                            alt="picture"
                            width={100}
                            height={100}
                            src={"/images/about2.jpg"}
                            className="w-[50px] h-[50px]"
                        />
                        <Image
                            alt="picture"
                            width={100}
                            height={100}
                            src={"/images/about2.jpg"}
                            className="w-[50px] h-[50px]"
                        />
                        <Image
                            alt="picture"
                            width={100}
                            height={100}
                            src={"/images/about2.jpg"}
                            className="w-[50px] h-[50px]"
                        />
                        <Image
                            alt="picture"
                            width={100}
                            height={100}
                            src={"/images/about2.jpg"}
                            className="w-[50px] h-[50px]"
                        />
                        <Image
                            alt="picture"
                            width={100}
                            height={100}
                            src={"/images/about2.jpg"}
                            className="w-[50px] h-[50px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}