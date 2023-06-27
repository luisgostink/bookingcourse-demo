function validateForm() {

    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let level = document.getElementById("level")
    let city = document.getElementById("city")
    let zip = document.getElementById("zip")

    function setError (element, message)  {
            let inputField = element.parentElement; 
            let errorDisplay = inputField.querySelector('.error');
                errorDisplay.innerHTML = message;
                event.preventDefault();
    }
 
    if (firstName.value === '') {
        setError(firstName, 'Name must be filled.');
    }
 
    if (lastName.value === '') {
        setError(lastName, 'Last Name must be filled.');
    }

    if (level.value === '') {
        setError(level, 'Level must be selected.');
    }

    if (city.value === '') {
        setError(city, 'City must be filled.');
      }

    if (zip.value === '') {
        setError(zip, 'Must enter at least 4 numbers');
      }
}
