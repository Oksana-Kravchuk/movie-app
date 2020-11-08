import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const initialState = {};
const store = mockStore(initialState);


export default store;