import reducer, { getUserProfile, setLogout } from '../user'
import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initialState = {}
const store = mockStore(initialState)

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      isFetching: false,
      error: null,
      userInfo: {},
    }
  )
})

describe('userSlice', () => {
  describe('reducers', () => {
    const initialState = {
      isFetching: false,
      error: null,
      userInfo: {},
    }

    let data = {}

    it('actions', () => {
      reducer(initialState, setLogout())

    });

    it('sets fetching true when getUserProfile is pending', () => {
      store.dispatch(getUserProfile())
      const action = { type: getUserProfile.pending.type };
      const state = reducer(initialState, action);
    });

    it('sets the data when getUserProfile is fulfilled', () => {
      const action = { type: getUserProfile.fulfilled.type, payload: data };
      const state = reducer(initialState, action);
    });

    it('sets fetching false when getUserProfile is rejected', () => {
      const action = { type: getUserProfile.rejected.type, error: { message: 'error' } };
      const state = reducer(initialState, action);
    });

  });

});