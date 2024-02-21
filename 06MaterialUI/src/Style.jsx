import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material';

const useStyles = () => {
  const theme = createTheme(); // Create a theme instance
  return makeStyles(() => ({ // CSS in Javascript
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    icon:{
      marginRight:'20px',
    },
    buttons:{
      marginTop:'40px',
    },
    cardGrid:{
      padding:'20px 0',
    },
    card:{
      height:'100%',
      display:'flex',
      flexDirection:'column'
    },
    cardMedia:{
      paddingTop:'56.25%' //16:9
    },
    cardContent:{
      flexGrow:1,
    },
    footer:{
      backgroundColor: theme.palette.background.paper,
      padding:'50px 0'
    }
  }))();
};

export default useStyles