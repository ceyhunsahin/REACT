import React from 'react'
import { useState } from 'react'
import './style.css'

const MouseEvents = () => {
    //click event
    //doubleClickEvent
    //mouseMoveEvent

    const handleClick = (e) => {
        e.defaultPrevent = true;
        console.log('e',e)
        console.log('e.type',e.type);
        console.log('e.target',e.target)
        console.log('e.current target.id',e.currentTarget.id)
        console.log('e.target.id',e.target.id)
        //document.getElementById(`${e.currentTarget.id}`).remove()
        e?.target.tagName === "SPAN" && e.currentTarget.remove();
    }
    const handleDoubleClick = (e) => {
        console.log('e',e)
        console.log('e.type',e.type);
        console.log('e.target',e.target)
        console.log('e.current target.id',e.currentTarget.id)
        console.log('e.target.id',e.target.id)
        console.log('innerText',e.currentTarget.innerText)
        //document.getElementById(`${e.currentTarget.id}`).remove()
        e?.target.tagName === "SPAN" && e.currentTarget.remove();
    }

    const [coord, setCoord] = useState({ x: 0, y: 0 })
    const [showBalloon, setShowBalloon] = useState(false);
    


    const handleMouseLeave = () => {
        setShowBalloon(false);
    };

    const handleMouseMove = (e) => {
        setCoord ({ x: e.pageX, y: e.pageY })
        setShowBalloon(true)
        console.log('e',e)
        /* console.log('e.offsetX',e.nativeEvent.offsetX);
        console.log('e.offsetY',e.nativeEvent.offsetY); */
        console.log('e.offsetX',e.nativeEvent.pageX);
        console.log('e.offsetY',e.nativeEvent.pageY);
        console.log(e.pageX,e.pageY)
        console.log("Coord: ",coord)
        console.log("showBalloon: ",showBalloon)
        
    }
    



    return (
    <>
        <h2>MouseEvents</h2>
        <p>
            <span>X {coord.x}</span> and 
        </p>
        <p>
            <span>Y {coord.y}</span>
        </p>
        <div className = "todos">
            <ul>
                <li id = "todo1" onClick={handleClick}> todo item 1 <span>X</span></li>
                <li id = "todo2" onDoubleClick={handleDoubleClick}>todo item 2 <span>X</span></li>
                <li id = "todo3" onMouseMove={handleMouseMove}>todo item 3 <span>X</span></li>
                
                <li id = "todo4" >todo item 4 <span>X</span></li>
                <li id = "todo5" >todo item 5 <span>X</span></li>
            </ul>
        </div>

        {showBalloon && (
                <div style={{
                    position: 'absolute',
                    left: `${coord.x}px`,
                    top: `${coord.y}px`,
                    transform: 'translate(-50%, -100%)',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    backgroundColor: 'lightblue',
                    color: 'black',
                    whiteSpace: 'nowrap'
                }}>
                    <p>X Position: {coord.x}</p>
                    <p>Y Position: {coord.y}</p>
                </div>
            )}
    </>
  )
  }

export default MouseEvents