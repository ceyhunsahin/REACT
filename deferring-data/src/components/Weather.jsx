import React, {Suspense} from 'react'
import {getWeather} from "../utils"
import {useLoaderData, defer, Await} from "react-router-dom"
import { useReducer } from 'react';
import Chat from '../components/chat';
import ContactList from '../components/ContactList';
import { initialState, messengerReducer } from '../components/messengerReducer';
export async function loader () {
    const weatherPromise = getWeather()
    
    return defer({weather: weatherPromise})
}
function myLoading() {
    return <h2>🌀 Loading Weather...</h2>;
  }
  const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];
 
export default function Weather() {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.message;
    const contact = contacts.find((c) => c.id === state.selectedId);


    const loaderData = useLoaderData()
    console.log("weather", loaderData)
    
    
    return (
        
        <section>
        
            <Suspense fallback={myLoading()}>
                <Await resolve= {loaderData.weather}>
                    {(data) => {
                        console.log(data)

                        const iconUrl =
                        `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`
                        return (
                            <>
                                <h1>Weather in {data.name}</h1>
                                <h3>{data.main.temp}ºF</h3>
                                <img src={iconUrl} />
                                
                            </>
                        )
                    }}
                    
                </Await>
                <div>
                    <ContactList
                        contacts={contacts}
                        selectedId={state.selectedId}
                        dispatch={dispatch}
                    />
                    <Chat
                        key={contact.id}
                        message={message}
                        contact={contact}
                        dispatch={dispatch}
                    />
                    </div>
            </Suspense>
            
            
        </section>
    )
}
