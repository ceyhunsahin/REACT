
const myStyle = {
  parag : {
    color: "red",
    fontSize : "1rem",
    fontWeight : "bolder"
  },
  div : {
    backgroundColor : "gray",
    fontSize : "2.5em",
    color: "blue"

  }

}

const Inline = () => {
  return (
      <>
        <div style = {{  backgroundColor: "#944751", color :"#fff" }}>
          <h1>Hello from inline CSS</h1>
          <p style={myStyle.parag}>Ceyhun SAHIN</p>
        
          <div style={myStyle.div}>
            <p>Lorem ipsum dolor sit amet.</p>

          </div>
        </div>


      </>

    
  )
}

export default Inline;



