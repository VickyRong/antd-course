import request from '../util/request.js'; 

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve,millisecond)
    })
}

export default {
    namespace:'puzzlecards',
    state:{
        data:[],
        counter: 0
    },
    effects:{ //副作用，处理异步操作
        *queryInitCards(_,sagaEffects) {
            const { call,put } = sagaEffects;
            const endPointURI = 'https://official-joke-api.appspot.com/random_joke';
            const puzzle = yield call(request,endPointURI); 
            yield put({ type:'addNewCard',payload:puzzle });  //触发reducer

            yield call(delay,1000); 

            const puzzle2 = yield call(request,endPointURI);
            yield put({ type:'addNewCard',payload:puzzle2 });


            /**知识盲区**/
            //Generator用法
                //A------可以将异步函数看起来像同步函数一样调用，可以通过调用next()多次返回函数结果
            //call用法？
                //A------
            //put用法？
                //A------相当于dispatch一个action
            //yield用法？

            //effects用法

        }
    },
    reducers:{
        addNewCard(state,{payload:newCard}){
            const nextCounter = state.counter + 1;
            const newItem = {...newCard,id:nextCounter};
            const nextData = state.data.concat(newItem)
            return {
                data:nextData,
                counter:nextCounter
            }
        }
    }
}