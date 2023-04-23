import React, { useState } from "react";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

import "./index.css";
import { ReactLogo } from "../../assets";
import { HOME, TEST_ROUTE } from "../../navigation/paths";

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className="main-layout">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <ReactLogo width={40} height={40} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <Link to={HOME}>Valor presente</Link>,
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: <Link to={TEST_ROUTE}>TEST_ROUTE</Link>,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "16px",
            minHeight: 280,
          }}
          className="content-layout"
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
