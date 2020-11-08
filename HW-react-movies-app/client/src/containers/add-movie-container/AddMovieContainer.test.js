import * as React from "react";
import * as Redux from 'react-redux';
import { Modal, Button } from 'antd';
import { shallow } from "enzyme";
import { toggleAddMovieModal, addMovie} from '../../actions';
import AddMovieForm from '../../components/add-movie-form';
import store from '../../test-utils/store-mock';

import AddMovieContainer from './AddMovieContainer';

jest.mock(`react-redux`, () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const useSelectorSpy = jest.spyOn(Redux, 'useSelector');
const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
const mockDispatchFn = jest.fn();

useDispatchSpy.mockReturnValue(mockDispatchFn);
useSelectorSpy.mockReturnValue({ isAddMovieModalVisible: true });

describe('AddMovieContainer ', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddMovieContainer store={store}/>);
  });

 it('should render modal component as children', () => {
    expect(wrapper.children(Modal).length).toEqual(1);
  });

  it('should render button component as children', () => {
    expect(wrapper.children(Button).length).toEqual(1);
  });

  it('should render button component as children', () => {
    expect(wrapper.children(Button).length).toEqual(1);
  });

  it('should pass AddMovieForm component as children to Modal', () => {
    expect(wrapper.find(Modal).children(AddMovieForm).length).toEqual(1);
  });

  it('should dispatch toggleAddMovieModal action on click', () => {
    wrapper.find(Button).simulate('click');
    expect(store.dispatch(toggleAddMovieModal()));
  }); 

  it('should dispatch toggleAddMovieModal action on cancel', () => {
    wrapper.find(Modal).simulate('cancel');
    expect(store.dispatch(toggleAddMovieModal()));
  }); 

  it('should dispatch addMovie action', () => {
    const { submitForm } = wrapper.find(AddMovieForm).props();

    submitForm();
    expect(store.dispatch(addMovie()));
  }); 
});
