import './index.scss';
import message from '@/app/Svg/message.svg'
import order from '@/app/Svg/order.svg'
import Image from 'next/image';

interface Iprob {
    setMessage: (val: boolean) => void;
    setOrder: (val: boolean) => void
}

const Footer = ({setMessage,setOrder}:Iprob) => {
    return (
        <div className="footer">
            <Image  onClick={()=>{
                setMessage(true)
            }}className='img' src={message} alt='loading' />
            <Image  onClick={()=>{
                setOrder(true)
            }}className='img' src={order} alt='loading' />
        </div>
    )
}
export default Footer;