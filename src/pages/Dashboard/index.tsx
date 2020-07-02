import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiXOctagon } from 'react-icons/fi';

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
  const [error, setError] = useState('');
  const [repository, setRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    if (!repository) {
      setError('');
    }
  }, [repository]);

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
        const {
          full_name,
          description,
          html_url,
          owner: { login, avatar_url },
        } = response.data;

        const repo = {
          full_name,
          description,
          html_url,
          owner: {
            login,
            avatar_url,
          },
        };
        setRepositories([...repositories, repo]);
        setRepository('');
        setError('');
      })
      .catch(() => setError('Repositório informado não encontrado.'));
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
          hasError={!!error}
          onChange={handleRepositoryChange}
        />
        <S.SearchButton
          type="submit"
          disabled={!repository}
          className={error && 'error'}
        >
          Pesquisar
        </S.SearchButton>
      </S.Form>

      {error && (
        <S.Error>
          <FiXOctagon size={30} />
          <p>{error}</p>
        </S.Error>
      )}

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
