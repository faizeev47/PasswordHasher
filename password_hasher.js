crypto = require('crypto');

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

console.log(getHashedPassword("raza@interactcx"));

var users =  [
    {
        username: "MirzaAshir",
        initial: "MA",
        firstName: "Mirza",
        lastName: "Ashir",
        password: "ashir@interactcx"
    },
    {
        username: "MirzaAshir",
        initial: "MA",
        firstName: "Mirza",
        lastName: "Ashir",
        password: "killerboy"
    }
]

users.forEach((element) => {
    var keys = Object.keys(element);
    console.log("INSERT `sqt-reporting.dataportal_app.portal_users` (username, initial, firstName, lastName, password)");
    var printStr = "VALUES (";
    keys.forEach((key) => {
        if (key != "password") {
            printStr +=  "\"" + element[key] + "\", ";
        } else {
            printStr += "\"" + getHashedPassword(element[key]) + "\");";
        }
    });
    console.log(printStr);
});