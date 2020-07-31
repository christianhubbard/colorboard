import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css'

export default class paletteMetaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: true,
            newPaletteName: '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('PaletteNameUnique', value =>
        this.props.palettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        ));
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange(evt){
        this.setState({
          [evt.target.name]:evt.target.value
        })
    }

    render() {
        const {newPaletteName, open} = this.state;
        const {hideForm, handleSubmit} = this.props;
        
        return (
            <Dialog
                open={open}
                aria-labelledby='form-dialog-title'
                onClose={hideForm}
                >
                    <DialogTitle id='form-dialog-title'>Choose A Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                    <DialogContent>
                        <DialogContentText>
                            Please Enter A Name For Your New Beautiful Colorboard. Make Sure It's Unique!
                        </DialogContentText>
                    <Picker />

                    <TextValidator 
                        name='newPaletteName'
                        value={newPaletteName} 
                        label="Palette Name" 
                        fullWidth
                        margin='normal'
                        onChange={this.handleChange} 
                        validators={['required', "PaletteNameUnique"]}
                        errorMessages={['Enter Palette Name', "Name already used"]}
                    />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm}>Cancel</Button>
                        <Button variant='contained' color='primary' type='submit' >Save Palette</Button>
                    </DialogActions>
                    </ValidatorForm>
            </Dialog>
        )
    }
}
