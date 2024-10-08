import React, {useState} from 'react';
import './index.css'

const PlayerScreen =({ onJoin }) => {
    const [name, setName] = useState("");

    const handleJoin = () => {
        if (name.trim()) {
            onJoin(name);
        } else {
            alert("Please enter a name to join the game")
        }
    }

    return (
        <div>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              style={{padding: "10px", marginRight:"10px"}}
            />
            <button onClick={handleJoin} style={{padding:"10px"}}>
                Join Game
            </button>
        </div>
    )
}

export default PlayerScreen;
