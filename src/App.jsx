import './App.scss';
import './components/LifeCounter.jsx';
import LifeCounter from './components/LifeCounter.jsx';
import React, { useState, createContext, useEffect } from 'react';

import Navigation from './components/Navigation.jsx';

export default function App() {

  const [players, setPlayers] = useState([
    {
      player: 1,
      id: 1,
      life: 40
    },
    {
      player: 2,
      id: 2,
      life: 40
    },
    {
      player: 3,
      id: 3,
      life: 40
    },
    {
      player: 4,
      id: 4,
      life: 40
    }
  ])

  const gainLife = (e) => {
    setPlayers(players.map((player) => {
      if (parseInt(e.target.id) === parseInt(player.id)) {
        return { ...player, life: player.life + 5 }
      }
      return player;
    }))
  }

  const loseLife = (e) => {
    setPlayers(players.map((player) => {
      if(parseInt(e.target.id) === parseInt(player.id)){
        return {...player, life: player.life - 5}
      }
      return player;
    }))
  }

  const gameReset = () => {
    setPlayers(players.map((player) => {
      return {...player, life: 40};
    }))
  }
  
  return (
    <main>
      <Navigation gameReset={gameReset}/>
      {
        players.map((player, key) => {
          return (
            <LifeCounter
              id={player.id}
              key={key}
              gainLife={gainLife}
              loseLife={loseLife}
              playerNumber={player.id}
              life={player.life} />
          )
        })
      }
    </main>
  )
}

