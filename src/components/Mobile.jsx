import '../css/Mobile.css'

const Mobile = (props) =>{
    return(
        <>
            <div className='parent'>
                <div id='child1'>
                    <img src={props.src} alt='' width='250'/>
                </div>

                <div id='child2'>
                        <h2>{props.name}</h2>
                        <button id='ratings-btn'>4.6★</button>
                        <span>387 Ratings & 29 Reviews</span>
                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                        <ul>
                            <li>{props.f1}</li>
                            <li>{props.f2}</li>
                            <li>{props.f3}</li>
                            <li>{props.f4}</li> 
                            <li>{props.f5}</li>
                        </ul>
                </div>

                <div id='child3'>
                    <div id='price'>
                        <h1>₹{props.price}</h1>
                        <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_9e47c1.png' width='60'/>
                    </div>
                       <div id='max-price'>
                            <p id='ac-price'>₹32,999</p>
                            <span>9% Off</span>
                       </div>

                       <p>Free Delivery</p>
                       <p> Upto ₹16,300 Off on Exchange</p>
                       
                        
                       
                       
                        
                       
                        
                </div>
            </div>
        </>
    );
}

export default Mobile;