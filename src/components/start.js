import React from 'react'
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import styles from '../styles/startStyles';

const pushUser = (props, player) => {
  props.history.push({
    pathname: '/game',
    state: { player: player }
  })
}

function Start (props) {
  return (
    <div className={props.classes.gameWrapper}>
      <h1>Choose your fighter</h1>
      <div className={props.classes.buttonsWrapper}>
        <Button className={props.classes.X}
          onClick={() => pushUser(props, 'x')}>
          <CloseIcon/>
        </Button>
        <Button className={props.classes.O}
          onClick={() => pushUser(props, 'o')}>
          <PanoramaFishEyeIcon />
        </Button>
      </div>

    </div>
  )
}

export default withStyles(styles)(Start)