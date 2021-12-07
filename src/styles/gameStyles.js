const styles = theme => ({
  gameContainer: {
    display: "grid",
    gridTemplateRows: "50px 50px 50px 50px 50px;",
    gridTemplateColumns: "50px 50px 50px 50px 50px",
  },
  cell: {
    border: "1px solid blue",
    cursor: "pointer",
    borderRadius: 0,
    minWidth: "inherit",
    color: "rgba(0, 0, 0, 0.87)",
  },
  gameWrapper:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontFamily: "Helvetica",
  },
  X: {
    color: "#fe1234",
  },
  O: {
    color: "#12fe34",
  },
  restartButton: {
    backgroundColor: "#07DC72",
    color: "white",
    borderRadius: "50%",
    width: 100,
    height: 100,
    marginTop: 30,
  }
})

export default styles