import React from 'react';
import './header.scss';
import { Button } from 'antd';
import Logo from '../logo';
import { PlusOutlined } from '@ant-design/icons';
import SearchPanel from '../../components/search-panel';

const Header = () => {
  return (
    <header className="header">
      <div className="header__row">
          <Logo />
          <Button type="primary"
                  icon={<PlusOutlined />}
                  className="add-movie-button">Add movie</Button>
      </div>
      <SearchPanel />
    </header>
  );
};

export default Header;