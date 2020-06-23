import React, {useState} from 'react';

import {useMutation} from '@apollo/react-hooks';
import gql from "graphql-tag";

const UpdateCricketer = () => {

    const UPDATE_CRICKETER = gql`
        mutation updateCricketer($id: ID!, $runs: Int!, $wickets: Int!){
            updateCricketer(id: $id, runs: $runs, wickets: $wickets){
                id
                name
                age
                matches
                runs
                wickets
            }
        }
    `;

    const [details,setDetails] = useState({id: "", runs: 0, wickets: 0});

    const [getUpdateCricketer, {data}] = useMutation(UPDATE_CRICKETER);


    return (
        <div className="create-cricketer">
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(details.runs>0);
                if(details.id.length>0 && details.runs>=0 && details.wickets>=0)
                    getUpdateCricketer({variables: {id: details.id,
                            runs: details.runs, wickets:details.wickets}}).then(console.log,console.error);
            }}>
                <label htmlFor="id">Id</label>
                <input type="text" id="id" value={details.id} onChange={(e)=>{
                    console.log(e.target.value)
                    setDetails({...details, id: e.target.value});
                }}></input>
                <label htmlFor="runs">Runs</label>
                <input type="text" id="runs" value={details.runs} onChange={(e)=>{
                    setDetails({...details, runs: +e.target.value});
                }}></input>
                <label htmlFor="wickets">Wickets</label>
                <input type="text" id="wickets" value={details.wickets} onChange={(e)=>{
                    setDetails({...details, wickets: +e.target.value});
                }}></input>
                <button type="submit">Update Cricketer</button>
            </form>
        </div>
    )
}

export default UpdateCricketer;