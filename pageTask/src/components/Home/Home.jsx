import  { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import style from './Home.module.css';
import Navbar from '../Navbar/Navbar';

function Home() {

    const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormData(storedData);
  }, []);

  const handleClearData = () => {
    localStorage.removeItem('formData');
    alert('Are you sure you want to clear');
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className={style.main}>
        <h1>Welcome to Home</h1>
        
        <Button variant="contained" onClick={handleClearData}>
          Clear All
        </Button>
        {formData.length > 0 && (
          <ul>
            {formData.map((data, index) => (
              <li key={index} className={style.list}> <br />
              First Name : {`${data.firstName}`} <br />
              Last Name : {`${data.lastName}`} <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Home;
