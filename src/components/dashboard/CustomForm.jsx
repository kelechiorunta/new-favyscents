import React from 'react'

export default function CustomForm() {
  return (
    <div>
      {/* <div style={{ margin: '220px 0' }}>
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
      {/* <Col lg={2}>
                      <h1>Heading 3</h1>
                    </Col>
          </Stack>
          </div> */}
    </div>
  )
}
