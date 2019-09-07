import React from 'react'
import { Button } from '@material-ui/core'
import './test.css'
const Login: React.FC = () => {
  return (
    <div className="Login">
      <div className="test">我是个粉刷匠</div>
      <Button variant="contained" color="secondary">
        Login
      </Button>
    </div>
  )
}

export default Login
