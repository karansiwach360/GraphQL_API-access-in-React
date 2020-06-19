import React, {useState} from 'react';
import './App.css';

import {useMutation, useQuery, useLazyQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import GetAllCricketers from "./GetAllCricketers";
import GetMostExperienced from "./GetMostExperienced";
import CreateCricketer from "./CreateCricketer";
import GetCricketerDetailsViaName from "./GetCricketerDetailsViaName";

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
    </div>
  );
}

export default App;
