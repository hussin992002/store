import './index.scss'
import Image from 'next/image';
import arrow from '@/app/Svg/arrowDown.svg'
interface Iprob {
    setMessage: (val: boolean) => void;
}
const homePage = ({setMessage}:Iprob) => {
    return (
        <div className="cont homepage">
            <h1>Welcom To Our Store</h1>
            <h2>Here You Can See The News In The Store</h2>
            <h3>we are happy to help you</h3>
            <h3>feel free to contact us</h3>
            <p onClick={()=>{
                setMessage(true)
            }}>Contact Suport <Image src={arrow} alt='loading' /></p>
        </div>
    )
}
export default homePage;