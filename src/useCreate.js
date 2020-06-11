import React, {useEffect, useState} from 'react';

import { useQuery,useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";


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

const useCreate = ({ name, age, chk1 }) => {
    const [useCreate, {createData}] = useMutation(CREATE_CRICKETER, {
        variables: { name: name, age: age }
    });
    console.log(createData);
    return (
        <p></p>
    );
};

export default useCreate;