import styled from 'styled-components';
import { darken } from 'polished';

const mainText = '#3d3d4d';
const secondaryText = '#a8a8b3';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${secondaryText};

    &:hover {
      color: ${darken(0.5, secondaryText)};
    }
  }
`;

export const RepositoryInfo = styled.div`
  margin-top: 4rem;
  .main {
    display: flex;
    img {
      width: 7.5rem;
      height: 7.5rem;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-flow: column;
      justify-content: center;
      margin-left: 1rem;

      strong {
        font-size: 2rem;
        font-weight: 700;
        color: ${mainText};
      }

      p {
        font-size: 1rem;
        color: ${secondaryText};
        margin-top: 0.6rem;
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 2rem;

    li {
      & + li {
        margin-left: 5rem;
      }

      strong {
        display: block;
        font-size: 2rem;
        color: ${mainText};
      }
      span {
        display: block;
        font-size: 1rem;
        color: ${secondaryText};
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 5rem;

  a {
    background: #fff;
    padding: 1rem;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 1rem;
    }

    strong {
      font-size: 1.5rem;
      color: ${mainText};
    }

    p {
      margin-top: 0.5rem;
      font-size: 1rem;
      color: ${secondaryText};
    }

    svg {
      color: ${secondaryText};
    }

    &:hover {
      transform: translateX(1rem);
    }
  }
`;
