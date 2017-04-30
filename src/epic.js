import {FETCHING_DATA} from './constants'
import {getDataSuccess, getDataFailure} from './actions'
import getPeople from './api'

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
            getPeople()
                .map(response => getDataSuccess(response.response))
                .catch(error => getDataFailure(error))
        );

export default fetchUserEpic