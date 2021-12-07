import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/finishStyles'

function Finish ({history, classes }) {
  const goBack = () =>{
    history.push({
      pathname: '/',
    })
  }
  return (
    <div className={classes.gameContainer}>
      <h1>Game over!</h1>
      <div className={classes.userBlock}>
        <div>You</div>
        <div className={classes.result}>{history.location.state.userResult}</div>
      </div>
      <div>computer {history.location.state.computerResult}</div>
      <Button
        className={classes.restartButton}
        onClick={goBack}>
        Restart Game
      </Button>
    </div>
  )
}

export default withStyles(styles)(Finish)
