import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { toggleAddMovieModal, addMovie } from '../../actions';
import AddMovieForm from '../../components/add-movie-form';

const AddMovieContainer = () => {
  const { isAddMovieModalVisible } = useSelector(
    state => ({
      isAddMovieModalVisible: state.movie.isAddMovieModalVisible,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const submitAddMovieForm = (values) => {
    dispatch(addMovie(values));
  };

  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        className="add-movie-button"
        onClick={() => dispatch(toggleAddMovieModal())}
      >
        Add movie
      </Button>
      <Modal
        visible={isAddMovieModalVisible}
        onCancel={() => dispatch(toggleAddMovieModal())}
        footer={null}
        title="Add Movie"
        className="movie-modal"
      >
        <AddMovieForm submitForm={submitAddMovieForm}/>
      </Modal>
    </>
  );
};

export default AddMovieContainer;
