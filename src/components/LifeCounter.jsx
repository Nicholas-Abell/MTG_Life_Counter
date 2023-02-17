import './LifeCounter.scss';
import React, { useState } from 'react';

const LifeCounter = ({ life, playerNumber, gainLife, loseLife, id }) => {

  const [playerName, setPlayerName] = useState('');

  const changeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <div className={`lifeCounter`}
      style={((life > 0) ? { backgroundColor: 'black' } : { backgroundColor: 'grey' })}
      life={life}>

      <input
        onChange={changeHandler}
        className='lifeCounter__userName'
        type='text'
        placeholder={playerName.length > 1 ? playerName : 'Player ' + playerNumber}>
      </input>

      <button className={'lifeCounter__button -left'}
        style={(life > 0) ? { display: '' } : { display: 'none' }}
        onClick={loseLife} id={id}
      >-</button>

      <p className="lifeCounter__total">{life}</p>

      <button className={'lifeCounter__button -right'}
        style={(life > 0) ? { display: '' } : { display: 'none' }}
        onClick={gainLife} id={id}>+</button>
    </div >
  )
}

export default LifeCounter;