import React from "react";
import { useState, useEffect } from "react";
import SpacexProgram from "./component/SpacexProgram";
import './app.css'

function App() {
  const [missionData, setMissionData] = useState([]);
  const [httpError, setHttpError] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [filteredYear, setFilteredYear] = useState('');
  const [lunchFilter, setLunchFilter] = useState(true);
  const [landFilter, setLandFilter] = useState(true);
  const [url, setUrl] = useState('https://api.spaceXdata.com/v3/launches?limit=100');


  const filteredYearHandler = (year) => {
    setFilteredYear(year);
    setUrl(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${lunchFilter}&la
    nd_success=${landFilter}&launch_year=${year}`);
  };
  const lunchSuccessHandler = (value) => {
    setLunchFilter(value);
    setUrl(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value}&la
    nd_success=${landFilter}&launch_year=${filteredYear}`);
  };
  const landSuccessHandler = (value) => {
    let newValue = value.toString();
    setLandFilter(newValue);
    setUrl(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${lunchFilter}&la
    nd_success=${value}&launch_year=${filteredYear}`);
  };
    
 
  // console.log(url);
  useEffect(() => {
    
    const fetchMission = async () => {
      // if (localStorage.getItem("isRefreshed") === null) {
      //   console.log(url);
      //   setUrl('https://api.spaceXdata.com/v3/launches?limit=100');
      // } else {
      //   var storage= JSON.parse(localStorage.getItem('isRefreshed'));
      //   setUrl(storage);
      //   console.log(storage);
      // }

      const response = await fetch(url);
      // localStorage.setItem('isRefreshed', JSON.stringify(url));

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      if(responseData.length <= 0) {
        setIsEmpty(true);
      }

      setMissionData(responseData);
      setDataLoading(false);
    };
  
    fetchMission().catch((error) => {
      setHttpError(error.message);
      setDataLoading(false);
    });
    localStorage.removeItem('isRefreshed');
  }, [url]);

  return (
      <div className="container">
        <div className='main_heading'>
          <h1 className="page-header">SpaceX Lunch Program</h1>
        </div>
        <div className='main_body'>
          {httpError && <p>{httpError}</p>}
          {dataLoading && <p>Loading ......</p>}
          {isEmpty && <p>No Data Found</p>}
          {!httpError && !dataLoading &&  <SpacexProgram data={missionData} year={filteredYearHandler} lunch={lunchSuccessHandler} land={landSuccessHandler} /> }
        </div>
      </div>
  );
}

export default App;
