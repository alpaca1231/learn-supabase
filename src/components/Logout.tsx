import { FC } from 'react'
import { useAuth } from '../hooks/useAuth'

type LogoutProps = {}

export const Logout: FC<LogoutProps> = () => {
  const { signOut } = useAuth()
  return <button onClick={signOut}>ログアウト</button>
}
