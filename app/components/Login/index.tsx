
import Image from 'next/image';
import './index.scss'
import arrowUp from '@/app/Svg/arrowUp.svg'
import { useState } from 'react';
interface Iprob {
    sideBar: boolean
    setSideBar: (val: boolean) => void;
}


const LoginSide = ({ sideBar, setSideBar }: Iprob) => {
    const [side, setSide] = useState('log')
    const [inOut, setInOut] = useState('')
    function log() {
        return (
            <>
                <div className="login">
                    <div className="text">
                        <p className='close' onClick={() => {
                            setSideBar(false)
                        }}>X</p>

                        <h2>Login</h2>
                    </div>
                    <form>
                        <div className="email box">
                            <label htmlFor="">Email</label>
                            <input type="email" required />
                        </div>
                        <div className="password box">
                            <label htmlFor="">Password</label>
                            <input type="password" required />
                        </div>
                        <input type="submit" value="Login" />
                    </form>
                    <p onClick={async () => {
                        setSide('black')
                        setInOut('in')
                        setTimeout(() => {
                            setInOut('out')
                        }, 1000);
                        setTimeout(() => {
                            setSide('signup')
                            console.log('up')
                        }, 1200);

                    }} className='signup'>Creat Acc <Image src={arrowUp} alt='loading' /></p>
                </div>



            </>
        )
    }
    function blackScreen() {
        if (inOut === 'in') {
            return (
                <div className="blackin">
                </div>
            )
        }
        else if (inOut === 'out') {
            return (
                <div className="blackout">
                </div>
            )
        }
    }
    function signUp() {
        return (
            <>
                <form className='signup'>
                    <p className='close' onClick={() => {
                        setSideBar(false)
                    }}>X</p>
                    <h2>SignUp</h2>
                    <div className="box username">
                        <label htmlFor="username">User Name</label>
                        <input type="text" name="username" required />
                    </div>
                    <div className="box email">
                        <label htmlFor="email">Email</label>
                        <input type="Email" name="email" required />
                    </div>
                    <div className="box pass">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" required />
                    </div>
                    <input type="submit" value="SignUp" />
                </form>
                <p onClick={async () => {
                    setSide('black')
                    setInOut('in')
                    setTimeout(() => {
                        setInOut('out')
                    }, 1000);
                    setTimeout(() => {
                        setSide('signup')
                        console.log('up')
                    }, 1200);

                }} className='signup'>Login<Image src={arrowUp} alt='loading' /></p>
            </>
        )
    }
    function Side() {
        if (side === 'log') {
            return (
                log()

            )
        } if (side === 'black') {
            return (
                blackScreen()
            )
        } if (side === 'signup') {
            return (
                signUp()
            )
        }
    }
    return (
        <div className={`side ${sideBar ? '' : 'hidden'} `}>
            {Side()}
        </div>
    )
}
export default LoginSide;