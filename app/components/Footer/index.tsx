import './index.scss';
import message from '@/app/Svg/message.svg'
import order from '@/app/Svg/order.svg'
import Image from 'next/image';
const Footer = () => {
    return (
        <div className="footer">
            <Image className='img' src={message} alt='loading' />
            <Image className='img' src={order} alt='loading' />
        </div>
    )
}
export default Footer;