const _ = require('loadsh');
const arr1 = [99, 0, 33,[101, 202], 1, 2]; 
const arr2 = [2, 1, 2];
const users = [
    {user: 'fred', age: 48},
    {user: 'barney', age: 36},
    {user: 'fred', age: 40},
    {user: 'barney', age: 34},
];
const flattenArr1 = _.flatten(arr1);
const uniqArr2 = _.uniq(arr2)
const sortedUser = _.sortBy(users, ['user','age']);
console.log(sortedUser);