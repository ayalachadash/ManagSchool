import react, { useState, useEffect } from 'react';
import { subjectes } from '../data/EmploeeyData';
import ShowPerson from '../components/ShowPerson';

export default function SortHeader() {
    const [subject, setSubject] = useState(subjectes[0]);
    return <div>
        <select onChange={e => setSubject(e.target.value)}>
            {subjectes.map(s => <option value={s}>{s || "all emploeey"}</option>)}
        </select>
        <ShowPerson subject={subject} />
    </div>
}