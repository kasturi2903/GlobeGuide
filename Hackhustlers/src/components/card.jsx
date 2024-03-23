import './card.css'

const Card=({imgurl,hotel_name,new_price})=>{

    return (
        <>
        <div className="card">
           <div className="row1">
            <img src={imgurl} alt="" />
           </div>
           <div className="row2">

            <h5>{hotel_name}</h5>
            <p>Price:  ${new_price}</p>
            <button className="buy-button">Book Now</button>
           </div>
        </div>

        </>
    )
}
export default Card;