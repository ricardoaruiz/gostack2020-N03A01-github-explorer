import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface RepositoryParams {
  fullName: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>
      <S.RepositoryInfo>
        <div className="main">
          <img
            src="https://avatars2.githubusercontent.com/u/8824363?s=400&u=1dab04b6df0098023ea8ac47c9946d606e6231d0&v=4"
            alt="Repository owner"
          />
          <div>
            <strong>ricardoaruiz/repo01</strong>
            <p>Descrição do repo 01</p>
          </div>
        </div>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stard</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to="ddddd">
          <div>
            <strong>Title</strong>
            <p>Owner</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="ddddd">
          <div>
            <strong>Title</strong>
            <p>Owner</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
        <Link to="ddddd">
          <div>
            <strong>Title</strong>
            <p>Owner</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </S.Issues>
    </>
  );
};

export default Repository;
