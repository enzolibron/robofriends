import React, { Fragment } from "react";


const Card = ({ name, email, src }) => {
    return (
        <Fragment>
            <div className="p1 dib ma1 ba bg-dark-blue tc white br4 dim">
                <img alt="robo" src={src}></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;