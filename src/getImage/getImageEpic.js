import { FETCHING_DATA } from '../reducers/constants'
import { getDataSuccess, getDataFailure, getDataProgress } from '../getImage/getImageActions'
import getPeople from './getImageService'

import 'rxjs'

// import {Observable} from 'rxjs/Observable'
// get from Promise
// const fetchUserEpic = action$ =>
//     action$.ofType(FETCHING_DATA)
//         .mergeMap(action =>
//             Observable.fromPromise(getPeople())
//                 .map(response => getDataSuccess(response))
//                 .catch(error => Observable.of(getDataFailure(error)))
//         );

const fetchUserEpic = action$ =>
    action$.ofType(FETCHING_DATA)
        .mergeMap(action =>
            getPeople(action.phrase)
            
            // .subscribe(
            //             function (data) {
            //                     console.log('data == ', data);
            //             },
            //             function (error) {
            //                console.log('error', error);
            //             }
            //         )
            
                .map(response => {
                    // getDataProgress(response.xhr.upload.onprogress)
                   
                    // function updateProgress(evt) {
                    //     console.log('updateProgress +++ ', evt);
                    // }

                    // response.request.progressObserver
                    // .map(resp => console.log('lala'))
                    // .subscribe(
                    //     function (data) {
                    //             console.log('data == ', data);
                    //     },
                    //     function (error) {
                    //        console.log('error', error);
                    //     }
                    // );

                    console.log('4 response +++ ', response);
                    return getDataSuccess(response.response);
                })
                .catch(error => getDataFailure(error))
        );

export default fetchUserEpic