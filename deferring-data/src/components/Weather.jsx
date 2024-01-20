import React, {Suspense} from 'react'
import {getWeather} from "../utils"
import {useLoaderData, defer, Await} from "react-router-dom"
import { useReducer } from 'react';
import AddTask from './addTask';
import TaskList, { initialTasks} from './taskList';
import { TaskReducer, } from './taskReducer';

export function loader () {

    const weatherPromise = getWeather()
    
    return defer({weather: weatherPromise})
}


function myLoading() {
    return <h2>🌀 Loading Weather...</h2>;
  }

 
export default function Weather() {
    const [taskState, dispatch ] = useReducer(TaskReducer, initialTasks)
    console.log("taskState: ", taskState)
    const text = taskState.text



    const loaderData = useLoaderData()
    console.log("weather", loaderData)
    
    
    return (
        
        <section>
        
            <Suspense fallback={myLoading()}>
                <Await resolve= {loaderData.weather}>
                    {(data) => {
                        

                        const iconUrl =
                        `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
                        return (
                            <>
                                <h1>Weather in {data.name}</h1>
                                <h3>{(data.main.temp-273.15).toFixed()}ºC</h3>
                                <img src={iconUrl} />
                                
                            </>
                        )
                    }}
                    
                </Await>
                </Suspense> 
                <div>
                    <AddTask
                        
                        dispatch={dispatch}
                    />
                    <TaskList
                        dispatch={dispatch}
                        taskState= {taskState}
                        
                    />

                    </div>
            
            
            
        </section>
    )
}
