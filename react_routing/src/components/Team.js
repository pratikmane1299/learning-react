import React from 'react';
import { Link } from 'react-router-dom';

import './../App.css';

const Team = ({ team }) => (
  <div className="team-card" key={team.id}>
    <div className="team-info-line">
      <div className="team-crest">
        <img alt={team.shortName} src={team.crestUrl} />
      </div>
      <div className="team-info">
        <Link to={`/teams/${team.id}`} className="name">{`${team.name} (${team.tla})`}</Link>
        <p className="venue">Venue: {team.venue}</p>
      </div>
    </div>
  </div>
);

export default Team;