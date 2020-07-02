import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  fullName: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <h1>
      Repository:
      {params.fullName}
    </h1>
  );
};

export default Repository;
