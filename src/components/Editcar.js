import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function Editcar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', 
        color: '', fuel: '', year: '', price: ''
    });

  const handleClickOpen = () => {
    setCar({brand: props.car.brand, 
      model: props.car.model,
      color: props.car.color, 
      fuel: props.car.fuel, 
      year: props.car.year,
      price: props.car.price,})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) =>{
    setCar({...car, [event.target.name]: event.target.value})

  }

  const updateCar = () => {
      props.updateCar(car, props.car._links.car.href);
      handleClose();
  }


    return (
       <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Muuta
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Muuta tietoja</DialogTitle>
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
          <Button onClick={updateCar} color="secondary">
            Tallenna
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    );
}