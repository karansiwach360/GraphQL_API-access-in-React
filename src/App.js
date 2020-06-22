import React, {useState} from 'react';
import './App.css';

import {useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import GetAllCricketers from "./GetAllCricketers";
import GetMostExperienced from "./GetMostExperienced";
import CreateCricketer from "./CreateCricketer";
import GetCricketerDetailsViaName from "./GetCricketerDetailsViaName";
import UpdateCricketer from "./UpdateCricketer";

function App() {
  return (
    <div className="App">
      <GetAllCricketers />
      <br/>
      <GetMostExperienced />
      <br/>
      <GetCricketerDetailsViaName />
      <br/>
      <br/>
      <CreateCricketer />
      <br/>
      <UpdateCricketer />
    </div>
  );
}

export default App;
