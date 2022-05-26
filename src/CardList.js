import React, { Fragment } from "react";
import Card from "./Card";


export default function CardList({list}) {
    return (
        <Fragment>
            <div>
                {createList(list)}
            </div>

        </Fragment>
    );
}

const createList = (list) => {
    if(list.length !== 0) {
        return list.map(({ name, email, src }) => {
            return <Card name={name} email={email} src={src} key={name} />;
        });
    }


}