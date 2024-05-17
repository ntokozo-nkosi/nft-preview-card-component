import "./NftCard.css"
import Img from "../assets/image-equilibrium.jpg"
import Avatar from "../assets/image-avatar.png"
import ethIcon from "../assets/icon-ethereum.svg"
import clockIcon from "../assets/icon-clock.svg"

function CardImage() {
    return (
        <div className="cardImgContainer">
            <img src={Img} alt="" />
        </div>
    )
}

function CardMainText () {
    return (
        <div className="mainText">
            <h2>Equilibrium #3429</h2>
            <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>      
    )
}

function TransactionInfo() {
    return (
        <div className="transactionInfo">
            <div className="priceBlock">
                <img src={ethIcon} alt="" />
                <p>0.041 ETH</p>
            </div>
            <div className="expiration">
                <img src={clockIcon} alt="" />
                <p>3 days left</p>
            </div>
        </div>
    )
}

function Creator() {
    return (
        <div className="creatorInfo">
            <img src={Avatar} alt="" />
            <p className="creatorName"><span>Creation of </span> Jules Wyvern</p>
        </div>
    )
}

export default function NftCard () {
    return (
        <div className="card">
            <CardImage> </CardImage>
            <CardMainText> </CardMainText>
            <TransactionInfo></TransactionInfo>
            <hr />
            <Creator></Creator>
        </div>
    )
}