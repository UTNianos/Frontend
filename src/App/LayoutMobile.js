import React from 'react';
import Navbar from '../Navbar/Container';
import { Layout, Affix } from 'antd';
import './App.css';

const {Content, Header } = Layout;

const headerStyle = {
  width: '100%',
  height: '100%',
  background: '#fff',
  borderBottom: '1px solid gainsboro',
  padding: '0px'
};

const contentStyle = {
  paddingTop: '50px',
  paddingLeft: '0px',
  paddingRight: '0px'
};

const LayoutMobile = ({children}) => {

  return(
  <Layout>

    <Header style={headerStyle}>
      <Affix>
        <Navbar mobile={true} />
      </Affix>
    </Header>

    <Content style={contentStyle} className="mobile">
      {children}
    </Content>

 </Layout>
 );

}


export default LayoutMobile;
