import React, { useState } from "react";

export default function Person(props) {
    const { addToIntreview, lessToIntreview } = props;
    const [isChacked, setIsChacked] = useState(false);
    const onClickEvent = () => {
        if (isChacked == false)
            addToIntreview(props.person);
        setIsChacked(true);
    }
    const onClickDown = () => {

    }
    return <div>
        <p>
            {props.role == "candidates" &&
                <div>
                    <button onClick={() => onClickEvent()}> + </button>
                    <input type="checkbox" disabled='true' checked={isChacked}></input>
                </div>}
            {props.role == "invited" &&
                <button title="The interviewee was not accepted" onClick={() => lessToIntreview(props.person)}> - </button>
            }
            {props.role}:
            firstName: {props.person.firstName}
            . lastName: {props.person.lastName}
            . age: {props.person.age}.
        </p>

    </div>
}