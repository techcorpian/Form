const array = ["First Name", "Last Name", "Email ID", "Address", "Pincode", "Gender", "Food", "State", "Country"];

const formContainer = document.createElement('form');
formContainer.setAttribute('id','form');

const firstDiv = document.createElement('div');

const firstNameLabel = document.createElement('span');
firstNameLabel.innerText = "First Name";

const firstName = document.createElement('input');
firstName.setAttribute('type','text');
firstName.setAttribute('id','fname');
firstName.setAttribute('placeholder','Enter Your First Name....');

firstDiv.append(...[firstNameLabel, firstName]);

const lastDiv = document.createElement('div');

const lastNameLabel = document.createElement('span');
lastNameLabel.innerText = "Last Name";

const lastName = document.createElement('input');
lastName.setAttribute('type','text');
lastName.setAttribute('id','lname');
lastName.setAttribute('placeholder','Enter Your Last Name....');

lastDiv.append(...[lastNameLabel, lastName]);

const mailDiv = document.createElement('div');

const mailLabel = document.createElement('span');
mailLabel.innerText = "Email ID";

const email = document.createElement('input');
email.setAttribute('type','email');
email.setAttribute('id','email');
email.setAttribute('placeholder','Enter Your Email Here....');

mailDiv.append(...[mailLabel, email]);

const addressDiv = document.createElement('div');

const addressLabel = document.createElement('span');
addressLabel.innerText = "Address";

const address = document.createElement('textarea');
address.setAttribute('id','address');
address.setAttribute('placeholder','Enter Your address Here....');

addressDiv.append(...[addressLabel, address]);

const pincodeDiv = document.createElement('div');

const pincodeLabel = document.createElement('span');
pincodeLabel.innerText = "pincode";

const pincode = document.createElement('input');
pincode.setAttribute('type','number');
pincode.setAttribute('id','pincode');
pincode.setAttribute('placeholder','Enter Your Pincode Here....');

pincodeDiv.append(...[pincodeLabel, pincode]);

const gender = document.createElement('h4');
gender.innerText = 'Gender';

const genderDiv = document.createElement('div');
genderDiv.setAttribute('id', 'gender');

const male = document.createElement('input');
male.setAttribute('type', 'radio');
male.setAttribute('id', 'male');
male.setAttribute('name', 'gender');
male.setAttribute('value', 'male');

const maleLabel = document.createElement('label');
maleLabel.setAttribute('for', 'male');
maleLabel.innerText = 'Male';

const female = document.createElement('input');
female.setAttribute('type','radio');
female.setAttribute('id','female');
female.setAttribute('name','gender');
female.setAttribute('value', 'female');

const femaleLabel = document.createElement('label');
femaleLabel.setAttribute('for', 'female');
femaleLabel.innerText = 'Female';

genderDiv.append(...[male, maleLabel, female, femaleLabel])

const food = document.createElement('h4');
food.innerText = 'Food';

const chickenDiv = document.createElement('div');
chickenDiv.setAttribute('id', 'food');

const chicken = document.createElement('input');
chicken.setAttribute('type','checkbox');
chicken.setAttribute('id','chicken');
chicken.setAttribute('name','choices');
chicken.setAttribute('value', 'chicken');

const chickenLabel = document.createElement('label');
chickenLabel.setAttribute('for', 'chicken');
chickenLabel.innerText = 'Chicken';

chickenDiv.append(...[chicken, chickenLabel ]);

const muttonDiv = document.createElement('div');
muttonDiv.setAttribute('id', 'food');

const mutton = document.createElement('input');
mutton.setAttribute('type','checkbox');
mutton.setAttribute('id','mutton');
mutton.setAttribute('name','choices');
mutton.setAttribute('value', 'mutton');

const muttonLabel = document.createElement('label');
muttonLabel.setAttribute('for', 'mutton');
muttonLabel.innerText = 'mutton';

muttonDiv.append(...[mutton, muttonLabel ]);

const pastaDiv = document.createElement('div');
pastaDiv.setAttribute('id', 'food');

const pasta = document.createElement('input');
pasta.setAttribute('type','checkbox');
pasta.setAttribute('id','pasta');
pasta.setAttribute('name','choices');
pasta.setAttribute('value', 'pasta');

const pastaLabel = document.createElement('label');
pastaLabel.setAttribute('for', 'pasta');
pastaLabel.innerText = 'Pasta';

pastaDiv.append(...[pasta, pastaLabel ]);

const noodlesDiv = document.createElement('div');
noodlesDiv.setAttribute('id', 'food');

const noodles = document.createElement('input');
noodles.setAttribute('type','checkbox');
noodles.setAttribute('id','noodles');
noodles.setAttribute('name','choices');
noodles.setAttribute('value', 'noodles');

const noodlesLabel = document.createElement('label');
noodlesLabel.setAttribute('for', 'noodles');
noodlesLabel.innerText = 'Noodles';

noodlesDiv.append(...[noodles, noodlesLabel ]);

const prawnDiv = document.createElement('div');
prawnDiv.setAttribute('id', 'food');

const prawn = document.createElement('input');
prawn.setAttribute('type','checkbox');
prawn.setAttribute('id','prawn');
prawn.setAttribute('name','choices');
prawn.setAttribute('value', 'prawn');

const prawnLabel = document.createElement('label');
prawnLabel.setAttribute('for', 'prawn');
prawnLabel.innerText = 'prawn';

prawnDiv.append(...[prawn, prawnLabel ]);

const stateDiv = document.createElement('div');

const stateLabel = document.createElement('span');
stateLabel.innerText = "State";

const state = document.createElement('input');
state.setAttribute('id','state');
state.setAttribute('placeholder','Enter Your state Here....');

stateDiv.append(...[stateLabel, state]);

const countryDiv = document.createElement('div');

const countryLabel = document.createElement('span');
countryLabel.innerText = "Country";

const country = document.createElement('input');
country.setAttribute('id','country');
country.setAttribute('placeholder','Enter Your country Here....');

countryDiv.append(...[countryLabel, country]);

const button = document.createElement('button');
button.innerText = "Submit";
formContainer.append(...[firstDiv, lastDiv, mailDiv, addressDiv, pincodeDiv, gender, genderDiv, food, chickenDiv, muttonDiv, pastaDiv, noodlesDiv, prawnDiv, stateDiv, countryDiv, button]);

const tableContainer = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
tbody.setAttribute('id','body');

const tr = document.createElement('tr');
thead.appendChild(tr);

array.forEach(element => {
    const th = document.createElement('th');
    tr.appendChild(th);
    th.innerText = element;
});

tableContainer.append(...[thead, tbody]);
document.body.append(...[formContainer, tableContainer]);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const pincode = document.getElementById('pincode');
    const state = document.getElementById('state');
    const country = document.getElementById('country');
    const tbody = document.getElementById('body');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const choices = Array.from(document.querySelectorAll('input[name="choices"]:checked')).map(checkbox => checkbox.value);

        if (choices.length < 2) {
            alert('Please select at least two food choices.');
            return;
        }

        addRow(fname.value, lname.value, email.value, address.value, pincode.value, genderInput.value, choices, state.value, country.value);
        fname.value = '';
        lname.value = '';
        email.value = '';
        address.value = '';
        pincode.value = '';
        state.value = '';
        country.value = '';
        genderInput.checked = false;
        document.querySelectorAll('input[name="choices"]:checked').forEach(checkbox => checkbox.checked = false);
    });

    function addRow(fname, lname, email, address, pincode, gender, choices, state, country) {
        const tr = document.createElement('tr');
        const tdFname = document.createElement('td');
        tdFname.textContent = fname;

        const tdLname = document.createElement('td');
        tdLname.textContent = lname;

        const tdEmail = document.createElement('td');
        tdEmail.textContent = email;

        const tdAddress = document.createElement('td');
        tdAddress.textContent = address;

        const tdPincode = document.createElement('td');
        tdPincode.textContent = pincode;

        const tdGender = document.createElement('td');
        tdGender.textContent = gender;

        const tdChoices = document.createElement('td');
        tdChoices.textContent = choices.join(', ');

        const tdState = document.createElement('td');
        tdState.textContent = state;

        const tdCountry = document.createElement('td');
        tdCountry.textContent = country;

        tr.appendChild(tdFname);
        tr.appendChild(tdLname);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAddress);
        tr.appendChild(tdPincode);
        tr.appendChild(tdGender);
        tr.appendChild(tdChoices);
        tr.appendChild(tdState);
        tr.appendChild(tdCountry);

        tbody.appendChild(tr);
    }
});
