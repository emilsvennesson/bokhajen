import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import FilterBar from '../components/FilterBar';
import bok from '../assets/images/bok.png';

function Home() {
  const [books] = useState(['book1', 'book2', 'book3', 'book4', 'book5']);
  const [filteredBooks] = useState([
    'book1',
    'book2',
    'book3',
    'book4',
    'book5',
    'book6',
    'book7',
    'book8',
    'book9',
    'book10',
    'book11',
    'book12',
    'book13',
    'book14',
    'book15',
    'book16',
    'book17',
    'book18',
    'book19',
    'book20',
    'book21',
    'book22',
    'book23',
  ]);
  /**
   * This is a placeholder untill the backend is set up for handling filters
   * @param value sortvalue : String
   */
  const sortHandler = (value: String) => {
    // Value should be changed to an enum or be fetched from a config file in the future
    switch (value) {
      case 'program':
        // console.log('Sort by program');
        break;
      case 'course':
        // console.log('Sort by course');
        break;
      case 'condition':
        // console.log('Sort by condition');
        break;
      default:
        // console.log('default');
        break;
    }
  };

  /**
   * Executes when all filters is clicked
   */
  const allFiltersHandler = () => {
    // console.log('All filters clicked');
  };

  /**
   * This will return the book item that will be shown in the book list
   * @param book an object with {name, condition, price}
   * @returns A list item with a book card
   */
  const createBookItem = (book: any) => (
    // This will return a card when the card is done
    <Grid
      item
      xs={12}
      sm={3.7}
      lg={2}
      xl={1.3}
      display="flex"
      justifyContent="center"
      marginLeft={5}
      key={book}
    >
      <Card sx={{ width: 200, height: 250 }}>
        <CardContent>
          <Typography>{book}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Header */}
      <Box
        component="header"
        width="100%"
        height={450}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="#DFDDDD"
      >
        {/* LOGO */}
        <Box component="img" height={900} src={bok} />
      </Box>

      {/* Popular books */}
      <Box
        component="section"
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        {/* Small title */}
        <Typography
          variant="h4"
          component="h2"
          align="center"
          fontStyle="bold"
          sx={{ marginBottom: 10, marginTop: 10 }}
        >
          Most popular books
        </Typography>

        {/* Popular books list */}
        <Grid
          container
          columnGap={4}
          rowGap={2}
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
        >
          {books.map((book) => createBookItem(book))}
        </Grid>
      </Box>

      {/* Filter list */}
      <Box
        component="section"
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
        marginTop={40}
        marginBottom={10}
      >
        <FilterBar
          programSortHandler={() => sortHandler('program')}
          courseSortHandler={() => sortHandler('course')}
          conditionSortHandler={() => sortHandler('condition')}
          allFiltersHandler={allFiltersHandler}
        />

        <Grid
          width="95%"
          marginTop={10}
          container
          direction="row"
          columnGap={2}
          rowGap={5}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          {filteredBooks.map((book) => createBookItem(book))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
