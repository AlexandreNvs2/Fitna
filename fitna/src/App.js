import './App.css';

function App() {
  return (


      <main className="App">
        <div className='home-container'>
          <header>
            <span className='logo'>LOGO</span>
            <ul>
              <div className='header-list'>
                <li>WORKOUT</li>
                <li>PROGRESS</li>
                <li>...</li>
              </div>
            </ul>

            <div className='header-log'>
              <a href='/'>Log In</a>
              <a href='/'>Log Out</a>
            </div>
          </header>
          <div className="home-main">
            <h1>DÉPASSE-TOI ET ATTEINS TES <span className="color_yellow"> OBJECTIFS ! </span></h1>
            <div className='rectangle'></div>

            <div className="home-main_footer">
              <a href='/'>JOIN NOW</a>
              <span>FR</span>
            </div>
          </div>
        </div>

        <div className="workout-section">
          <div className="left">
            <h1>WORKOUT</h1>
            <p>Chaque goutte de sueur, chaque effort, chaque répétition te rapproche de la meilleure version de toi-même.</p>
            <div className='rectangle2'></div>
          </div>
          <div className='separator'></div>
          <div className="right">
            <div className='rectangle3'></div>
            <p>Planifie tes <strong>séances</strong> avec soin et suis attentivement ta <span className='yellow'>progression</span></p>
          </div>
        </div>



      </main>
  );
}

export default App;