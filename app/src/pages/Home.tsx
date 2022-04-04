import { Component } from 'react';
import './css/home.css';
import BookList from '../components/BookList';


class Home extends Component {

  state={
    books:["book1","book2","book3"],
  };

  /**
   * This will return the book item that will be shown in the book list
   * @param book an object with {name, condition, price}
   * @returns A list item with a book card
   */
  createBookItem = (book: any) =>{
    // This will return a card when the card is done
    return <li>{book}</li>
  }


  render(){
    return (
      <div>
        <header className='homeHeader'>
          <img className='logo' src={require('../assets/images/bok..png')} />
        </header>
        <section>
          <h2 className="sectionTitle">Most popular books</h2>
          <div className="popularBooks">
            <BookList books={this.state.books} length={10} createCard={this.createBookItem} ></BookList>
          </div>
        </section>
      </div>

    )
  }
}

export default Home;
