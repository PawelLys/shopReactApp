import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorCatch = () => {
  return (
    <div>
      404 page doesn't exist
      <Link to="/">Go back</Link>
    </div>
  );
};
