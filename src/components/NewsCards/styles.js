import { makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
  },
  infoCard: {
    display: 'flex', 
    flexDirection: 'column', 
    textAlign: 'center',
  },
});

export default styles;
