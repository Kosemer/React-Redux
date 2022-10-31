import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter';
import authentication from './authentication'
import validate from './validate';

const store = configureStore({
    reducer: { counter: counterSlice, authentication: authentication, validate: validate}
});


export default store;

/*const counterReducer = (state = initialState, action) => {
  // A state-nek (counter) adok egy kezdeti értéket, mert a reduktor első futásakor még nincs értéke és undefined hibát írna.
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === "increaseBy5") {
    return {
      counter: state.counter + 5,
      showCounter: state.showCounter
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }
  if(action.type === 'toggle'){
    return{
        showCounter: !state.showCounter, // Így, ha true volt akkor false lesz, ha false volt, akkor pedig true.
        counter: state.counter  // Itt is vissza kell adni a számláló értékét, mert egyébként a gomb megnyomásával eltűnne.
    }
  }
  return state; // Ha egyik feltétel sem teljesül akkor visszatér az eredeti értékkel (0).
};*/


