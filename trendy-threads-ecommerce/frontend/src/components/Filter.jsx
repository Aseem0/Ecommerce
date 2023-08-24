import {
  Button,
  makeStyles,
  Typography,
  Popover,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
    top: 24,
  },
}));

const Filter = ({ handleSort, handleFilters }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Filter
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        style={{ width: "300px" }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          <h6>Sort By</h6>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
                value="name"
                onChange={(e) => handleSort(e.target.value)}
              />
            }
            label="Name"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
                value="price"
                onChange={(e) => handleSort(e.target.value)}
              />
            }
            label="Price"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
                value="averageRating"
                onChange={(e) => handleSort(e.target.value)}
              />
            }
            label="Rating"
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              onChange={(e) => handleFilters("category", e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Shirt">Shirt</MenuItem>
              <MenuItem value="Pants">Pants</MenuItem>
              <MenuItem value="Vest">Vest</MenuItem>
            </Select>
          </FormControl>
        </Typography>
      </Popover>
    </div>
  );
};

export default Filter;
