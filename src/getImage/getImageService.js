import {ajax} from 'rxjs/observable/dom/ajax';

// const people = [
//     {name: 'Query-1', age: 'image'},
//     {name: 'Query-2', age: 'text'},
//     {name: 'Query-3', age: 'something'}
// ];

export default () => {

    return ajax({url: 'https://jsonplaceholder.typicode.com/posts', method: 'GET'});

    // Wrap in Promise
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         return resolve(people)
    //     }, 2000)
    // })
}