import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form>
        <S.SearchInput type="text" placeholder="Digite o nome do repositório" />
        <S.SearchButton type="submit">Pesquisar</S.SearchButton>
      </S.Form>

      <S.Repositories>
        <a
          href="https://github.com/ricardoaruiz/gostack2020-N03A01-github-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars2.githubusercontent.com/u/8824363?s=400&u=1dab04b6df0098023ea8ac47c9946d606e6231d0&v=4"
            alt="Repository Owner"
          />
          <div>
            <strong>ricardoaruiz/repoteste</strong>
            <p>Repositório para testes de aplicações...</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a
          href="https://github.com/ricardoaruiz/gostack2020-N03A01-github-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars2.githubusercontent.com/u/8824363?s=400&u=1dab04b6df0098023ea8ac47c9946d606e6231d0&v=4"
            alt="Repository Owner"
          />
          <div>
            <strong>ricardoaruiz/repoteste</strong>
            <p>Repositório para testes de aplicações...</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a
          href="https://github.com/ricardoaruiz/gostack2020-N03A01-github-explorer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://avatars2.githubusercontent.com/u/8824363?s=400&u=1dab04b6df0098023ea8ac47c9946d606e6231d0&v=4"
            alt="Repository Owner"
          />
          <div>
            <strong>ricardoaruiz/repoteste</strong>
            <p>Repositório para testes de aplicações...</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </S.Repositories>
    </>
  );
};

export default Dashboard;
