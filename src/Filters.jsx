import { Paper, Typography } from "@material-ui/core";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const Filters = () => {
  return (
    <Paper elevation={5} style={{ height: "100vh", margin: '20px', padding: '20px' }}>
      <Typography variant="h5">Apply Filters</Typography>
      <div style={{marginTop: '24px', display: 'flex', flexDirection: 'column'}}>
        <CategoryFilter />
        <PriceFilter />
      </div>
    </Paper>
  );
};

export default Filters;
