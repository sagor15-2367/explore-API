const user = { id: 1, name: 'Sagor Alam', job: 'Engineer' };
// javaScript Object Notation(json)
const stringField = JSON.stringify(user);

// console.log(user);
// console.log(stringField);

/*
{ id: 1, name: 'Sagor Alam', job: 'Engineer' }
{"id":1,"name":"Sagor Alam","job":"Engineer"}
*/

const shop = {
    owner: 'Sagor Alam',
    address: {
        street: 'kochukhet',
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
const shopJson = JSON.stringify(shop);

// console.log(shop);
console.log(shopJson);

const shopObject=JSON.parse(shopJson);
console.log(shopObject);