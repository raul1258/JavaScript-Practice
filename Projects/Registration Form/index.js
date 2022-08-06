// console.log('hi');

// function validate (){
//     console.log('Submit button Clicked')
// }


function validate(){
    
let firstNameInput = document.getElementById('first-name').value
let lastNameInput = document.getElementById('last-name').value
let emailInput = document.getElementById('email').value
let cityInput = document.getElementById('city').value
let stateInput = document.getElementById('state').value
let zipInput = document.getElementById('zipcode').value
let tnCInput = document.getElementById('tnC').checked

    let error = false
    // console.log(firstNameInput,lastNameInput,emailInput,cityInput,stateInput,zipInput,tnCInput)

    if(firstNameInput.length >= 1){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
        error = true
	}

    if(lastNameInput.length >=1){
        document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
    }else{
        document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    /* Email
	- Whether exists? - Done
	- @ - Done
	- . - Done
	- After last ., there should be atleast 2 characters - Done
	- First character cannot be @ - Done
	*/

	// Eg: ankit@gmail.com
	// Index of .: 11
	// Length of string: 15


    if(emailInput.length >=1 && emailInput.includes('@') && emailInput.includes('.') && emailInput.lastIndexOf('.') <= emailInput.length-3 && emailInput.lastIndexOf('@') !==0){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    if(cityInput.length >=3 && !parseInt(cityInput)){  //if(cityInput)
        document.getElementById('city-valid').style.display = 'block'
		document.getElementById('city-invalid').style.display = 'none'
    }else{
        document.getElementById('city-invalid').style.display = 'block'
		document.getElementById('city-valid').style.display = 'none'
        error = true
    }
    
    if(zipInput.length === 6 && (parseInt(zipInput))){  //important isNaN  (parseInt(zipInput)) we can use this
        document.getElementById('zip-valid').style.display = 'block'
		document.getElementById('zip-invalid').style.display = 'none'
    }else{
        document.getElementById('zip-invalid').style.display = 'block'
		document.getElementById('zip-valid').style.display = 'none'
        error = true
    }

    // console.log(parseInt(zipInput)) output nan
    // console.log(isNaN(parseInt(zipInput))) output true
    // NaN is falsy

    if(stateInput !== 'None'){
		document.getElementById('state-valid').style.display = "block";
		document.getElementById('state-invalid').style.display = "none";
	} else {
		document.getElementById('state-invalid').style.display = "block";
		document.getElementById('state-valid').style.display = "none";
		error = true
	}

    if(tnCInput == true){
        document.getElementById('valid-tnC').style.display = 'none'
    }else{
        document.getElementById('valid-tnC').style.display = 'block'
        error = true
    }
console.log(error)
    if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('city').value = ''
		document.getElementById('state').value = 'None'
		document.getElementById('zip').value = ''
		document.getElementById('tnC').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("city-valid").style.display = "none";
		document.getElementById("zip-valid").style.display = "none";
		document.getElementById('state-valid').style.display = "none";
	}

}

