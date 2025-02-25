import Image from 'next/image';
import './index.scss';
import loginsvg from '@/app/Svg/login.svg'
import arrow from '@/app/Svg/arrowDown.svg'
import { useState } from 'react';

interface Ibroop {
    content: string;
    setcontent: (val: string) => void;
    sideBar: boolean
    setSideBar: (val: boolean) => void;
}
const NavBar = ({ setcontent, setSideBar, sideBar }: Ibroop) => {
    const [listvisaple, setlist] = useState(false)
    return (
        <div className="nav">
            <h3>NoName Store</h3>
            <div className="links">
                <p onClick={() => setcontent('home')}>Home</p>
                <div className="droplist">
                    <p onClick={() => {
                        setlist(!listvisaple)
                    }}>Games<Image src={arrow} alt='loading' /></p>
                    <div className={`list ${listvisaple ? 'active' : ''}`}>
                        <a href="">hello</a>
                        <a href="">hello</a>
                        <a href="">hello</a>
                    </div>

                </div>
                <p onClick={() => setcontent('about')}>About Us</p>
            </div>
            <div className="login" onClick={() => {
                setSideBar(!sideBar)
            }}>
                <Image src={loginsvg} alt='loading' />
            </div>
        </div>
    )
}
export default NavBar;