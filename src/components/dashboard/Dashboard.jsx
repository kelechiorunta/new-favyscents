import React, { useState, useRef } from 'react'
import { Badge } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import ThemeProvider from 'react-bootstrap/esm/ThemeProvider'
import './Dashboard.css'
import MainHeader from '../mainheader/MainHeader.jsx'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { Form } from 'react-bootstrap'

export default function Dashboard() {
  const [show, setShow] = useState(true)
  const passwordRef = useRef(null)
  const { Control, Label, Group, Text, Select } = Form

  const handleClick = () => {
    alert(passwordRef.current?.name.toString())
  }
  return (
    <div>
      <Container fluid="md" bsPrefix="container" as={'div'}>
        <div style={{ position: 'absolute' }}>
          <MainHeader />
        </div>
        <div style={{ margin: '220px 0' }}>
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
          <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
            prefixes={{ btn: 'my-btn' }}
          >
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

          <SSRProvider>
            <h1>Server Side Rendering</h1>
          </SSRProvider>
        </div>

        <Row className="justify-content-md-center bg-black text-white">
          <Col>
            <h3 className="border-white text-center">1 of 2</h3>
          </Col>
          <Col>
            <h3 className="border-white text-center">2 of 2</h3>
          </Col>
        </Row>
        <Row lg md>
          <Col>Column 1</Col>
          <Col>Column 2</Col>
          <Col>Column 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col
            lg={4}
            sm={6}
            md={{ span: 4 }}
            xs={{ span: 12, offset: '0' }}
            className="border-white bg-black text-white text-center mb-2"
          >
            Thanks everyone
          </Col>
          <Col
            lg={4}
            sm={6}
            md={{ span: 4 }}
            xs={{ span: 12, offset: '0' }}
            className="bg-black text-white text-center mb-2"
          >
            You're great
          </Col>
          <Col
            lg={4}
            sm={{ span: 6 }}
            md={{ span: 4 }}
            xs={{ span: 12, offset: '12' }}
            className="bg-black text-white text-center mb-2"
          >
            It is well
          </Col>
        </Row>

        <Stack className="col-lg mx-auto" gap={3} direction="horizontal">
          <Col lg={5}>
            <h1>Heading 1</h1>
          </Col>
          <Col lg={5}>
            <h1>Heading 2</h1>
          </Col>
          {/* <Col>
            <div className="vr" />
          </Col> */}
          <Col lg={2}>
            <h1>Heading 3</h1>
          </Col>
        </Stack>

        <Form>
          <Stack className="flex-wrap" direction="vertical" gap={2}>
            <Group className="mb-3 col-md-6" id="formName">
              <Label>Name</Label>
              <Control
                type="text"
                name="name"
                className="me-auto"
                placeholder="Enter Name please.."
              />
              <Text className="text-muted">Your details are safe</Text>
            </Group>

            <Group className="mb-3 col-md-6" id="formEmail">
              <Label className="">Email</Label>
              <Control
                type="email"
                name="email"
                className="me-auto"
                placeholder="Enter Email please.."
              />
              <Text className="text-muted">Your Email details are safe</Text>
            </Group>

            <Group className="mb-3 col-md-6" id="formPassword">
              <Label className="">Password</Label>
              <Control
                ref={passwordRef}
                type="password"
                name="password"
                className="me-auto"
                placeholder="Enter Password please.."
              />
              <Text className="text-muted">Your Password details are safe</Text>
            </Group>

            <Group className="mb-3 col-md-6" id="formCountry">
              <Label className="">Select Country</Label>
              <Select className="p-2">
                <option value="nigeria">Nigeria</option>
                <option value="algeria">Algeria</option>
                <option value="cameroun">Cameroun</option>
                <option value="ivory-coast">Ivory Coast</option>
                <option value="ghana">Ghana</option>
              </Select>
            </Group>
            <Button
              onClick={handleClick}
              className="col-md-2 mb-3"
              variant="primary"
            >
              Submit
            </Button>
          </Stack>
        </Form>
      </Container>
    </div>
  )
}
