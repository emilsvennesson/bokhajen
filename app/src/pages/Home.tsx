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
   * This is a placeholder untill the backend is set up for handling filters
   * @param value sortvalue : String
   */
  sortHandler = (value: String) =>{
    //Value should be changed to an enum or be fetched from a config file in the future
    switch(value){
      case "program":
        console.log("Sort by program");
        break;
      case "course":
        console.log("Sort by course");
        break;
      case "condition":
        console.log("Sort by condition");
        break;  
    }
  } 

  /**
   * This shows all the more specific available filters
   */
  allFiltersHandler = () =>{
    console.log("All filters clicked");
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
            programSortHandler={() => this.sortHandler("program")} 
            courseSortHandler={() => this.sortHandler("course")} 
            conditionSortHandler={() => this.sortHandler("condition")}
            allFiltersHandler= {this.allFiltersHandler}
          />
        </section>
      </div>

    )
  }
}

export default Home;
