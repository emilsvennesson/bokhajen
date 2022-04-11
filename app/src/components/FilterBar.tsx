import { Button, Grid, Typography } from '@mui/material';

interface FilterBarProps {
  programSortHandler: Function;
  conditionSortHandler: Function;
  courseSortHandler: Function;
  allFiltersHandler: Function;
}

/**
 * A bar with different filtering options
 * @param props programSortHandler : Handler executed when filter by program is clicked
 * @param props courseSortHandler : Executed when filter by course is clicked
 * @param props conditionSortHandler : Executed when filter by condition is clicked
 * @param props allFiltersHandler : Executed when all filters button is clicked
 * @returns FilterBar component
 */

function FilterBar({
  programSortHandler,
  conditionSortHandler,
  courseSortHandler,
  allFiltersHandler,
}: FilterBarProps) {
  return (
    <Grid
      component="div"
      container
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      paddingBottom={2}
      columnGap={10}
      rowGap={10}
      sx={{
        borderBottom: 1,
        borderColor: 'grey',
        width: '95%',
      }}
    >
      {/* Small title */}
      <Grid item xs={7} sm={5} md={1}>
        <Typography
          variant="h6"
          sx={{ marginLeft: 10, marginRight: 10 }}
          width={100}
        >
          Sort by
        </Typography>
      </Grid>
      {/* <div className='filterBarSmallTitleContainer'>
            <p className="filterBarSmallTitle">Sort by</p>
        </div> */}

      {/* Buttons (This will have own made button components later) */}
      <Grid
        item
        flexGrow={4}
        xs={12}
        sm={7.9}
        md={6}
        lg={7}
        xl={8}
        flexDirection="row"
        justifyContent="left"
      >
        <Button
          variant="contained"
          onClick={() => programSortHandler()}
          sx={{
            width: 130,
            height: 50,
            marginRight: 2,
            backgroundColor: '#C4C4C4',
            color: 'black',
          }}
        >
          Program
        </Button>
        <Button
          variant="contained"
          onClick={() => courseSortHandler()}
          sx={{
            width: 130,
            height: 50,
            marginRight: 2,
            backgroundColor: '#C4C4C4',
            color: 'black',
          }}
        >
          Course
        </Button>
        <Button
          variant="contained"
          onClick={() => conditionSortHandler()}
          sx={{
            width: 130,
            height: 50,
            marginRight: 2,
            backgroundColor: '#C4C4C4',
            color: 'black',
          }}
        >
          Condition
        </Button>
      </Grid>
      <Grid item xs={12} sm={3} md={1} lg={1} xl={1}>
        <Button
          variant="contained"
          sx={{
            width: 130,
            height: 50,
            marginRight: 2,
            backgroundColor: '#C4C4C4',
            color: 'black',
          }}
          onClick={() => allFiltersHandler()}
        >
          All Filters
        </Button>
      </Grid>
    </Grid>
  );
}
export default FilterBar;
