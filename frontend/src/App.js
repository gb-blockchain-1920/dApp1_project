import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "antd";
import {
  LockOutlined,
  UserOutlined,
  ShareAltOutlined,
  HomeOutlined,
  DownOutlined
} from "@ant-design/icons";

import Register from "./Components/Register";
import IdentityForm from "./Components/IdentityForm";
import SharingPage from "./Components/SharingPage";
import IdentitiesPage from "./Components/IdentitiesPage";
import { checkToken } from "./Utils/ApiInterface";

const { SubMenu } = Menu;

function App() {
  const [current, setCurrent] = React.useState("home");

  const [authenticated, setAuthenticated] = React.useState(false);

  const handleClick = e => {
    setCurrent(e.key);
  };

  React.useEffect(() => {
    async function authenticate() {
      const token = localStorage.getItem("token");
      if (token !== null) {
        const authenticationData = await checkToken(token);
        console.log(authenticationData);
        setAuthenticated(authenticationData);
      }
    }
    authenticate();
  }, []);

  return (
    <div className="App">
      <Router>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">
              <HomeOutlined />
              Home
            </Link>
          </Menu.Item>
          {localStorage.getItem("type") === "user" && (
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <DownOutlined />
                  Identity Management
                </span>
              }
            >
              <Menu.Item key="me">
                <Link to="/me">
                  <UserOutlined />
                  My Identity
                </Link>
              </Menu.Item>
              <Menu.Item key="share">
                <Link to="/share">
                  <ShareAltOutlined />
                  Share Identity
                </Link>
              </Menu.Item>
            </SubMenu>
          )}
          {localStorage.getItem("type") === "company" && (
            <Menu.Item key="identities">
              <Link to="/identities">
                <UserOutlined />
                Identities
              </Link>
            </Menu.Item>
          )}
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
                <LockOutlined />
                Authentication
              </span>
            }
          >
            {authenticated ? (
              <Menu.ItemGroup>
                <Menu.Item
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("type");
                    window.location.replace("/");
                  }}
                  key="setting:1"
                >
                  Log Out
                </Menu.Item>
              </Menu.ItemGroup>
            ) : (
              <Menu.ItemGroup>
                <Menu.Item key="setting:1">
                  <Link to="/register">Register</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            )}
          </SubMenu>
        </Menu>
        <Switch>
          <Route path="/me">
            <IdentityForm />
          </Route>
          <Route path="/share">
            <SharingPage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/identities">
            <IdentitiesPage />
          </Route>
          <Route path="/">home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
