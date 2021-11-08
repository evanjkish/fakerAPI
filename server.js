const faker = require("faker");
const express = require('express');
const app = express();
const PORT = 8001;

// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

const mrFake = new User();
console.log(mrFake);

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

const fakeCo = new Company();
console.log(fakeCo);

app.get('/api/user/new', (req, res) => {
    res.json({ User: new User() });
});

app.get('/api/company/new', (req, res) => {
    res.json(new Company());
});

app.get('/api/user/company/new', (req, res) => {
    res.json({
        user: new User(),
        company: new Company()
    })
});


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
