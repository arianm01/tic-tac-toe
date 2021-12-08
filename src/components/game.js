import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import cells from './helpers/cells';
import getResult from './helpers/getResult'
import styles from '../styles/gameStyles';
import {Button} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cells: cells(),
      userCells: [],
      computerCells: [],
      userResult: false,
      computerResult: false,
      player: '',
      finish: false,
    }
  }

  componentDidMount() {
    this.setState({player: this.props.history.location.state.player})
  }

  setResult(result, player) {
    this.state.finish = true;
    if(player === 'user')
      this.setState({userResult: result})
    else if(player === 'computer') this.setState({computerResult: result})
    else return null;
  }

  showAllResult = (userCells, computerCells) => {
    console.log(userCells);
    let container = [].concat(userCells, computerCells);
    if (container.length === 25) {
      this.setResult('Draw', '');
      return;
    }
    if (!!getResult(userCells))
      this.setResult(getResult(userCells), 'user')
    if (!!getResult(computerCells))
      this.setResult(getResult(computerCells), 'computer')
  }

  restartGame = () => {
    this.setState({
      userCells: [],
      computerCells: [],
      userResult: '',
      computerResult: ''
    })

    this.props.history.push({
      pathname: '/',
    })
  }

  chooseRandomCell = (userCells) => {
    let computerCells = this.state.computerCells;
    let container = [].concat(userCells, computerCells);
    if (container.length === 25) {
      this.setResult('Draw', '');
      return;
    }
    let randomElement;
    do {
      randomElement = Math.floor(Math.random() * 25);
    } while (container.includes(randomElement));
    return randomElement
  }

  computerPlay = (userCells) => {
    let computerCells = this.state.computerCells;
    let cellsCopy = this.state.cells;
    let selectedCellNumber = this.chooseRandomCell(userCells);
    cellsCopy = cellsCopy.map(item => {
      if (item.number === selectedCellNumber) {
        item.selected = true;
        item.player = 'computer';
      }
      return item
    })
    computerCells = computerCells.concat([selectedCellNumber]);
    this.setState({computerCells: computerCells, cells: cellsCopy});
    this.showAllResult(this.state.userCells, computerCells);
  }

  fillResult = (cell) => {
    let userCells = this.state.userCells
    let cellsCopy = this.state.cells
    cellsCopy = cellsCopy.map(item => {
      if (item.number === cell.number) {
        item.selected = true;
        item.player = 'user';
      }
      return item
    })
    userCells = userCells.concat([cell.number]);
    console.log(userCells)
    this.setState({userCells: userCells, cells: cellsCopy});
    this.computerPlay(userCells)
    this.showAllResult(userCells, this.state.computerCells);
  };

  renderIcon = (cell, player) => {
    return cell.player === 'user' && player === 'x' && cell.selected ?
        <CloseIcon className={this.props.classes.X}/> :
        cell.player === 'user' && player === 'o' && cell.selected ?
            <PanoramaFishEyeIcon className={this.props.classes.O}/> :
            cell.player === 'computer' && player === 'x' && cell.selected ?
                <PanoramaFishEyeIcon className={this.props.classes.O}/> :
                cell.player === 'computer' && player === 'o' && cell.selected ?
                    <CloseIcon className={this.props.classes.X}/> : null
  };

  render() {
    const {cells, player} = this.state
    const {classes} = this.props

    return (
        <section className={classes.gameWrapper}>
          <h1>Tic-Tac-Toe</h1>
          <div className={classes.gameContainer}>
            {cells.map((cell, index) =>
                <Button
                    key={index}
                    className={classes.cell}
                    disabled={cell.selected || this.state.finish}
                    onClick={() => {
                      this.fillResult(cell)
                    }}
                >
                  {this.renderIcon(cell, player)}
                </Button>
            )}
          </div>
          <Button
              className={classes.restartButton}
              onClick={this.restartGame}
          >
            Restart Game
          </Button>
          {this.state.finish && <div className={classes.gameContain}>
            <h1>Game over!</h1>
            {this.state.userResult && <div className={classes.userBlock}>
              <div>You</div>
              <div className={classes.result}>
                Win
              </div>
            </div>}
            {!this.state.userResult && !this.state.computerResult && <div className={classes.result}>
              DRAW
            </div>}
            {this.state.computerResult && <div className={classes.userBlock}>
              <div>computer</div>
              <div className={classes.result}>
                Wins
              </div>
            </div>}
          </div>}
        </section>
    )
  }
}

export default withStyles(styles)(Game)