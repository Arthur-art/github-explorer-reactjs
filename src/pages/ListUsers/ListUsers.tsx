import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  LinkProfileHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './style'
import { Link } from 'react-router-dom'

interface GithubApi {
  id: number
  avatar_url: string
  login: string
  repos_url: string
  html_url: string
}

export const ListUsers = () => {
  const [usersGithub, setUsersGithub] = useState<GithubApi[]>([])
  useEffect(() => {
    axios.get('https://api.github.com/users?per_page=100').then((response) => {
      setUsersGithub(response.data)
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
          </tr>
          {usersGithub.map((value) => {
            return (
              <>
                <tr key={value.id}>
                  <td width="50%">
                    <img src={value.avatar_url} alt="" />
                  </td>
                  <td>
                    <Link to={`/details/${value.login}`}>
                      <LinkProfileHighlight>Details</LinkProfileHighlight>
                    </Link>
                  </td>
                  <td>{value.login}</td>
                  <td>{value.id}</td>
                </tr>
              </>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
