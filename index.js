
const indiaStatesAndCities = {
  "Andhra Pradesh": ["Guntur", "Tirupati", "Vijayawada", "Visakhapatnam"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Tawang", "Ziro"],
  "Assam": ["Dibrugarh", "Guwahati", "Jorhat", "Silchar"],
  "Bihar": ["Bhagalpur", "Gaya", "Muzaffarpur", "Patna"],
  "Chhattisgarh": ["Bilaspur", "Durg", "Korba", "Raipur"],
  "Goa": ["Margao", "Mapusa", "Panaji", "Vasco da Gama"],
  "Gujarat": ["Ahmedabad", "Rajkot", "Surat", "Vadodara"],
  "Haryana": ["Chandigarh", "Faridabad", "Gurugram", "Panipat"],
  "Himachal Pradesh": ["Kangra", "Kullu", "Manali", "Shimla"],
  "Jharkhand": ["Bokaro", "Dhanbad", "Jamshedpur", "Ranchi"],
  "Karnataka": ["Bengaluru", "Hubli", "Mangalore", "Mysore"],
  "Kerala": ["Kochi", "Kottayam", "Kozhikode", "Thiruvananthapuram"],
  "Madhya Pradesh": ["Bhopal", "Gwalior", "Indore", "Jabalpur"],
  "Maharashtra": ["Mumbai", "Nagpur", "Nashik", "Pune"],
  "Manipur": ["Churachandpur", "Imphal", "Kangpokpi", "Thoubal"],
  "Meghalaya": ["Jowai", "Nongpoh", "Shillong", "Tura"],
  "Mizoram": ["Aizawl", "Champhai", "Lunglei", "Serchhip"],
  "Nagaland": ["Dimapur", "Kohima", "Mokokchung", "Wokha"],
  "Odisha": ["Bhubaneswar", "Berhampur", "Cuttack", "Rourkela"],
  "Punjab": ["Amritsar", "Chandigarh", "Jalandhar", "Ludhiana"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Udaipur"],
  "Sikkim": ["Gangtok", "Jorethang", "Mangan", "Namchi"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Trichy"],
  "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Warangal"],
  "Tripura": ["Agartala", "Ambassa", "Dharmanagar", "Udaipur"],
  "Uttar Pradesh": ["Agra", "Kanpur", "Lucknow", "Varanasi"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Rishikesh"],
  "West Bengal": ["Howrah", "Kolkata", "Siliguri", "Durgapur", "Asansol"],
  "ASP": ["Andal", "Kulti", "Barakar", "Ukhra", "Burpur"],
};

let state = document.getElementById("state");
let city = document.getElementById("City");

let option = document.createElement("option");
option.innerHTML = "<option>Select your state</option>";
option.value = "Select your state";
state.appendChild(option);


let option1 = document.createElement("option");
option1.innerHTML = "<option>Select your city</option>";
option1.value = "Select your city";
city.appendChild(option1);

let objectKeys = Object.keys(indiaStatesAndCities).sort();

objectKeys.forEach((stateDropdown) => {
  let option2 = document.createElement("option");
  option2.value = stateDropdown;
  option2.textContent = stateDropdown;
  state.appendChild(option2);
});

state.addEventListener("change", function () {
  while (city.options.length > 1) {
    city.remove(1);
  }

  let choose = this.value;
  if (choose && choose !== "Select your state") {
    // Live validation
    this.style.border = "1px solid black";
    document.getElementById("state-error").style.display = "none";
    
    let find = indiaStatesAndCities[choose];
    find.forEach(function (item) {
      let createElement = document.createElement("option");
      createElement.value = item;
      createElement.textContent = item;
      city.appendChild(createElement);
    });
  }
});

document.getElementById("name").addEventListener("input", function() {
  if (this.value !== "") {
    this.style.border = "1px solid black";
    document.getElementById("name-error").style.display = "none";
  }
});

document.getElementById("Email").addEventListener("input", function() {
  if (this.value !== "") {
    this.style.border = "1px solid black";
    document.getElementById("email-error").style.display = "none";
  }
});

document.getElementById("number").addEventListener("input", function() {
  const numberError = document.getElementById("number-error");
  
  if (this.value === "") {
    this.style.border = "2px solid red";
    numberError.style.display = "block";
    numberError.innerText = "Enter your mobile number";
  } else if (this.value.length < 10) {
    this.style.border = "2px solid red";
    numberError.style.display = "block";
    numberError.innerText = "Number must be 10 digits";
  } else if (this.value.length > 10) {
    this.style.border = "2px solid red";
    numberError.style.display = "block";
    numberError.innerText = "Number cannot exceed 10 digits";
  } else {
    this.style.border = "1px solid black";
    numberError.style.display = "none";
  }
});


city.addEventListener("change", function() {
  if (this.value !== "Select your city") {
    this.style.border = "1px solid black";
    document.getElementById("city-error").style.display = "none";
  }
});

let button1 = document.querySelector("#button1");

button1.addEventListener("click", (event) => {
  event.preventDefault();
  validateForm(); 
});

function validateForm() {
  let input1 = document.getElementById("name").value;
  let input2 = document.getElementById("Email").value;
  let input3 = document.getElementById("number").value;
  let input4 = document.getElementById("state").value;
  let input5 = document.getElementById("City").value;
  
  let valid = true; 

  if (input1 === "") {
    document.getElementById("name").style.border = "2px solid red";
    document.getElementById("name-error").style.display = "block";
    document.getElementById("name-error").innerText = "Enter your name";
    valid = false;
  } else {
    document.getElementById("name").style.border = "1px solid black";
    document.getElementById("name-error").style.display = "none";
  }

  if (input2 === "") {
    document.getElementById("Email").style.border = "2px solid red";
    document.getElementById("email-error").innerText = "Enter your email";
    document.getElementById("email-error").style.display = "block";
    valid = false;
  } else if (!input2.includes('@')) {
    document.getElementById("Email").style.border = "2px solid red";
    document.getElementById("email-error").innerText = "Email must contain @ symbol";
    document.getElementById("email-error").style.display = "block";
    valid = false;
  } else {
    document.getElementById("Email").style.border = "1px solid black";
    document.getElementById("email-error").style.display = "none";
  }

  if (input3 === "" || input3.length !== 10) {
    document.getElementById("number").style.border = "2px solid red";
    document.getElementById("number-error").innerText = "Enter a valid 10-digit number";
    document.getElementById("number-error").style.display = "block";
    valid = false;
  } else {
    document.getElementById("number").style.border = "1px solid black";
    document.getElementById("number-error").style.display = "none";
  }

  if (input4 === "Select your state") {
    document.getElementById("state-error").style.display = "block";
    document.getElementById("state").style.border = "2px solid red";
    document.getElementById("state-error").innerHTML = "Select your state";
    valid = false;
  } else {
    document.getElementById("state-error").style.display = "none";
    document.getElementById("state").style.border = "1px solid black";
  }

  if (input5 === "Select your city") {
    document.getElementById("city-error").style.display = "block";
    document.getElementById("City").style.border = "2px solid red";
    document.getElementById("city-error").innerHTML = "Select your city";
    valid = false;
  } else {
    document.getElementById("city-error").style.display = "none";
    document.getElementById("City").style.border = "1px solid black";
  }

  if (valid) {
    alert("submitting the form!");
    document.getElementById("form").reset(); 
  }
}

let button2 = document.getElementById("button2");

button2.addEventListener("click", function() {
  document.getElementById("form").reset();
  document.getElementById("name").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("number").value = "";
  document.getElementById("state").value = "Select your state";
  document.getElementById("City").value = "Select your city";
  document.getElementById("name-error").style.display = "none";
  document.getElementById("email-error").style.display = "none";
  document.getElementById("number-error").style.display = "none";
  document.getElementById("state-error").style.display = "none";
  document.getElementById("city-error").style.display = "none";
  document.getElementById("name").style.border = "1px solid black";
  document.getElementById("Email").style.border = "1px solid black";
  document.getElementById("number").style.border = "1px solid black";
  document.getElementById("state").style.border = "1px solid black";
  document.getElementById("City").style.border= "1px solid black";
})

