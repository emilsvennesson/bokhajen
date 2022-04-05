import { Component } from 'react';
import './css/home.css';
import BookList from '../components/BookList';
import FilterBar from '../components/FilterBar';


class Home extends Component {

  state={
    books:["book1","book2","book3","book4","book5","book6","book7"],
  };

  /**
   * This will return the book item that will be shown in the book list
   * @param book an object with {name, condition, price}
   * @returns A list item with a book card
   */
  createBookItem = (book: any) =>{
    // This will return a card when the card is done
    return <li key= {book}>{book}</li>
  }


  /**
   * This is a sorting 
   */
  onProgramSort = () =>{
    console.log("Program sort");
  }


  render(){
    return (
      <div>
        {/* Header */}
        <header className='homeHeader'>
          <img className='logo' src={require('../assets/images/bok..png')} />
        </header>

        {/* Popular books */}
        <section className='popularBooks homeSection'>
          <h2 className="sectionTitle">Most popular books</h2>
          <BookList books={this.state.books} length={10} createCard={this.createBookItem} ></BookList>
        </section>

        {/* Filter list */}
        <section className="homeSection filterList">
          <FilterBar 
            programSortHandler={this.onProgramSort} 
            courseSortHandler={() => console.log("filter")} 
            conditionSortHandler={() => console.log("filter")}
          />
        </section>
      </div>

    )
  }
}

export default Home;
