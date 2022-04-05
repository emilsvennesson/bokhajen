import { Component, useState } from 'react';
import './css/home.css';
import BookList from '../components/BookList';
import FilterBar from '../components/FilterBar';


const Home: React.FC =({}) => {

  const [books, setBooks] = useState(["book1","book2","book3","book4","book5","book6","book7"]);
  
  /**
   * This is a placeholder untill the backend is set up for handling filters
   * @param value sortvalue : String
   */
   const sortHandler = (value: String) =>{
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
   * Executes when all filters is clicked
   */
  const  allFiltersHandler = () =>{
    console.log("All filters clicked");
  }

  /**
   * This will return the book item that will be shown in the book list
   * @param book an object with {name, condition, price}
   * @returns A list item with a book card
   */
  const createBookItem = (book: any) =>{
    // This will return a card when the card is done
    return <li key= {book}>{book}</li>
  }

 
  return (
    <div> 
      
     {/* Header */}      
      <header className='homeHeader'>
       <img className='logo' src={require('../assets/images/bok..png')} />
      </header>
      
      
      {/* Popular books */}
      <section className='popularBooks homeSection'>
        <h2 className="sectionTitle">Most popular books</h2>
        <BookList books={books} length={10} createCard={createBookItem} ></BookList>
      </section>
      
      {/* Filter list */}
      <section className="homeSection filterList">
        <FilterBar 
            programSortHandler={() => sortHandler("program")} 
            courseSortHandler={() => sortHandler("course")} 
            conditionSortHandler={() => sortHandler("condition")}
            allFiltersHandler= {allFiltersHandler}
        />
       </section>
     </div>

    )
  }


export default Home;
