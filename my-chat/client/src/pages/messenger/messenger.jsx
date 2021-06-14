import React from 'react'
import './messenger.css'
import Topbar from "../../components/topbar/Topbar"

function Messenger() {
    return (
        <>
        <Topbar/>
        <div class = 'messenger'>
           <div className = "chatMenu">
               <div className="chatMenuWrapper">
                   <input placeholder = "Search for friends" className="chatMenuInput"/>
               </div>
            </div> 
            <div className = "chatBox">
               <div className="chatBoxWrapper">
                   box
               </div>
            </div> 
            <div className = "chatOnline">
               <div className="chatOnlineWrapper">
                   online
               </div>
            </div> 
        </div>
        </>
    )
}

export default Messenger
