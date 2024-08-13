const url = "https://api.github.com/users/"

// The API to get information about a user in github is: 
// https://api.github.com/users/dhh

const displayEmail = (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  console.log(username);
  
}

const form = document.getElementById("github-username");

form.addEventListener('submit', displayEmail);

// 1. The user will type a github username on the input
// 2. The user will click on the button submit
// 3. We will stop the browser from refreshing (event.preventDefault())
// 4. We need to select the input's value. (const username)
// 5. We need to add the word from the username variable at the end of the URL
// 6. We will start doing the fetch. 
// 7. We will use the data to find the meaning of cat
// 8. API will return something
// 9. We will select the paragraph
// 10. We will replace the innerText of the paragraph by the meaning of cat that came from data. 