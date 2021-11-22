import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';

function App() {

  const columnStyle = {
    height: "500%",
    backgroundColor: "#808080" 
  }

  const columnStyleParams = {
    height: "400%",
    backgroundColor: "#808080" 
  }

  return (
      <Grid container columnSpacing={1} rowSpacing={2}>
        {/* Top bar */}
        <Grid item xs={8}>
          <Paper>number of layers slider</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>epoch status</Paper>
        </Grid>
        
        {/* Mid */}
        <Grid item xs={1}>
          <Paper style={columnStyle}>Input column</Paper>
        </Grid>

        {/* Dynamic layers */}
        <Grid item xs={7}>
          <Paper style={columnStyleParams}>Dynamic layers</Paper>
        </Grid>

        {/* End */}
        <Grid item xs={1}>
          <Paper style={columnStyle}>Flatten</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper style={columnStyle}>Fully connected</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper style={columnStyle}>Acc/Loss</Paper>
        </Grid>

      </Grid>

  );
}

export default App;
