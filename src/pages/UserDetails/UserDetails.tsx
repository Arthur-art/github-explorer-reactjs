import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  InputUser,
  LinkProfileHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './style'

interface GithubApi {
  id: number
  avatar_url: string
  login: string
  repos_url: string
  html_url: string
  created_at: string
}
interface GithubRepos {
  id: number
  name: string
  html_url: string
}

export const UserDetails = () => {
  const params = useParams()
  const [usersGithub, setUsersGithub] = useState<GithubApi>()
  const [usersGithubInput, setUsersGithubInput] = useState('')
  const [reposGithub, setReposGithub] = useState<GithubRepos[]>()
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${params.user}`)
      .then((response) => {
        setUsersGithub(response.data)
      })
    axios
      .get(`https://api.github.com/users/${params.user}/repos`)
      .then((response) => {
        setReposGithub(response.data)
      })
  }, [params.user])

  function inputUser(user: string) {
    setUsersGithubInput(user)
  }

  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td>
              <form action="#">
                <InputUser
                  type="text"
                  placeholder="Search for a user"
                  onChange={({ target }) => inputUser(target.value)}
                />
                <Link to={`/details/${usersGithubInput}`}>
                  <LinkProfileHighlight type="submit">
                    Search
                  </LinkProfileHighlight>
                </Link>
              </form>
            </td>
            <td>Dashboard</td>
            <td>Login</td>
            <td>Id</td>
            <td>Date of the login creation</td>
          </tr>
          <>
            <tr key={usersGithub?.id}>
              <td width="50%">
                <img src={usersGithub?.avatar_url} alt="" />
              </td>
              <td>
                <a
                  target={'_blank'}
                  href={usersGithub?.html_url}
                  rel="noreferrer"
                >
                  <LinkProfileHighlight>Url Profile</LinkProfileHighlight>
                </a>
              </td>
              <td>{usersGithub?.login}</td>
              <td>{usersGithub?.id}</td>
              <td>
                {usersGithub?.created_at &&
                  new Date(usersGithub?.created_at).toDateString()}
              </td>
            </tr>
          </>
        </tbody>
      </TransactionsTable>
      <h1>Repositorys</h1>
      <TransactionsTable>
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name Repository</td>
            <td>URL Repository</td>
          </tr>
          <>
            {reposGithub &&
              reposGithub.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>
                      <a
                        target={'_blank'}
                        href={usersGithub?.html_url}
                        rel="noreferrer"
                      >
                        {value.name}
                      </a>
                    </td>
                    <td>
                      <a
                        target={'_blank'}
                        href={value.html_url}
                        rel="noreferrer"
                      >
                        {value.html_url}
                      </a>
                    </td>
                  </tr>
                )
              })}
          </>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
