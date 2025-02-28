import './index.scss';


interface Iprob {
    message: boolean;
    setMessage: (val: boolean) => void;
}
const Message = ({ message, setMessage }: Iprob) => {
    return (
        <div className={`message ${message ? '' : 'hidden'}`}>
            <div className="close">
                <p onClick={() => {
                    setMessage(false)
                }}>X</p>
                <h1>Messages</h1>
            </div>
            <div className="messagesBox">
                <div className="box to">
                    <h3>you</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quo esse sapiente tenetur repudiandae, optio iusto quisquam? Atque ratione eius labore. Maxime animi nam eius. Perspiciatis quam et enim. Ea!</p>
                </div>
                <div className="box from">
                    <h3>Suport</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi quod earum harum eveniet aut quae cum. Inventore explicabo delectus ea totam, quisquam molestiae officia eaque saepe, officiis iure nostrum.</p>
                </div>
                <div className="box to">
                    <h3>you</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quo esse sapiente tenetur repudiandae, optio iusto quisquam? Atque ratione eius labore. Maxime animi nam eius. Perspiciatis quam et enim. Ea!</p>
                </div>
                <div className="box from">
                    <h3>Suport</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi quod earum harum eveniet aut quae cum. Inventore explicabo delectus ea totam, quisquam molestiae officia eaque saepe, officiis iure nostrum.</p>
                </div>
            </div>
            <form className='form'>
                <input type='text' className='text' name="sendmessage" id="sendmessage" required />
                <input className='send'type="submit" value="Send" />
            </form>
        </div>
    )
}
export default Message;