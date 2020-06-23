import React from 'react';

import gql from "graphql-tag";
import {Query} from "react-apollo";

class GetCricketerDetailsViaName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ""};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value});
        console.log(this.state.name);
    }

    render() {
        const GET_CRICKETER_DETAILS_VIA_NAME_INFO = gql`
            query getCricketerDetailsViaName($cricketerName: String!) {
                getCricketerDetailsViaName(cricketerName: $cricketerName)
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
        return(
            <div className="get-cricketer-details-via-name">
                <form>
                    <label htmlFor="name">Search by Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange}/>
                </form>
                <Query query={GET_CRICKETER_DETAILS_VIA_NAME_INFO} variables={{cricketerName: this.state.name}}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error!</p>;
                        console.log(data);
                        return data.getCricketerDetailsViaName.map((e)=> {
                            return (
                                <p key={e.id}>
                                    {e.name+", "}
                                    {e.age+", "}
                                    {e.matches+", "}
                                    {e.id}
                                <br/>
                            </p>
                            )
                        })
                    }}
                </Query>
            </div>
        )
    }
}

export default GetCricketerDetailsViaName;