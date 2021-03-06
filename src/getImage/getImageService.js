import { ajax } from 'rxjs/observable/dom/ajax';

// const people = [
//     {name: 'Query-1', age: 'image'},
//     {name: 'Query-2', age: 'text'},
//     {name: 'Query-3', age: 'something'}
// ];

export default (phrase = 'Placeholder for SVG') => {

    // return ajax.get('https://jsonplaceholder.typicode.com/posts?userId=' + phrase);

    const phraseObject = { "text": phrase };

    return ajax({
        url: 'http://localhost:8080/phrase',
        body: phraseObject,
        crossDomain: false,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        responseType: 'text'
    });

    // Use when REST API can get parameters
    // return ajax.get('https://jsonplaceholder.typicode.com/posts?userId=1', {userId: 1});

    // Wrap in Promise
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         return resolve(people)
    //     }, 2000)
    // })
}