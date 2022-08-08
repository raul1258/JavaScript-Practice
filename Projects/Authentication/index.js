	const DB_USERS = []

	const resetSignupFields = () => {
	document.getElementById('first-name').value = ''
	document.getElementById('last-name').value = ''
	document.getElementById('phno').value = ''
    document.getElementById('email').value = ''
    document.getElementById('tnC').checked = ''
	document.getElementById('signup-password').value = ''

	}

const signup = () => {
    let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let phnoInput = document.getElementById('phno').value
    let emailInput = document.getElementById('email').value
    let tnCInput = document.getElementById('tnC').checked
	let password = document.getElementById('signup-password').value

	let userDetails = {
		firstNameInput,
		lastNameInput,
		emailInput,
		password,
		phnoInput
	}

	DB_USERS.push(userDetails)
	console.log(DB_USERS)
	resetSignupFields()

    if(firstNameInput){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}
    if(phnoInput && phnoInput.length === 10 && parseInt(phnoInput)){
		document.getElementById("phno-valid").style.display = "block";
		document.getElementById("phno-invalid").style.display = "none";
	} else {
		document.getElementById("phno-invalid").style.display = "block";
		document.getElementById("phno-valid").style.display = "none";
		error = true
	}
    if (emailInput && emailInput.includes("@") && emailInput.includes(".") && emailInput.lastIndexOf(".") <= emailInput.length - 3 && emailInput.indexOf('@') !== 0 ) {
        document.getElementById("email-valid").style.display = "block";
        document.getElementById("email-invalid").style.display = "none";
      } else {
        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("email-valid").style.display = "none";
            error = true
      }
    if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}
    

   }
    
   const login = () => {
	let enteredEmail = document.getElementById('login-email').value
	let enteredPassword = document.getElementById('login-password').value

	let currentUser = DB_USERS.find((element) => {
		return element.email === enteredEmail
	})

   }