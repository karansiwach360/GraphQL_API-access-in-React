import React, {useState} from 'react';

import {useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const GetMostExperienced = () => {

    const GET_MOST_EXPERIENCED_CRICKETER_INFO = gql`
        query getMostExperienced{
            getMostExperienced{
                age
                matches
                name
                id
                runs
                wickets
            }
        }
    `;


    const [getMostExperienced,{data, loading, error}] = useLazyQuery(GET_MOST_EXPERIENCED_CRICKETER_INFO,
        {fetchPolicy: "network-only"});

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error!</p>;

    //console.log(data);

    return (
        <div className="get-most-experienced-cricketer">
            <form onSubmit={(event)=>{
                event.preventDefault();
                getMostExperienced();
                console.log(data);
                if(data && data.getMostExperienced) console.log(typeof data.getMostExperienced);
            }}>
                <button type="submit">Get The Most Experienced Cricketer</button>
            </form>
            {(data && data.getMostExperienced)?

                        <p key={data.getMostExperienced.id}>
                            {data.getMostExperienced.name+", "}
                            {data.getMostExperienced.age+", "}
                            {data.getMostExperienced.matches+", "}
                            {data.getMostExperienced.id}
                            <br/>
                        </p>
                :null
            }
        </div>
    )
}

export default GetMostExperienced;