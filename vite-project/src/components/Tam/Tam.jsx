import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";
import Contenti from "./Contenti";
import { useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Tab = () => {
  const [selectedMenuId, setSelectedMenuId] = useState("1");
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory(); 

  const handleMenuClick = (e) => {
    setSelectedMenuId(e.key);
    if (e.key === "2") {
      history.push("/login");
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleMenuClick}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<RiLoginBoxLine />}>
            Login
          </Menu.Item>
          <Menu.Item key="3" icon={<FaRegMoneyBillAlt />}>
            Registr
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280 }}>
          <Contenti id={selectedMenuId} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Tab;
