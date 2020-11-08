import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResultCount from './ResultCount';

Enzyme.configure({ adapter: new Adapter() });

describe('ResultCount ', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
     amount: 10
    };
    wrapper = shallow(<ResultCount {...props} />);
  });

  it('render correctly ResultCount component', () => {  
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});