import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs/Observable'

// const people = [
//     {name: 'Query-1', age: 'image'},
//     {name: 'Query-2', age: 'text'},
//     {name: 'Query-3', age: 'something'}
// ];
let progress = Observable.create();

function updateProgress(evt) 
{
   if (evt.lengthComputable) 
   {  // evt.loaded the bytes the browser received
      // evt.total the total bytes set by the header
      //
     var percentComplete = (evt.loaded / evt.total) * 100;  
     console.log('progress is =', percentComplete);
   } 
} 

export default (phrase = '1') => {

    return Observable.create(function(observer) {
        console.log('1 observer =', observer);
      let req = new XMLHttpRequest();
    //   req.onprogress = updateProgress;
      req.onreadystatechange = function (aEvt) {
          if (req.readyState === 4) {
              console.log('2 readyState, aEvt =', aEvt);
              if (req.status === 200) {
                  console.log('3 req =', req);
                  observer.next(JSON.parse(req.response));
                  observer.complete();
              } else {
                  observer.error(req.response);
              }
          }
      };

      req.upload.onprogress = (event) => {
          console.log('3.1 onprogress event =', event);
          this.progress = Math.round(event.loaded / event.total * 100);

          this.progressObserver.next(this.progress);
      };
      req.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + phrase);
      req.send();
    });

    // return ajax({
    //     url: 'https://jsonplaceholder.typicode.com/posts?userId=' + phrase,
    //     // progressObserver: Observable.create(
    //     //     x => console.log('still spinning', x),
    //     //     err => console.log('should never happen'),
    //     //     () => console.log('stop spinning')
    //     // )
    // });

    // Use when REST API can get parameters
    // return ajax.get('https://jsonplaceholder.typicode.com/posts?userId=1', {userId: 1});

    // Wrap in Promise
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         return resolve(people)
    //     }, 2000)
    // })
}