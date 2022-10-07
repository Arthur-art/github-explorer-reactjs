import styled from 'styled-components'

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  a {
    color: ${(props) => props.theme['gray-100']};
  }
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    img {
      border-radius: 20rem;
      width: 5rem;
    }
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

export const LinkProfileHighlight = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 6rem;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const InputUser = styled.input`
  flex: 1;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 1rem;
  margin-right: 1rem;
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`
