import React from 'react';
import { Button } from 'antd';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from 'enzyme-to-json';
import SearchPanel from './SearchPanel';

Enzyme.configure({ adapter: new Adapter() });

describe('AddMovieContainer ', () => {
  let wrapper;
  let handleSearch;
  let handleInput;

  beforeEach(() => {
    handleSearch = jest.fn();
    handleInput = jest.fn();
    const props = {
      handleSearch,
      handleInput
    };
    wrapper = shallow(<SearchPanel {...props} />);
  });

  it('render correctly SearchPanel component', () => {  
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should run handleInput function on input', () => {  
    const input = wrapper.find('Input');

    input.simulate('change', { target: {value: 'a' } });
    expect(handleInput).toHaveBeenCalledWith('a');
  });

  it('should run handleSearch function on buttton click', () => {  
    const button = wrapper.find(Button);

    button.simulate('click');
    expect(handleSearch).toHaveBeenCalled();
  });
});