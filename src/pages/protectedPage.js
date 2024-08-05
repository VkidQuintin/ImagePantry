import React from 'react';
import withAuth from '../components/withAuth';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Protected Page</h1>
      <p>This page is protected and requires authentication.</p>
    </div>
  );
};

export default withAuth(ProtectedPage);
