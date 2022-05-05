const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names);
console.log(names);
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user);
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries);
const users = [{
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users);
const contr = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

console.time('Regular for loop')
for (let i = 0; i < contr.length; i++) {
    console.log(contr[i][0], contr[i][1])
}
console.timeEnd('Regular for loop');
console.info('30 Days Of JavaScript challenge is trending on Github');
const esm = ['Asabeneh', 'Brook', 'David', 'John'];
console.group('Names')
console.log(esm);
console.groupEnd();