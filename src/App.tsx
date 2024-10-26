import { Typography } from "@mui/material"
import CardText from "./components/CardText/CardText"
import './App.css'

function App() {

  return (
    <div className="App">
      <Typography variant="h3" sx={{ textAlign: "center", width: "650px" }} >We release interesting articles about technology</Typography>
      <img src="/Seperator.svg" alt="/////" />
      <div className="container-text">
        <CardText text={"Unlocking the Power of Cloud Computing"} imageNumber={"1"} />
        <CardText text={"The Future of AI: How Machine Learning is Revolutionizing Industries"} imageNumber={"2"} />
        <CardText text={"The Impact of 5G on Business: How Faster Networks are Transforming the Way We Work"} imageNumber={"3"} />
      </div>
    </div>
  )
}

export default App
