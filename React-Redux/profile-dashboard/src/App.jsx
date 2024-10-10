import "./App.css";
import { Layout, Breadcrumb, theme, Menu } from "antd";
import {useState} from "react";
import Logo from "./Components/Logo/Logo";
import MenuItemList from "./Components/Menu/MenuItemList";
import ToggleThemeSwitch from "./Components/Theme/ToggleThemeSwitch";
const { Header, Sider, Content, Footer } = Layout;
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import Dashboard from "./Pages/Dashboard/Dashboard";

import { Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { Avatar } from 'antd';
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // link dropdown
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }
  return (
    <>
      <Layout>
        <Sider className="sidebar" theme={darkTheme ? 'dark' : 'light'} trigger={null} collapsible collapsed={collapsed}>
          <Logo />
          <MenuItemList darkTheme={darkTheme}/>
        </Sider>
        <Layout>
        <Header>
          
        <Dropdown className="pull-right"
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar size="large" icon={<UserOutlined />} />
       
      </Space>
    </a>
  </Dropdown>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Button  type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}></Button>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Packages</Menu.Item>
          <Menu.Item key="3">Events</Menu.Item>
          <Menu.Item key="4">Blogs</Menu.Item>
         

        </Menu>
        
        </Header>
          <Content>
          <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
         
        </Breadcrumb>
        <div className="content-area"
          style={{
            
            minHeight: 380,
            background: colorBgContainer,
            
          }}
        >
          <Dashboard />
          </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
           ©{new Date().getFullYear()} Created by Sachin
          </Footer>
        </Layout>
        
             <ToggleThemeSwitch darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        
      </Layout>
    </>
  );
}

export default App;
