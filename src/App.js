import React from 'react';

import{ Grid } from '@material-ui/core';

import { SearchBar, VideoDetails }  from './components';

import youtube from './api/youtube';



class App extends React.Component {
  render() {
    return (
       <Grid justifyContent="center" container spacing={16}>
        <Grid item xs={12}>
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <SearchBar/>
                 </Grid>
                <Grid item xs={8}>
                    <VideoDetails/>
                </Grid>
                <Grid item xs={4}>
                    {/*VideoList */}
                </Grid>
             </Grid>
        </Grid>
    </Grid>
    )
  }
}



export default App;







