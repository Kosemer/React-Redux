import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,  // Kezdeti állapot
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
})

const initialAuthState = {
    isAuthenticated: false, 
}

const authSlices = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login (state) {
            state.isAuthenticated = true
        },
        loguot (state) {
            state.isAuthenticated = false
        }
    }
})

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

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlices.reducer}
});

export const counterActions = counterSlice.actions; // "action" objektumokat hoz létre nekünk. Rendelkeznek típustulajdonsággal, műveletenként egyedi azonosítóval.

export const authActions = authSlices.actions;

export default store;
