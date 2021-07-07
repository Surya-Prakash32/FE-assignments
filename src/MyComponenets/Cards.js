import React from 'react'

export default function Cards(props) {
    // console.log("country in cards",{country})
    return (
        <div>
            {/* {name}
            <img src={flag} alt="" /> */}
            {props.country.name}
            <img src={props.country.flag} alt="" />
        </div>
    )
}
