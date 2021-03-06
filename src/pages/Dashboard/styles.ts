import styled, { css } from 'styled-components';
import { darken } from 'polished';

const primaryColor = '#04d361';
const maxWidth = '44rem';

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  margin-top: 5rem;
  max-width: 28rem;
  line-height: 3.5rem;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 2.5rem;
`;

interface SearchInputProps {
  hasError: boolean;
}

export const SearchInput = styled.input<SearchInputProps>`
  padding: 0.5rem;
  flex: 1;
  border-radius: 5px 0 0 5px;
  font-size: 1.2rem;
  color: #333;
  height: 4rem;

  ${props =>
    props.hasError
      ? css`
          border: 1px solid #c53030;
          border-right: none;
        `
      : css`
        border: 1px solid ${primaryColor}}
        border-right: none;
      `}

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const SearchButton = styled.button`
  background: ${primaryColor};
  border: 1px solid ${primaryColor};
  width: 12rem;
  padding: 0 0.5rem;
  color: #fff;
  border-radius: 0 5px 5px 0;
  font-size: 1.2rem;
  height: 4rem;
  transition: background-color 0.4s;

  &:hover {
    background: ${darken(0.1, primaryColor)};
  }
  &:active {
    background: ${darken(0.2, primaryColor)};
  }
  &:disabled {
    opacity: 0.5;
    &:hover,
    &:active {
      background: ${primaryColor};
      cursor: not-allowed;
    }
  }

  &.error {
    border: 1px solid #c53030;
    border-left: none;
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #fff;
    padding: 1rem;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
      transform: translateX(1rem);
    }

    /* todo a precedido de um a, ou seja não pega o primeiro */
    & + a {
      margin-top: 1rem;
    }

    img {
      width: 4em;
      height: 4rem;
      border-radius: 50%;
    }
    div {
      flex: 1;
      margin-left: 2rem;

      strong {
        font-size: 1.25rem;
        font-weight: 700;
        color: #3d3d4d;
      }
      p {
        font-size: 1.2rem;
        margin-top: 0.25rem;
        color: #a8a8b3;
      }
    }
    svg {
      /* coloca na margem esqueda todo o espaço possivel */
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  background: #c53030;
  padding: 0.8rem;
  border-radius: 5px;
  margin-top: 1rem;
  color: #fff;
  font-weight: 700;

  svg {
    margin-right: 1rem;
  }
`;
