const loginFormHandler = async (event) => {
    event.preventDefault();
  console.log("handling login attempt")
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("response correct")
        // document.location.replace('/');
      } else {
        alert('Failed to log in.');
        console.log(response)
      }
    }
  };

  document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);