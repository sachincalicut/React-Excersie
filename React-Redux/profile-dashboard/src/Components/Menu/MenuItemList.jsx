import {
  LayoutOutlined,
  AppstoreOutlined,
  FlagOutlined,
  MehOutlined,
  FileTextOutlined,
  SettingOutlined,
  ProfileOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const MenuItemList = ({darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar" >
      <Menu.Item key="dashboard" icon={<LayoutOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="jobs" icon={<ProfileOutlined />}>
        Jobs
      </Menu.Item>
      <Menu.Item key="applications" icon={<AppstoreOutlined />}>
        Applications
      </Menu.Item>
      <Menu.Item key="followers" icon={<MehOutlined />}>
        Followers
      </Menu.Item>

      <Menu.SubMenu key="sub-invt" icon={<FlagOutlined />} title="My Inventory">
        <Menu.Item key="Task-1">Task 1 </Menu.Item>
        <Menu.Item key="Task-2">Task 2 </Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="profile" icon={<FileTextOutlined />}>
        Company Profile
      </Menu.Item>

      <Menu.Item key="users" icon={<TeamOutlined />}>
        All Users
      </Menu.Item>
      <Menu.Item key="account" icon={<SettingOutlined />}>
        My Account
      </Menu.Item>
    </Menu>
  );
};

export default MenuItemList;
