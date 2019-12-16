/*
 * AddDrive
 *
 * This is the page to add a drive, at the '/AppDrive' route
 */

// TODO: States pour localisation, date et heure + API google Map

import React from 'react';
// import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import LocationPicker from '../../components/LocationPicker';
import DatePicker from '../../components/DatePicker';
import TimePicker from '../../components/TimePicker';
import H1 from '../../components/H1';
import H2 from '../../components/H2';

import { DRIVE_TYPE, DAYS } from './constants';

function AddDrive() {
  const [driveType, setDriveType] = React.useState(DRIVE_TYPE.oneTime); // DRIVE_TYPE constant
  const [descriptionDrive, setDescriptionDrive] = React.useState('');
  const [dayDrive, setDayDrive] = React.useState(''); // DAYS constant

  const changeDriveType = event => {
    setDriveType(event.target.value);
  };

  const handleDescriptionDrive = event => {
    setDescriptionDrive(event.target.value);
  };

  const handleDayDrive = event => {
    setDayDrive(event.target.value);
  };

  return (
    <div>
      <H1>AJOUTER UN TRAJET</H1>
      <H2>Votre itinéraire</H2>
      <LocationPicker />
      <LocationPicker />

      <FormControl component="fieldset">
        <FormLabel component="legend">Type de trajet</FormLabel>
        <RadioGroup
          aria-label="Type de trajet"
          name="Type trajet"
          value={driveType}
          onChange={changeDriveType}
        >
          <FormControlLabel
            value={DRIVE_TYPE.oneTime}
            control={<Radio />}
            label="Trajet ponctuel"
          />
          <FormControlLabel
            value={DRIVE_TYPE.regular}
            control={<Radio />}
            label="Trajet régulier"
          />
        </RadioGroup>
      </FormControl>

      <H2>Vos dates et horaires</H2>

      {driveType === DRIVE_TYPE.regular ? (
        <FormControl>
          <DatePicker />
          <TimePicker />
          <TextField
            id="standard-textarea"
            value={descriptionDrive}
            onChange={handleDescriptionDrive}
            label="Description"
            placeholder="Description"
            multiline
          />
        </FormControl>
      ) : (
        <FormControl>
          <InputLabel htmlFor="age-native-helper">Jour</InputLabel>
          <NativeSelect value={dayDrive} onChange={handleDayDrive}>
            <option value="" />
            <option value={DAYS.lundi}>Lundi</option>
            <option value={DAYS.mardi}>Mardi</option>
            <option value={DAYS.mercredi}>Mercredi</option>
            <option value={DAYS.jeudi}>Jeudi</option>
            <option value={DAYS.vendredi}>Vendredi</option>
            <option value={DAYS.samedi}>Samedi</option>
            <option value={DAYS.dimanche}>Dimanche</option>
          </NativeSelect>
          <TimePicker />
          <TextField
            id="standard-textarea"
            value={descriptionDrive}
            onChange={handleDescriptionDrive}
            label="Description"
            placeholder="Description"
            multiline
          />
        </FormControl>
      )}
    </div>
  );
}

AddDrive.propTypes = {};

export default AddDrive;
