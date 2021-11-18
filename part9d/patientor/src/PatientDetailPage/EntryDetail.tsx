import React from "react";
import { Entry } from "../types";

interface Props {
    entry: Entry; 
}

const EntryDetail: React.FC<Props> = ({entry}) => {
    return(
        <>
            <p>{entry.date} {entry.description}</p>
            <ul>
                {entry.diagnosisCodes?.map(d => <li key={d}>{d}</li>)}
            </ul>
        </>
    );
};

export default EntryDetail;