import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import github from '../../services/api';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

interface RepositoryParams {
  fullName: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [error, setError] = useState('');
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const populateRepository = (receivedRepo: Repository) => {
    const {
      full_name,
      description,
      forks_count,
      open_issues_count,
      stargazers_count,
      owner: { login, avatar_url },
    } = receivedRepo;

    const repo = {
      full_name,
      description,
      forks_count,
      open_issues_count,
      stargazers_count,
      owner: {
        login,
        avatar_url,
      },
    };
    setRepository(repo);
  };

  const populateIssues = (receivedIssues: Issue[]) => {
    const listIssues = receivedIssues.map(issue => ({
      id: issue.id,
      title: issue.title,
      html_url: issue.html_url,
      user: {
        login: issue.user.login,
      },
    }));
    setIssues(listIssues);
  };

  useEffect(() => {
    const { fullName } = params;

    const repositoryDetails = github.get<Repository>(`/repos/${fullName}`);
    const repositoryIssues = github.get<Issue[]>(`/repos/${fullName}/issues`);

    Promise.all([repositoryDetails, repositoryIssues])
      .then(response => {
        populateRepository(response[0].data);
        populateIssues(response[1].data);
      })
      .catch(() => {
        setError('Repositório não encontrado');
        setRepository(null);
        setIssues([]);
      });
  }, [params]);

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      {repository && (
        <>
          <S.RepositoryInfo>
            <div className="main">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </div>
            <ul>
              <li>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </S.RepositoryInfo>

          <S.Issues>
            {issues.map(issue => (
              <a
                key={issue.id}
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>
                <FiChevronRight size={20} />
              </a>
            ))}
          </S.Issues>
        </>
      )}
    </>
  );
};

export default Repository;
