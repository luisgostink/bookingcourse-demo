// TODO: We just got to the confirmation page

// TODO: Get the data stored in the session storage
const firstname = sessionStorage.getItem('fName'); //Luis
const lastname =  sessionStorage.getItem('lName');
const level = sessionStorage.getItem('level');
const city =  sessionStorage.getItem('city')
const zip = sessionStorage.getItem('zip')

console.log(firstname, lastname)
// TODO : create an element (a string here in the JS file) to add to the innerHTML of the div
let formDataHTML = ("<div>" + 
                        "<div>" + "<strong>First Name:</strong> " + firstname + "</div>" +
                        "<div>" + "<strong>Last Name:</strong>  " + lastname + "</div>" +
                        "<div>" + "<strong>Level:</strong> " + level + "</div>" + 
                        "<div>" + "<strong>City:</strong> " + city + "</div>" + 
                        "<div>" + "<strong>ZIP:</strong> "  + zip + "</div>" + 
                    "<div>" );

// TODO: Show that data on the confirmation page
document.getElementById("alldata").innerHTML = formDataHTML; 


