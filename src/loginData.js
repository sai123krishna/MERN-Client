// loginData.js
const loginData = [];

export const addLoginData = (userData) => {
  loginData.push(userData);
};

export const getLoginDataText = () => {
  const text = loginData.map((userData, index) => {
    return `Login ${index + 1}:\nEmail: ${userData.email}\nFirst Name: ${userData.firstName}\nLast Name: ${userData.lastName}\nPassword: ${userData.password}\n\n`;
  }).join('');
};

export default loginData;
