import  { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import TextField from '@mui/material/TextField';
import style from './Contact.module.css';
import { Button } from '@mui/material';

function Contact() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [emailError, setEmailError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFirstNameValid = handleFirst();
    const isLastNameValid = handleLast();
    const isEmailValid = handleEmail();
    const isPhoneValid = handlePhone();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
      return;
    }

    const formData = {
      firstName: first,
      lastName: last,
      email: email,
      phoneNumber: phone,
    };

    const existingData = JSON.parse(localStorage.getItem('formData')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('formData', JSON.stringify(updatedData));

    setFirst('');
    setLast('');
    setEmail('');
    setPhone('');
  };

  const handleFirst = () => {
    const regex = /^[A-Za-z]+$/;
    if (!first) {
      setFirstNameError('First name is required');
      return false;
    } else if (!regex.test(first)) {
      setFirstNameError('First name must contain alphabets only');
      return false;
    } else {
      setFirstNameError('');
      return true;
    }
  };

  const handleLast = () => {
    const regex = /^[A-Za-z]+$/;
    if (!last) {
      setLastNameError('Last name is required');
      return false;
    } else if (!regex.test(last)) {
      setLastNameError('Last name must contain alphabets only');
      return false;
    } else {
      setLastNameError('');
      return true;
    }
  };

  const handleEmail = () => {
    const regex = /^\S+@\S+\.\S+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!regex.test(email)) {
      setEmailError('Email is not valid');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handlePhone = () => {
    const regex = /^\d{10}$/;
    if (!phone) {
      setPhoneError('Phone number is required');
      return false;
    } else if (!regex.test(phone)) {
      setPhoneError('Phone number is not valid');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  return (
    <div>
      <Navbar />
      <hr />
      <div className={style.main_container}>
        <h1>Fill Form...</h1> <br />
        <form onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            sx={{
              color: 'white',
              width: '18rem',
              fontSize: '1rem',
              borderBottom: '1px solid white',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
            }}
          />
          <br />
          <span className={style.error}>{firstNameError}</span>
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Last Name"
            variant="standard"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            sx={{
              color: 'white',
              width: '18rem',
              borderRadius: '5px',
              borderBottom: '1px solid white',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
            }}
          />
          <br />
          <span className={style.error}>{lastNameError}</span>
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              color: 'white',
              width: '18rem',
              borderRadius: '5px',
              borderBottom: '1px solid white',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
            }}
          />
          <br />
          <span className={style.error}>{emailError}</span>
          <br />
          <br />
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{
              color: 'white',
              width: '18rem',
              borderRadius: '5px',
              borderBottom: '1px solid white',
              '& label': { color: 'white' },
              '& input': { color: 'white' },
            }}
          />
          <br />
          <span className={style.error}>{phoneError}</span>
          <br />
          <br />
          <Button
            variant="contained"
            type="submit"
            sx={{
              padding: '.5rem',
              width: '8rem',
              textAlign: 'center',
              marginTop: '1rem',
            }}
          >
            Submit
          </Button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Contact;
