import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import {Header} from '../tailwindcss/style'
import clsx from 'clsx'

export default function(){

    return (
        <div className={clsx(Header.ground)}>
            <div className={clsx(Header.logo)}>
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