import React from "react"

export default function Card(props) {
    return (
        <main>
            <div className="card">
            <img className="travel-img" src={props.articleimg}/>
            <div className="info-container">
                <div className="location">
                        <img src="images/location.png"/>
                        <a href="">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <div className="duration">
                        <p><span>{props.dateenter}</span> - <span> {props.dateexit}</span> </p>
                    </div>
                    <p>
                    {props.description}
                    </p>
                </div>
             </div>
        </main>
    )
}