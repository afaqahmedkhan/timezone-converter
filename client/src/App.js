import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import './App.css';

function App() {

  const [listTz, setListTz] = useState([]);
  const [optionsTz, setOptionsTz] = useState([]);
  const [timeZone, setTimeZone] = useState({value:'Africa/Abidjan'});
  useEffect(() => {
    axios.get(`http://localhost:3000/load-timezones`)
      .then(res => {
        setListTz(res);
        let tzNames = res.data && res.data.map((tz, i) => {
          return (
            <option key={i} value={tz.name}>{tz.name}</option>
          )
        }, this);
        console.log(tzNames);
        console.log('tzNames', tzNames);
        setOptionsTz(tzNames);
      })
  }, []);

  const renderDateTime = (timeZone) => {
    return <h3>It is {moment().tz(timeZone.value).format('LTS')} {timeZone.value}.</h3>;
  }

  const onChange = (event) => {
    setTimeZone({value: event.target.value});
  }

  return (
    <div className="App">
			{renderDateTime(timeZone)}
      <select onChange={onChange} value={timeZone}>
        {optionsTz}
      </select>
    </div>
  );
}

export default App;
