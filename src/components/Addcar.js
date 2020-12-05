import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Addcar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', 
        color: '', fuel: '', year: '', price: ''
    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) =>{
    setCar({...car, [event.target.name]: event.target.value})

  }

  const addCar = () => {
      props.saveCar(car);
      handleClose();
  }


    return (
       <div >
      <Button size="small" variant="contained" color="secondary" onClick={handleClickOpen}>
        Lisää auto
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Uusi auto</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={car.brand}
            label="Merkki"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
           <TextField
            margin="dense"
            name="model"
            value={car.model}
            label="Malli"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="color"
            value={car.color}
            label="Väri"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            label="Bensiini/Diesel"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="year"
            type="number"
            value={car.year}
            label="Vuosimalli"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
          <TextField
            margin="dense"
            name="price"
            type="number"
            value={car.price}
            label="Hinta"
            onChange={e => handleInputChange(e)}
            fullWidth
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Peruuta
          </Button>
          <Button onClick={addCar} color="secondary">
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    );
}