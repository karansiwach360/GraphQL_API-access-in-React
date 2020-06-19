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
            }}>
                <button type="submit">Get The Most Experienced Cricketer</button>
            </form>
            {(data && data.getMostExperienced)?
                (data.getMostExperienced.map((e) => {

                    return (
                        <p key={e.id}>
                            {e.name+", "}
                            {e.age+", "}
                            {e.matches+", "}
                            {e.id}
                            <br/>
                        </p>
                    )
                })):((data)?<p>Atleast let them play one match!</p>:null)}
        </div>
    )
}

export default GetMostExperienced;