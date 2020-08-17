import React, { useEffect, useState } from 'react';

import './../App.css';
import Team from '../components/Team';

const API_KEY = process.env.REACT_APP_FOOTBALL_DATA_API_KEY;

const Teams = () => {

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeams();
  }, []);

  async function fetchTeams() {
    const response = await fetch('http://api.football-data.org/v2/competitions/PL/teams', {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });

    const json = await response.json();
    setLoading(false);
    setTeams(json.teams);
  }

  return (
    <div>
      {
        !loading ? (
          teams.map(team => (
            <Team key={team.id} team={team} />
          ))
        ) : <span className="loading">Loading...</span>
      }
    </div>
  )
};

export default Teams;