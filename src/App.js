import React, {useEffect, useState} from 'react';

import {useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
//import {useCreate} from './useCreate';

function App() {

    const [chk,setChk] = useState(false);
    const [name,setName] = useState(false);
    const [age,setAge] = useState(false);
    const [matches,setMatches] = useState(false);
    const [runs,setRuns] = useState(false);
    const [wickets,setWickets] = useState(false);
    const [res,setRes] = useState({});
    //const [name,setName] = useState(false);
    const [createName,setCreateName] = useState("");
    const [createAge,setCreateAge] = useState(0);
    const [chk1,setChk1] = useState(false);

    // const GET_ALL_CRICKETERS_INFO = gql`
    //     query{
    //         getAllCricketers{
    //             age
    //             matches
    //             name
    //             id
    //             runs
    //             wickets
    //         }
    //     }
    // `

    const GET_ALL_CRICKETERS_INFO = gql`
        query getAllCricketers{
            getAllCricketers{
                age
                matches
                name
                id
                runs
                wickets
            }
        }
    `

    //const [getAllCricketers,{ data, loading,error }] = useLazyQuery(GET_ALL_CRICKETERS_INFO);
    //var z=false;
    const {data,loading,error} = useQuery(GET_ALL_CRICKETERS_INFO);
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


    const [getCreate, createData] = useMutation(CREATE_CRICKETER);
    console.log("Again!");
    if(loading) return <p>Loading</p>;
    if(error) return <p>Error</p>;



    //const
    // let queryString;
    // // const { data, loading, error } = useQuery(queryString);
    // // if(loading) return <p>Loading</p>;
    // // if(error) return <p>Error</p>;p
    // useEffect(()=>{
    //     queryString
    // },[queryString]);
    // const requestCricketers = (event) => {
    //     let helperString = "id,";
    //     helperString+= (name)?'name,':'';
    //     helperString+= (age)?'age,':'';
    //     helperString+= (matches)?'matches,':'';
    //     helperString+= (runs)?'runs,':'';
    //     helperString+= (wickets)?'wickets,':'';
    //     helperString=helperString.substr(0,helperString.length-1);
    //     console.log(helperString);
    //     const stringQuery=gql`query{getAllCricketers{${helperString}}}`;
    //     //queryString=stringQuery;
    //     //console.log(queryString);
    //     //const GET_ALL_CRICKETERS_INFO =gql;
    //     //console.log(GET_ALL_CRICKETERS_INFO);
    //
    // };
    return (
        <div className="cricketers">
            <div className="get-all-cricketers">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="checkbox" id="name" checked={name} onChange={(event)=>{
                        //console.log(event);
                        //console.log(Boolean(event.target.value));
                        //setName(Boolean(event.target.value));
                        //console.log(event.target.checked)
                        setName(event.target.checked);
                        //getAllCricketers();
                        console.log(name);
                        setChk(true);
                        //console.log(event.target.checked);
                    }}/>
                    <br/>
                    <label htmlFor="age">Age</label>
                    <input type="checkbox" id="age" checked={age} onChange={(event)=>{
                        setAge(event.target.checked);
                        //getAllCricketers();
                        setChk(true);
                    }}/>
                    <br/>
                    <label htmlFor="matches">Matches</label>
                    <input type="checkbox" id="matches" checked={matches} onChange={(event)=>{

                        setMatches(event.target.checked);
                        //getAllCricketers();
                        setChk(true);

                    }}/>
                    <br/>
                    <label htmlFor="runs">Runs</label>
                    <input type="checkbox" id="runs" checked={runs} onChange={(event)=>{
                        setRuns(event.target.checked);
                        //getAllCricketers();
                        setChk(true);
                    }}/>
                    <br/>
                    <label htmlFor="wickets">Wickets</label>
                    <input type="checkbox" id="wickets" checked={wickets} onChange={(event)=>{
                        setWickets(event.target.checked);
                        //getAllCricketers();
                        setChk(true);
                    }}/>
                    <br/>
                    {/*<button type="submit">Submit</button>*/}
                </form>
                {(chk)?
                    (data.getAllCricketers.map((e) => {

                        return (
                            <p key={e.id}>
                                {name?e.name+", ":null}
                                {age?e.age+", ":null}
                                {matches?e.matches+", ":null}
                                {runs?e.runs+", ":null}
                                {wickets?e.wickets+", ":null}
                                {e.id}
                                <br/>
                            </p>
                        )
                    })):null}
            </div>
            <div className="create-cricketer">
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    getCreate({variables: {name: createName,age: createAge}});
                    setChk1(true);
                    //console.log(createData.client.cache.data);
                    //useCreate({variables: {name,age}});
                }}>
                    <label htmlFor="createName">Name</label>
                    <input type="text" id="createName" value={createName} onChange={(e)=>{
                        setCreateName(e.target.value);
                    }}></input>
                    <label htmlFor="createAge">Age</label>
                    <input type="text" id="createAge" value={createAge} onChange={(e)=>{
                        setCreateAge(e.target.value);
                    }}></input>
                    <button type="submit">Create Cricketer</button>
                </form>

                {/*{(createData.loading || )}*/}
                {/*{(chk1)?*/}
                {/*    (createData.data.createCricketer.map((e) => {*/}

                {/*        return (*/}
                {/*            <p key={e.id}>*/}
                {/*                {name?e.name+", ":null}*/}
                {/*                {age?e.age+", ":null}*/}
                {/*                {matches?e.matches+", ":null}*/}
                {/*                {runs?e.runs+", ":null}*/}
                {/*                {wickets?e.wickets+", ":null}*/}
                {/*                {e.id}*/}
                {/*                <br/>*/}
                {/*            </p>*/}
                {/*        )*/}
                {/*    })):null}*/}

            </div>
        </div>
    );
}

export default App;
