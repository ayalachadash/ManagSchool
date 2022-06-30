import react, { useState, useEffect } from 'react';
import Person from './Person';
import { customers } from '../data/CustomersData';
import { emploeeys, subjectes } from '../data/EmploeeyData';
import { candidates } from '../data/Candidates';

export default function ShowPerson(props) {
    const { subject } = props;
    const [showLong, setShowLong] = useState(false);
    const [minAge, setMinAge] = useState(18);
    let [cart, setCart] = useState([]);
    const [showAllCandidates, sethowAllCandidates] = useState(false);
    const [allEmploeeys, setAllEmploeeys] = useState(emploeeys);


    const addToIntreview = (person) => {
        setCart([...cart, person]);
    }
    const lessToIntreview = (person) => {
        let index = cart.indexOf(person)
        debugger;
        const arr1 = cart.slice(0, index);
        const arr2 = cart.slice(index + 1, cart.length);
        const arr3 = arr1.concat(arr2)
        setCart(arr3);
    }

    const changeStatus = () => {
        setShowLong(!showLong);
    }

    const show = () => {
        sethowAllCandidates(!showAllCandidates);
    }

    useEffect(() => {
        let emploeeysChoose = emploeeys.filter(emp => subject ? emp.subject === subject : true);
        setAllEmploeeys(emploeeysChoose);
    }, [subject]);

    return <div>
        <div>

            <label> set your min age: </label>
            <input type="number" value={minAge} min="0" onChange={(e) => setMinAge(e.target.value)} />
            <button onClick={changeStatus}>
                {showLong ? 'hide ' : 'show '}  long from (min age = {minAge})
            </button>

        </div>
        <ul>
            {allEmploeeys
                .filter(innerItem => showLong ? true : innerItem.age > minAge)
                .map(innerItem => <li> <Person person={innerItem} role="emploeey" /> </li>)
            }
        </ul>
        <br />
        <ul>
            {customers
                .filter(innerItem => showLong ? true : innerItem.age > minAge)
                .map(innerItem => <li> <Person person={innerItem} role="customer" /> </li>)
            }
        </ul>
        <br />
        <ul>
            <h4> {cart.length} peoples are invaite for intreview </h4>

            <button onClick={show}>
                press to {showAllCandidates ? 'hide ' : 'show '} all Candidates
            </button>
            {cart
                .filter(innerItem => showAllCandidates ? true : "")
                .map(innerItem => <li> <Person person={innerItem} role="invited" lessToIntreview={lessToIntreview} /></li>)
            }
            <h4> peoples are waiting for intreview </h4>
            {candidates
                .map(innerItem => <li> <Person person={innerItem} role="candidates" addToIntreview={addToIntreview} />  </li>)
            }
        </ul>
    </div>

}
