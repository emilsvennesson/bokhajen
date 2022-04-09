import { Box, Typography, Grid, Card, CardContent} from '@mui/material';
import { red } from '@mui/material/colors';
import { Component, useState } from 'react';
import BookList from '../components/BookList';
import FilterBar from '../components/FilterBar';

const Home: React.FC =({}) => {

  const [books, setBooks] = useState(['book1','book2','book3','book4','book5','book6','book7']);
  const [filteredBooks, setFilteredBooks] = useState(['book1','book2','book3','book4','book5','book6','book7','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8','book8']);
  /**
   * This is a placeholder untill the backend is set up for handling filters
   * @param value sortvalue : String
   */
   const sortHandler = (value: String) =>{
    //Value should be changed to an enum or be fetched from a config file in the future
    switch(value){
      case 'program':
        console.log('Sort by program');
        break;
      case 'course':
        console.log('Sort by course');
        break;
      case 'condition':
        console.log('Sort by condition');
        break;  
    }
  } 

  /**
   * Executes when all filters is clicked
   */
  const  allFiltersHandler = () =>{
    console.log('All filters clicked');
  }

  /**
   * This will return the book item that will be shown in the book list
   * @param book an object with {name, condition, price}
   * @returns A list item with a book card
   */
  const createBookItem = (book: any) =>{
    // This will return a card when the card is done
    return  <Card sx={{width: 200, height: 250}} >
              <CardContent>
                <Typography>{book}</Typography>
              </CardContent>
            </Card>
  }

 
  return (
    <Box
      component='div'
      sx = {{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    > 
      
     {/* Header */}
      <Box 
      component='header'
      sx = {{
        width: '100%',
        height: 450,
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFDDDD'
      }}
      >
        {/* LOGO */}
      <Box 
        component='img'
        sx={{
          height: 1000,
          position: 'relative',
        }}
        src={require('../assets/images/bok..png')}
        />
      </Box>
        
      {/* Popular books */}
      <Typography
        variant='h4'
        component='h2'
        align='center'
        sx={{ marginBottom: 10, marginTop: 10}}
      >
        Most popular books
      </Typography>

      <Grid
        container
        columns={5}
        columnGap={5}
        direction= 'row'
        justifyContent='center'
      >
        {books.map(book => createBookItem(book))}
      </Grid>
      
      {/* Filter list */}
      <Box
      component='section'
      sx={{
        width: '100%',
        display: 'flex',

        alignItems: 'center',
        flexDirection:'column',
        marginTop: 10,
        marginBottom: 20
      }}
      >
        <FilterBar
            programSortHandler={() => sortHandler('program')}
            courseSortHandler={() => sortHandler('course')}
            conditionSortHandler={() => sortHandler('condition')}
            allFiltersHandler= {allFiltersHandler}
        />

        <Grid
        container
        direction='row'
        columnGap={5}
        rowGap={5}
        justifyContent= 'center'
        width = '95%'
        sx={{marginTop: 10}}

        >
          {filteredBooks.map(book => createBookItem(book))}
        </Grid>
      </Box>
     </Box>

    )
  }


export default Home;
