import './LifeCounter.scss';
import React, { useState } from 'react';

const LifeCounter = ({ life, playerNumber, gainLife, loseLife, id, rotate }) => {

  const [playerName, setPlayerName] = useState('');

  const changeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <div className={`lifeCounter`}
      style={{
        backgroundColor: life > 0
          ? 'black'
          : 'grey',
        transform: rotate
          ? 'rotate(180deg)'
          : ''
      }}
      life={life}>

      <input
        onChange={changeHandler}
        className='lifeCounter__userName'
        type='text'
        placeholder={playerName.length > 1 ? playerName : 'Player ' + playerNumber}>
      </input>

      <button className={'lifeCounter__button -left'}
        style={{
          display: life > 0
            ? ''
            : 'none'
        }}
        onClick={loseLife} id={id}
      >-</button>

      <p className="lifeCounter__total">{life}</p>

      <button className={'lifeCounter__button -right'}
        style={{
          display: life > 0
            ? ''
            : 'none'
        }}
        onClick={gainLife} id={id}>+</button>
    </div >
  )
}

export default LifeCounter;