import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
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
  const [reposGithub, setReposGithub] = useState<GithubRepos[]>()
  useEffect(() => {
    axios
      // .get(`https://api.github.com/users/${params.user}`)
      .get(
        `https://app-api-github-arthur-art.herokuapp.com/api/users/${params.user}/details`,
      )
      .then((response) => {
        setUsersGithub(response.data)
      })
    axios
      // .get(`https://api.github.com/users/${params.user}/repos`)
      .get(
        `https://app-api-github-arthur-art.herokuapp.com/api/users/${params.user}/repos`,
      )
      .then((response) => {
        setReposGithub(response.data)
      })
  }, [])

  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td></td>
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
              <td>{usersGithub?.created_at}</td>
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
