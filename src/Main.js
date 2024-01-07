import React, { useState } from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaCopy } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgeCalculator.css'; // Import your custom styles

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [dateFormat, setDateFormat] = useState('default');
  const [language, setLanguage] = useState('en');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const calculateAge = () => {
    try {
      const birthDate = new Date(dob);

      if (isNaN(birthDate)) {
        throw new Error('Invalid date. Please enter a valid date.');
      }

      const currentDate = new Date();

      const totalMilliseconds = currentDate - birthDate;
      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalMonths = Math.floor(totalDays / 30.44); // average days in a month
      const totalYears = Math.floor(totalDays / 365.25); // average days in a year

      setResult({
        totalSeconds,
        totalMinutes,
        totalHours,
        totalDays,
        totalMonths,
        totalYears,
        dayOfWeek: birthDate.toLocaleDateString(language, { weekday: 'long' }),
      });
      setError(null);
    } catch (error) {
      setResult(null);
      setError(error.message);
    }
  };

  const handleDateFormatChange = (e) => {
    setDateFormat(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const shareOnSocialMedia = (platform) => {
    // You can implement sharing logic here
    console.log(`Sharing on ${platform}`);
  };


  const copyToClipboard = () => {
    const formattedText = `Total Seconds: ${result.totalSeconds}\n` +
                          `Total Minutes: ${result.totalMinutes}\n` +
                          `Total Hours: ${result.totalHours}\n` +
                          `Total Days: ${result.totalDays}\n` +
                          `Total Months: ${result.totalMonths}\n` +
                          `Total Years: ${result.totalYears}\n` +
                          `Day of the Week: ${result.dayOfWeek}`;
  
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = formattedText;
    document.body.appendChild(textarea);
  
    // Select the text in the textarea
    textarea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(textarea);
  
    alert('Results copied to clipboard!');
  };
  


 return (

    
    <div className="container mt-4" style={{ background: 'rgba(255, 255, 255, 0.5)' }}>
      
    <div className="row">

        

    <div class="row">


    <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
    <div class="form-group">

  <label htmlFor="exampleText" className='name'>Calculate Your Age in</label>

      <table className="table text-center table-sm">
        <tbody>
          <tr>
            <td>Seconds</td>
          </tr>
          <tr>
            <td>Minutes</td>
          </tr>
          <tr>
            <td>Hours</td>
          </tr>
          <tr>
            <td>Days</td>
          </tr>
          <tr>
            <td>Months</td>
          </tr>
          <tr>
            <td>Years</td>
          </tr>
        </tbody>
      </table>
 
    </div>
</div>
<div class="col-md-6 ">
    <img src="/kid.jpg" alt="Kid Image" class="img-fluid mr-3 img" />
</div>

  




</div>

    


        <div className="col">
          <div className="form-group">
            <label htmlFor="dob" className="form-label">
              Enter your date of birth:
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="dateFormat" className="form-label">
              Choose date format:
            </label>
            <select
              id="dateFormat"
              value={dateFormat}
              onChange={handleDateFormatChange}
              className="form-select"
            >
              <option value="default">Default</option>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="language" className="form-label">
              Choose language:
            </label>
            <select
              id="language"
              value={language}
              onChange={handleLanguageChange}
              className="form-select"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              {/* Add more language options as needed */}
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">


           <button onClick={calculateAge} className="btn btn-primary">
            Calculate Age
          </button> 

   


        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
      <div className="results-container mt-4">
      <h2>Results:</h2> 
      <table className="results-table">
        <tbody>
          <tr>
            <th>Total Seconds</th>
            <td>{result.totalSeconds}</td>
          </tr>
          <tr>
            <th>Total Minutes</th>
            <td>{result.totalMinutes}</td>
          </tr>
          <tr>
            <th>Total Hours</th>
            <td>{result.totalHours}</td>
          </tr>
          <tr>
            <th>Total Days</th>
            <td>{result.totalDays}</td>
          </tr>
          <tr>
            <th>Total Months</th>
            <td>{result.totalMonths}</td>
          </tr>
          <tr>
            <th>Total Years</th>
            <td>{result.totalYears}</td>
          </tr>
          <tr>
            <th>Day of the Week</th>
            <td>{result.dayOfWeek}</td>
          </tr>
          <tr>
            <th>
              Current Date ({dateFormat}):
            </th>
            <td>
              {new Date().toLocaleDateString(language, {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </td>
          </tr>
        </tbody>
      </table>

    

          
      <div className="social-icons mt-4">
            <span className="copy-text me-2" >
              Copy your results
            </span>
            <FaCopy className="me-2" onClick={copyToClipboard} />
          </div>

          
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
