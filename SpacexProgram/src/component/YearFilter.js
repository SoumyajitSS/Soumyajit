import React from "react";
import '../app.css';

const YearFilter = (props) => {
    const yearSelectHandler = (event)=> {
        event.preventDefault();
        props.selectedYear(event.target.value);
    };
    const SuccessLunchHandler = (event)=> {
        event.preventDefault();
        props.lunch(event.target.value);
    };
    const SuccessLandHandler = (event)=> {
        event.preventDefault();
        props.land(event.target.value);
    };

    return (
        <div className='filter'>
            <h2>Filter</h2>
            <h3>Lunch Year</h3>
            <div className='btn_group'>
            <button onClick={yearSelectHandler} value='2006' className='btn' >2006</button>
            <button onClick={yearSelectHandler} value='2007' className='btn'  >2007</button>
            <button onClick={yearSelectHandler} value='2008' className='btn'  >2008</button>
            <button onClick={yearSelectHandler} value='2009' className='btn'  >2009</button>
            <button onClick={yearSelectHandler} value='2010' className='btn'  >2010</button>
            <button onClick={yearSelectHandler} value='2011' className='btn'  >2011</button>
            <button onClick={yearSelectHandler} value='2012' className='btn'  >2012</button>
            <button onClick={yearSelectHandler} value='2013' className='btn'  >2013</button>
            <button onClick={yearSelectHandler} value='2014' className='btn'  >2014</button>
            <button onClick={yearSelectHandler} value='2015' className='btn'  >2015</button>
            <button onClick={yearSelectHandler} value='2016' className='btn'  >2016</button>
            <button onClick={yearSelectHandler} value='2017' className='btn'  >2017</button>
            <button onClick={yearSelectHandler} value='2018' className='btn'  >2018</button>
            <button onClick={yearSelectHandler} value='2019' className='btn'  >2019</button>
            <button onClick={yearSelectHandler} value='2020' className='btn'  >2020</button>
            </div>
            <h3>Successfull Lunch</h3>
            <div className='btn_group'>
            <button onClick={SuccessLunchHandler} value='true' className='btn'  >True</button>
            <button onClick={SuccessLunchHandler} value='false' className='btn'  >False</button>
            </div>
            <h3>Successfull Landing</h3>
            <div className='btn_group'>
            <button onClick={SuccessLandHandler} value='true' className='btn'  >True</button>
            <button onClick={SuccessLandHandler} value='false' className='btn'  >False</button>
            </div>
        </div>
    );
};

export default YearFilter;