import React from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
          width: '50ch',
        },
      },
});

class SearchForm extends React.Component {
  state = {
      keyword: '',
  };

  handeleChangeInput = (e) => {
      this.setState({keyword: e.target.value});
      this._debounce(e.target.value)
  }

  _debounce = _.debounce(value => {
      this.props.onSerchYouTube(value);
  }, 400);

  render() {
      const { classes } = this.props;
      return (
          <>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="outlined-search" label="Search field" type="search" variant="outlined" onChange={this.handeleChangeInput} value={this.state.keyword} />
            </form>
          </>
      )
  }
}
  
  export default withStyles(styles)(SearchForm);
