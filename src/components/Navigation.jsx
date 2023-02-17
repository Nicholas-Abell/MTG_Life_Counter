import './Navigation.scss';

const Navigation = ({ gameReset }) => {

  return (
    <navbar className='navbar'>
      <button className='navbar__reset' onClick={gameReset}
      >R</button>
    </navbar>
  )
}

export default Navigation;