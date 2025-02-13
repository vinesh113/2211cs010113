import React from 'react';
import Profile from './Profile';

const IntermediateComponent = ({ user }) => {
  return <Profile user={user} />;
};

export default IntermediateComponent;
