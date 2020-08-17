import React, { useEffect, useState } from 'react';
import SquadMember from '../components/SquadMember';

const API_KEY = process.env.REACT_APP_FOOTBALL_DATA_API_KEY;

const TeamDetails = ({ match }) => {
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeamDetails();
  }, [match])

  async function fetchTeamDetails() {
    const response = await fetch(`http://api.football-data.org/v2/teams/${match.params.id}`, {
      headers: {
        'X-Auth-Token': API_KEY
      }
    });

    const teamDetails = await response.json();
    setTeam(teamDetails);
    setLoading(false);
  }

  return (
    <>
      {
        !loading ? (
          <div className="team-details-container">
            <div className="team-details-info">
              <div className="team-details-crest">
                <img alt={team.shortName} src={team.crestUrl} />
              </div>
              <div className="team-details">
                <h3 className="name">{`${team.name} (${team.tla})`}</h3>
                <span className="team-short-name">{`Short Name: ${team.shortName}`}</span>
                <span className="venue">{`Venue: ${team.venue}`}</span>
                <span className="team-club-colors">{`Club Colors: ${team.clubColors}`}</span>
                <span className="team-established">{`Established: ${team.founded}`}</span>
              </div>
            </div>
            <div className="team-squad-members-container">
              <h5 className="squad-members-title">squad members</h5>
              <div className="squad-members">
                {
                  team.squad.map(member => (
                    <SquadMember key={member.id} member={member} />
                  ))
                }
              </div>
            </div>
          </div>
        ) : <span className="loading">Loading...</span>
      }
    </>
  );
};

export default TeamDetails;