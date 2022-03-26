import { makeStyles, createStyles } from '@mui/styles';

export default makeStyles(theme =>
  createStyles({
    appBar: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${theme.spacing(1)} ${theme.spacing(4)}`
    },
    heading: {
      color: 'rgba(0,183,255, 1)',
      textDecoration: 'none'
    },
    image: {
      marginLeft: '15px'
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '400px'
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '28vw'
    },
    userName: {
      display: 'flex',
      alignItems: 'center'
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center'
    },
    // purple: {
    //   color: palette.getContrastText(theme.deepPurple[500]),
    //   backgroundColor: deepPurple[500]
    // }
  })
);
