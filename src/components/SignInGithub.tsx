import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

type SignInGithubProps = {}

export const SignInGithub: FC<SignInGithubProps> = () => {
  const { signInWithGithub, error } = useAuth()
  return (
    <>
      <button onClick={signInWithGithub}>Githubでサインイン</button>
      {error && <p>{error}</p>}
    </>
  )
}
