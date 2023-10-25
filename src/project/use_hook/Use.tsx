import { ReactElement, use, useEffect, useState } from 'react'
import { getTeamData } from '../../api/api'
import { TeamDataTypes } from '../../types/types';


const Use = (): ReactElement => {
    const teamData = use<TeamDataTypes>(getTeamData);

    return (
        <div>
            {
                teamData.map(value => (
                    <h1 key={value}>{value}</h1>
                ))
            }
        </div>
    )
}

export default Use