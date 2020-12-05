import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Addcar from './Addcar';
import Editcar from './Editcar'


export default function Carlist() {

    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);


    useEffect(() => fetchData(), []);

    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    }

    const deleteCar = (link) => {
        if (window.confirm('Oletko varma, että haluat poistaa auton?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        setOpen(true);
    }}
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    }

    const saveCar = (car) => {
        fetch('https://carstockrest.herokuapp.com/cars', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
    })
                .then(res => fetchData())
                .catch(err => console.error(err))
}

    const updateCar = (car, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
})
        .then(res => fetchData())
        .catch(err => console.error(err))
        }
    

    const columns = [
        
        {
        Header: 'Merkki',
        accessor: 'brand'
    },
    {
        Header: 'Malli',
        accessor: 'model'
    },
    {
        Header: 'Väri',
        accessor: 'color'
    },
    {
        Header: 'Bensiini/Diesel',
        accessor: 'fuel'
    },
    {
        Header: 'Vuosimalli',
        accessor: 'year'
    },
    {
        Header: 'Hinta',
        accessor: 'price'
    },
    
    {
        filterable: false,
        sortable: false,
        width: 100,
        Cell: row => <Editcar updateCar={updateCar} car={row.original} />

    },
    {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: row => <Button size="small" color="secondary" onClick={() => deleteCar(row.value)}>Poista</Button>
    }

    ]

    return (

        <div>
            
            <Addcar saveCar={saveCar} />
            <ReactTable filterable={true} data={cars} columns={columns} />
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Auto poistettu!" 
        />
        </div>
    );
}