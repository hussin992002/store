import './index.scss';

interface iprob{
    setOrder:(val:boolean)=>void;
}
const Order = ({setOrder}:iprob) => {
    function pross() {
        return (
            <div className="pross">
                <div className="box">
                    <p>1</p>
                    <p className='time'>1 min</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eligendi ratione nulla veniam earum mollitia sapiente eveniet possimus nam, minima dolores, voluptatum excepturi commodi eaque. Illo ad aspernatur corporis tempora!</p>
                </div>
                <div className="box">
                    <p>1</p>
                    <p className='time'>1 min</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eligendi ratione nulla veniam earum mollitia sapiente eveniet possimus nam, minima dolores, voluptatum excepturi commodi eaque. Illo ad aspernatur corporis tempora!</p>
                </div>
                <div className="box">
                    <p>1</p>
                    <p className='time'>1 min</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eligendi ratione nulla veniam earum mollitia sapiente eveniet possimus nam, minima dolores, voluptatum excepturi commodi eaque. Illo ad aspernatur corporis tempora!</p>
                </div>
                <div className="box">
                    <p>1</p>
                    <p className='time'>1 min</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, eligendi ratione nulla veniam earum mollitia sapiente eveniet possimus nam, minima dolores, voluptatum excepturi commodi eaque. Illo ad aspernatur corporis tempora!</p>
                </div>
            </div>
        )
    }
    return (
        <div className="order">
            <div className="close">
                <p onClick={()=>{
                    setOrder(false)
                }}>X</p>
                <h1>Orders</h1>
            </div>
            <div className="orders">
                <div className="ordertext">
                    <h2>Prossising</h2>
                    <h2>Done</h2>
                </div>
                {pross()}
            </div>
        </div>
    )
}
export default Order