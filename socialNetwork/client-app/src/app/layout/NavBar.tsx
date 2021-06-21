import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Social Network
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button postitive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}