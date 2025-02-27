import './index.scss';

const Roblox = () => {
    return (
        <div className="cont roblox">
            <div className="text">
                <h1>Why Us ?</h1>
                <p>
                    You Can Buy Here Without Puting Extra Money
                </p>
                <p>
                    You Can Pre Order What You Want And When You Want
                </p>
                <p>
                    You Can Talk to Us Any Time And Ask About Any Thing
                </p>
                <p>
                    You Can Buy Accounts With Robox In It
                </p>
            </div>
            <div className="order">
                <div className="orderText">
                    <h1>Order Now</h1>
                    <div className="textBox">
                        <h2 className='clicked'>Robox</h2>
                        <h2>Accounts</h2>
                    </div>
                </div>
                <form >
                    <div className="box">
                        <label htmlFor="amount">How Much?</label>
                        <input type="text" id='amount' name='amount' required />
                    </div>
                    <div className="whenbox">
                        <h3>When?</h3>
                        <div className="bigBox">
                            <div className="box1">
                                <input type='radio' name='when' id='now' required />
                                <label className='clicked' htmlFor="now">Now</label>
                            </div>
                            <div className="box1">
                                <input type='radio' name='when' id='12' required />
                                <label htmlFor="12">After 12h</label>
                            </div>
                            <div className="box1">
                                <input type='radio' name='when' id='24' required />
                                <label htmlFor="24">After 24h</label>
                            </div>
                        </div>

                    </div>
                    <div className="box">
                        <textarea className='T' name="more" placeholder='Any Thing Want to Say ?' />
                    </div>
                    <input className='send' type="submit" value="Order" />
                </form>
            </div>
        </div>
    )
}
export default Roblox;