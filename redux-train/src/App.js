import { createStore } from 'redux'
export default function App() {
    let initialStore ={
      status: false,
      sort:{
        by: 'name',
        value: 1
      }
    }
    function counterReducer(state = initialStore, action) {
        if(action.type === 'abc'){
          state.status =!state.status;
          return state;
        }
        if(action.type === 'SORT'){
          state.sort ={
            by : action.sort.by,
            value: action.sort.value
          }
          return state;
        }
        return state;
    }
  var action = { type: 'abc'};
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(counterReducer);
  
  // You can use subscribe() to update the UI in response to state changes.
  // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
  // There may be additional use cases where it's helpful to subscribe as well.
  store.dispatch(action); 
  var sortAction = {
    type : 'SORT',
    sort :{
      by: 'abc1',
      value: 1
    }
  }
  store.dispatch(sortAction); 
  console.log('Sort',store.getState());
  return(
    <h2>aa</h2>
  )
}
// eslint-disable-next-line no-unreachable
 