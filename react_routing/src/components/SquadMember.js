import React from 'react';

import './../App.css';

const SquadMember = ({ member }) => (
  <div className="member" key={member.id}>
    <h5>{member.name}</h5>
    <span>{member.role}</span>
    <span>{member.position}</span>
  </div>
);

export default SquadMember;