import React, { useState } from 'react'
import { Badge } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import ThemeProvider from 'react-bootstrap/esm/ThemeProvider'
import './Dashboard.css'

export default function Dashboard() {
  const [show, setShow] = useState(true)
  return (
    <div>
      <Container>
        <Stack direction="horizontal" gap={2}>
          <Button as="a" variant="primary">
            Button as link
          </Button>
          <Button as="a" variant="success">
            Button as link
          </Button>
        </Stack>
        <h1>
          Example heading
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
        <Alert dismissible variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Change this and that and try again.</p>
        </Alert>
        <Alert show={show} variant="success">
          <Alert.Heading>My Alert</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              size="xxl"
              onClick={() => setShow(false)}
              variant="outline-success"
            >
              Close me
            </Button>
          </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

        <ThemeProvider prefixes={{ btn: 'my-btn' }}>
          <Button variant="primary">My Button</Button>
        </ThemeProvider>
        <Button bsPrefix="super-btn" variant="primary">
          Super button
        </Button>

        <Stack direction="horizontal" gap={3}>
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            title="Light dropdown"
            className="mt-2"
            data-bs-theme="light"
          >
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            title="Dark dropdown"
            className="mt-2"
            data-bs-theme="dark"
          >
            <Dropdown.Item href="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
          </DropdownButton>
        </Stack>
      </Container>
    </div>
  )
}
