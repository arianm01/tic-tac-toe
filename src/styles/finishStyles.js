const styles = theme => ({
  gameContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    fontFamily: "Helvetica",
  },
  result: {
    fontSize: 24,
    textTransform: "uppercase",
  },
  userBlock: {
    marginBottom: 50,
    textAlign: "center",
  },
  restartButton: {
    backgroundColor: "#07DC72",
    color: "#fff",
    borderRadius: "50%",
    width: 100,
    height: 100,
    marginTop: 30,
  }
})

export default styles