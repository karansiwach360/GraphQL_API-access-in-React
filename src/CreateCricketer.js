import React, {useState} from 'react';

import {useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const CreateCricketer = () => {

    const CREATE_CRICKETER = gql`
        mutation createCricketer($name: String!,$age: Int!) {
            createCricketer(name: $name, age: $age)
            {
                id
                name
                age
                matches
                runs
                wickets
            }
        }
    `;

    const [details,setDetails] = useState({name: "", age: 0});

    const [getCreateCricketer, {data}] = useMutation(CREATE_CRICKETER);

    //console.log(data);

    return (
        <div className="create-cricketer">
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(details.age>0);
                if(details.name.length>0 && details.age>0)
                getCreateCricketer({variables: {name: details.name,
                        age: details.age}}).then(console.log,console.error);
            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={details.name} onChange={(e)=>{
                    console.log(e.target.value)
                    setDetails({...details, name: e.target.value});
                }}></input>
                <label htmlFor="age">Age</label>
                <input type="text" id="age" value={details.age} onChange={(e)=>{
                    setDetails({...details, age: +e.target.value});
                }}></input>
                <button type="submit">Create Cricketer</button>
            </form>
        </div>
    )
}

export default CreateCricketer;