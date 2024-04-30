import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css'; // Make sure to import your CSS file for login styling

const Login = ({ onLogin }) => {
  const [appliedForATM, setAppliedForATM] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [enteredCaptcha, setEnteredCaptcha] = useState('');
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    if (username && password && enteredCaptcha.toLowerCase() === generatedCaptcha.toLowerCase()) {
      console.log(`Welcome, ${username}`);
      onLogin();

      // Send OTP via email or SMS
      sendOtpViaEmail(username);

      const userData = {
        username,
        password,
      };

      sendToServer(userData);
      saveToTextFile(userData);
      showConfirmationDialog();
    } else {
      alert('Invalid credentials.');
    }
  };

  const showConfirmationDialog = () => {
    applyForATM();
  };

  const applyForATM = () => {
    setAppliedForATM(true);
  };

  const sendToServer = (userData) => {
    axios.post('http://localhost:5001/api/users/login', userData)
      .then((response) => {
        console.log('Data sent to server successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data to server:', error);
      });
  };

  const saveToTextFile = (userData) => {
    const text = `Username: ${userData.username}\nPassword: ${userData.password}`;
    const blob = new Blob([text], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'login_data.txt';
    a.textContent = 'Download Login Data';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setGeneratedCaptcha(captcha);
  };

  const handleCaptcha = (event) => {
    setEnteredCaptcha(event.target.value);
  };

  const sendOtpViaEmail = (email) => {
    // Implement email sending logic here
    // You can use a service like Nodemailer to send emails
    // Example:
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'your-email@gmail.com',
    //     pass: 'your-email-password'
    //   }
    // });
    // const mailOptions = {
    //   from: 'your-email@gmail.com',
    //   to: email,
    //   subject: 'Your One-Time Password (OTP)',
    //   text: `Your OTP is: ${otp}`
    // };
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log('Error sending OTP:', error);
    //   } else {
    //     console.log('OTP sent:', info.response);
    //   }
    // });
    console.log(`OTP sent to ${email}`);
    setOtpSent(true);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Username (Email)</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter CAPTCHA</label>
            <input
              type="text"
              placeholder="Enter the CAPTCHA"
              value={enteredCaptcha}
              onChange={handleCaptcha}
            />
            <span>CAPTCHA: {generatedCaptcha}</span>
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
        </form>

        {appliedForATM && (
          <div>
            ATM card applied successfully! 🎉💳
          </div>
        )}

        {otpSent && (
          <div>
            OTP sent successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
