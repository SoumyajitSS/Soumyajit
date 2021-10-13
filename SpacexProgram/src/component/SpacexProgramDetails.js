import React from "react";
import MissionDetails from "./MissionDetails";
import { v4 as uuid_v4 } from "uuid";
import '../app.css';

const SpacexProgramDetails = (props) => {


    return (
        <ul>
            {props.missionData.map((mission) => (
                <MissionDetails 
                    key={uuid_v4()}
                    id={mission.mission_id} 
                    name={mission.mission_name} 
                    year={mission.launch_year} 
                    lunch={mission.launch_success.toString()} 
                    land={mission.rocket.first_stage.cores[0].land_success} 
                    image={mission.links.mission_patch} 
                />
            ))}
        </ul>
    );
};
export default SpacexProgramDetails;
