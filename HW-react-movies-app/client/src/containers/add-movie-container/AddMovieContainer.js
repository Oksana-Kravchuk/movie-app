import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddMovieForm from '../../components/add-movie-form';

const AddMovieContainer = () => {
  const [isModalvisible, setModalVisability] = useState(false);
  
  return (
    <>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        className="add-movie-button"
        onClick={() => setModalVisability(true)}
      >
        Add movie
      </Button>
      <Modal
        visible={isModalvisible}
        onCancel={() => setModalVisability(false)}
        footer={null}
        title="Add Movie"
        wrapClassName="add-movie-modal"
      >
        <AddMovieForm />
      </Modal>
    </>
  );
};

export default AddMovieContainer;
