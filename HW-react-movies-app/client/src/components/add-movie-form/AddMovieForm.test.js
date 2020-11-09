import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import AddMovieForm from './AddMovieForm';

Enzyme.configure({ adapter: new Adapter() });

describe('AddMovieForm', () => {
  const initialValues = {
    title: '',
    release_date: '',
    poster_path: '',
    overview: '',
    genres: [],
    runtime: '',
  };
  let wrapper;
  let submitForm;

  beforeEach(() => {
    wrapper = shallow(<AddMovieForm {...initialValues} />);
    submitForm = jest.fn();
  });

  it('should match stored snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should display necessary form fields', () => {
    expect(wrapper.dive().find('FormField[name="title"]')).toBeTruthy();
    expect(wrapper.dive().find('FormField[name="poster_path"]')).toBeTruthy();
    expect(wrapper.dive().find('FormField[name="overview"]')).toBeTruthy();
    expect(wrapper.dive().find('FormField[name="runtime"]')).toBeTruthy();
    expect(wrapper.dive().find('MultiSelect[name="genres"]')).toBeTruthy();
    expect(wrapper.dive().find('DatePicker[name="release_date"]')).toBeTruthy();
  });

  it('should not submit if required fields are empty', () => {
    const button = wrapper.dive().find('button[type="submit"]');
    button.simulate('click', { preventDefault: () => {} });

    expect(submitForm).not.toHaveBeenCalled();
  });
});
