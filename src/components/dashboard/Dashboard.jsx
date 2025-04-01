import React, { useState, useRef } from 'react'
import {
  Badge,
  FloatingLabel,
  FormFloating,
  SplitButton,
} from 'react-bootstrap'
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
import { InputGroup } from 'react-bootstrap'

export default function Dashboard() {
  const [show, setShow] = useState(true)
  const passwordRef = useRef(null)
  const [toggled, setToggled] = useState(false)
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    textarea: '',
    gender: '',
    mode: false,
    country: 'Nigeria',
  })
  const { Control, Label, Group, Text, Select, Check, Range, Floating } = Form
  const { Item, Divider } = Dropdown
  const { Feedback } = Control
  const [validated, setValidated] = useState(null)

  const handleClick = () => {
    // alert(passwordRef.current?.name.toString())
    alert(JSON.stringify({ ...formdata, mode: toggled }))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
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

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Stack className="flex-wrap" direction="vertical" gap={2}>
            {/* Name Control */}
            <Group className="mb-3 col-md-12 col-lg-6" id="formName">
              <Label htmlFor="name">Name</Label>
              <Control
                required
                onChange={handleChange}
                value={formdata.name}
                id="name"
                type="text"
                name="name"
                className="me-auto"
                placeholder="Enter Name please.."
              />

              <Feedback>Correct Name</Feedback>
              <Feedback type="invalid">Please Enter a Valid Name</Feedback>
              <Text className="text-muted">Your details are safe</Text>
            </Group>

            {/* Email Control */}
            <Group className="mb-3 col-md-12 col-lg-6" id="formEmail">
              <Label htmlFor="email" className="">
                Email
              </Label>
              <Control
                required
                onChange={handleChange}
                value={formdata.email}
                id="email"
                type="email"
                name="email"
                className="me-auto"
                placeholder="Enter Email please.."
              />
              <Feedback>Correct Email</Feedback>
              <Feedback type="invalid">Please enter a valid email</Feedback>
              <Text className="text-muted">Your Email details are safe</Text>
            </Group>

            {/* Password Control */}
            <Group className="mb-3 col-md-12 col-lg-6" id="formPassword">
              <Label htmlFor="password" className="">
                Password
              </Label>
              <Control
                required
                onChange={handleChange}
                value={formdata.password}
                ref={passwordRef}
                id="password"
                type="password"
                name="password"
                className="me-auto"
                placeholder="Enter Password please.."
              />
              <Text className="text-muted">Your Password details are safe</Text>
            </Group>

            {/* TextArea Control */}
            <Group className="mb-3 col-md-12 col-lg-6" id="formComments">
              <Label htmlFor="textarea" className="">
                Comments
              </Label>
              <Control
                required
                onChange={handleChange}
                id="textarea"
                as={'textarea'}
                rows={8}
                name="textarea"
                className="me-auto"
                placeholder="Enter Comments please.."
                aria-describedby="passwordHelpBlock"
              />
              <Text id="passwordHelpBlock" muted className="text-muted">
                Your Comments are subjective
              </Text>
            </Group>

            {/* Radio/Checkbox Control */}

            <Group className="mb-3 col-md-12 col-lg-6" id="formComments">
              <Label htmlFor="textarea" className="">
                Gender
              </Label>
              <Stack className="col-md-4" direction="horizontal" gap={2}>
                <Check
                  required
                  inline
                  onChange={handleChange}
                  id="check-male"
                  type={'radio'}
                  name="gender"
                  className="me-auto col-md-2"
                  label="Male"
                  value={'Male'}
                />
                <Check
                  inline
                  required
                  onChange={handleChange}
                  id="check-female"
                  type={'radio'}
                  name="gender"
                  className="me-auto col-md-2"
                  label="Female"
                  value={'Female'}
                />
              </Stack>
            </Group>

            {/* Switch Control */}

            <Group className="mb-3 col-md-12 col-lg-6" id="formComments">
              <Label htmlFor="textarea" className="">
                Mode
              </Label>
              <Stack direction="horizontal" gap={2}>
                <Check
                  onChange={(event) => setToggled(event.target.checked)}
                  id="check-mode"
                  type={'switch'}
                  name="mode"
                  className="me-auto col-md-12"
                  label="Active Mode"
                  value={toggled}
                  //   checked={formdata.mode}
                />
              </Stack>
            </Group>

            <Range />

            <Group className="col-lg-6 col-md-12">
              <InputGroup size="md">
                <InputGroup.Text id="small_group_name">
                  Full Names
                </InputGroup.Text>
                <Control
                  type="text"
                  id="group_name"
                  aria-label="small"
                  aria-describedby="small_group_name"
                />
              </InputGroup>
            </Group>

            <Group className="col-lg-6 col-md-12">
              <InputGroup title="State">
                <DropdownButton
                  variant="outline-secondary"
                  align={'end'}
                  title="State"
                >
                  <Item href="#">Lagos</Item>
                  <Item href="#">Edo</Item>
                  <Item href="#">Delta</Item>
                  <Item href="#">CrossRiver</Item>
                  <Divider />
                  <Item href="#">Plateau</Item>
                </DropdownButton>
                <Control type="text" />
              </InputGroup>
            </Group>

            <Group className="col-lg-6 col-md-12">
              <InputGroup title="L.G.A">
                <Control type="text" aria-label="List of Local Governnments" />
                <SplitButton
                  variant="outline-secondary"
                  alignRight
                  title="L.G.A"
                  aria-label="List of Local Governments"
                >
                  <Item href="#">Okota</Item>
                  <Item href="#">Isolo</Item>
                  <Item href="#">Ago</Item>
                  <Item href="#">Ikotun</Item>
                </SplitButton>
              </InputGroup>
            </Group>

            {/* Floating email control */}
            <Group className="col-lg-6 col-md-12">
              {/* <InputGroup title="floating-email"> */}
              <FloatingLabel label="Email" controlId="email_input">
                <Control type="email" placeholder="Enter Email" />
              </FloatingLabel>
              {/* </InputGroup> */}
            </Group>

            {/* Floating textarea control */}
            <Group className="col-lg-12 col-md-12">
              <Row className="g-sm-2 g-md-1 g-lg-1 ">
                {/* <Col lg> */}
                {/* Without the Col the floatinglabel is displayed block and takes full-width. */}
                {/* With the Col the floatinglabel is displayed in a grid format and takes the average width based on the number of columns */}
                <FloatingLabel
                  as={Col}
                  controlId="textarea_input"
                  label="Comments"
                >
                  <Control
                    as="textarea"
                    cols={8}
                    placeholder="Enter Comment"
                    aria-labelledby="textarea_input"
                  />
                </FloatingLabel>
                {/* </Col> */}
                <Col lg>
                  <FloatingLabel controlId="textarea_input" label="Enter Post">
                    <Control
                      as={'textarea'}
                      cols={8}
                      placeholder="Enter Post"
                      aria-labelledby="textarea_input"
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Group>

            {/* Floating nested controls */}

            <Group className="col-lg-6 col-md-12">
              <Floating>
                <Control
                  placeholder="Enter Institution"
                  id="institution_id"
                  type="text"
                  aria-labelledby="institution_input"
                />
                <label htmlFor="institution_id">Institution</label>
              </Floating>
            </Group>

            {/* Setting up grid controls */}

            <Group className="g-2" controlId="control_ids">
              <Row className="align-items-center">
                <InputGroup as={Col}>
                  <InputGroup.Text id="home_address">
                    Home Address
                  </InputGroup.Text>
                  <Control
                    type="text"
                    aria-labelledby="home_address"
                    placeholder="Home Address"
                  />
                </InputGroup>
                <InputGroup as={Col}>
                  <InputGroup.Text id="office_address">
                    Office Address
                  </InputGroup.Text>
                  <Control
                    type="text"
                    aria-labelledby="office_address"
                    placeholder="Office Address"
                  />
                </InputGroup>
              </Row>
            </Group>

            {/* Floating select control */}
            <Group className="col-lg-6 col-md-12">
              <FloatingLabel controlId="select_input" label="Gospel Artists">
                <Select aria-labelledby="select_input">
                  <option>Select Your Best Gospel Artists</option>
                  <option value={'Bebe & Cece Winans'}>Bebe & Cece</option>
                  <option value={'Fred Hammond'}>Fred Hammond</option>
                  <option value={'Marcus Cole'}>Marcus Cole</option>
                  <option value={'Donnie McClurkin'}>Donnie McClurkin</option>
                </Select>
              </FloatingLabel>
            </Group>

            {/* Select Control */}
            <Group className="mb-3 col-md-12 col-lg-6" id="formCountry">
              <Label id="country" className="">
                Select Country
              </Label>
              <Select onChange={handleChange} name="country" className="p-2">
                <option value="Nigeria">Nigeria</option>
                <option value="Algeria">Algeria</option>
                <option value="Cameroun">Cameroun</option>
                <option value="Ivory-coast">Ivory Coast</option>
                <option value="Ghana">Ghana</option>
              </Select>
            </Group>
            <Button type="submit" className="col-md-2 mb-3" variant="primary">
              Submit
            </Button>
          </Stack>
        </Form>
      </Container>
    </div>
  )
}
