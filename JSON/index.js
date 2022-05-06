const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
}
const txt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'age', 'skills'], 2);
console.log(txt);
const newUser = `{
    "users":{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "age": 250,
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Python"
    ]
}
  }`
const newUserObj = JSON.parse(newUser);
console.log(newUser);