import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import {Header} from '../tailwindcss/style'
import clsx from 'clsx'
import { useNavigate } from "react-router-dom";

export default function(){
const navigate = useNavigate()
    return (
        <div className={clsx(Header.ground)}>
            <div
            onClick={()=>{navigate('/')}} 
            className={clsx(Header.logo)}>
                DevDocs
            </div>
            <div className={clsx(Header.right)}>
                <ul className={clsx(Header.ul)}>
                    <li className={clsx(Header.li)}>
                        <FaInstagram />
                    </li>
                    <li className={clsx(Header.li)}>
                        <FaLinkedin />
                    </li>
                    <li className={clsx(Header.li)}>
                        <IoIosGlobe />
                    </li>
                </ul>
            </div>
        </div>
    )
}