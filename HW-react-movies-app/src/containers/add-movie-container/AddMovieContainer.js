import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import AddMovieForm from '../../components/add-movie-form';

class AddMovieContainer extends Component {
  state = { isModalvisible: false };

  showAddMovieForm = () => {
    this.setState({
      isModalvisible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalvisible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary"
              icon={<PlusOutlined />}
              className="add-movie-button"
              onClick={this.showAddMovieForm}>
          Add movie
        </Button>
        <Modal visible={this.state.isModalvisible}
               onCancel={this.handleCancel}
               footer={null}
               title="Add Movie"
               wrapClassName="add-movie-modal">
          <AddMovieForm />
        </Modal>
      </>
    );
  }
};

export default AddMovieContainer;