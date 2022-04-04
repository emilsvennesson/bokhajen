import { Component } from 'react';
import './css/home.css';




class Home extends Component {

  state={

  };

  render(){
    return (
      <div>
        <header className='homeHeader'>
          <img className='logo' src={require('../assets/images/bok..png')} />
        </header>
        <section>
          <h2 className="sectionTitle">Most popular books</h2>
          <div className="popularBooks">
            <ul className="bookList">
              
            </ul>
          </div>
        </section>
      </div>

    )
  }
}

export default Home;
