import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import github from '../../services/api';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleRepositoryChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRepository(event.target.value);
  };

  const addNewRepository = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    github
      .get<Repository>(`/repos/${repository}`)
      .then(response => {
        const { data } = response;
        const repo = {
          full_name: data.full_name,
          description: data.description,
          html_url: data.html_url,
          owner: {
            login: data.owner.login,
            avatar_url: data.owner.avatar_url,
          },
        };
        setRepositories([...repositories, repo]);
        setRepository('');
      })
      .catch(error => console.error(error));
  };

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <S.Title>Explore repositórios no Github</S.Title>

      <S.Form onSubmit={addNewRepository}>
        <S.SearchInput
          type="text"
          placeholder="Digite o nome do repositório"
          value={repository}
          onChange={handleRepositoryChange}
        />
        <S.SearchButton type="submit" disabled={!repository}>
          Pesquisar
        </S.SearchButton>
      </S.Form>

      <S.Repositories>
        {repositories.map(repo => (
          <a
            key={repo.full_name}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
