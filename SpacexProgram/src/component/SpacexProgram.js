import React from "react";
import SpacexProgramDetails from "./SpacexProgramDetails";
import '../app.css';
import YearFilter from "./YearFilter";


const SpacexProgram = (props) => {

    const yearChangeHandler = (selectYear) => {
        props.year(selectYear);
    };

    const lunchHandler = (success) => {
        props.lunch(success);

    };

    const landHandler = (success) => {
        props.land(success);

    };

    return (
        <div className='body'>
            <YearFilter selectedYear={yearChangeHandler} lunch={lunchHandler} land={landHandler} />
            <SpacexProgramDetails missionData={props.data} />
        </div>
    );
};

export default SpacexProgram;