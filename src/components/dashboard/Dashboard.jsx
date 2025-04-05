import React, { useState, useRef } from 'react'
import {
  Container,
  Form,
  Button,
  Stack,
  FloatingLabel,
  InputGroup,
  Row,
  Col,
  Accordion,
} from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import MainHeader from '../mainheader/MainHeader.jsx'
import './Dashboard.css'
import Loader from '../loader/Loader.jsx'

export default function Dashboard() {
  const passwordRef = useRef(null)
  const [toggled, setToggled] = useState(false)

  const { Item, Body, Header } = Accordion

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(7, 'Name must be at least 7 characters')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters')
      .required('Required'),
    textarea: yup
      .string()
      .min(14, 'Must be at least 14 characters')
      .required('Required'),
    gender: yup
      .string()
      .oneOf(['Male', 'Female'], 'Invalid gender')
      .required('Required'),
    country: yup
      .string()
      .oneOf(['Nigeria', 'Algeria', 'Ghana'], 'Invalid country')
      .required('Required'),
  })

  return (
    <Container fluid="md">
      <div style={{ position: 'absolute' }}>
        <MainHeader />
      </div>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          textarea: '',
          gender: '',
          mode: false,
          country: 'Nigeria',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) =>
          setTimeout(() => {
            alert(JSON.stringify(values), null, 2)
            setSubmitting(false)
          }, 3000)
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Form
            style={{ marginTop: '200px' }}
            noValidate
            onSubmit={handleSubmit}
          >
            <Row className="col-sm-12 col-md-12 col-lg-6">
              <Stack direction="vertical" gap={3}>
                {/* Name */}

                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.name && errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Email */}
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Password */}
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={passwordRef}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Textarea */}
                <Form.Group controlId="formTextarea">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="textarea"
                    value={values.textarea}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.textarea && errors.textarea}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.textarea}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Gender */}
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.gender === 'Male'}
                      isInvalid={touched.gender && errors.gender}
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.gender === 'Female'}
                      isInvalid={touched.gender && errors.gender}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.gender}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>

                {/* Country Select */}
                <Form.Group controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Select
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.country && errors.country}
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Ivory-Coast">Ivory Coast</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Submit Button */}
                <Button
                  className="col-sm-12 col-md-6 col-lg-4"
                  type="submit"
                  variant="primary"
                >
                  {isSubmitting && <Loader />}
                  Submit
                </Button>
              </Stack>
            </Row>
          </Form>
        )}
      </Formik>

      <Row md>
        <Accordion>
          <Item className="mt-6 col-12-md col-6-lg">
            <Header>Accordion 1</Header>
            <Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Body>
          </Item>
        </Accordion>
      </Row>
    </Container>
  )
}

// import React, { useState, useRef } from 'react'
// import {
//   Badge,
//   FloatingLabel,
//   FormFloating,
//   SplitButton,
// } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import { Stack } from 'react-bootstrap'
// import { Alert } from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap'
// import { DropdownButton } from 'react-bootstrap'
// import { Row } from 'react-bootstrap'
// import { Col } from 'react-bootstrap'
// // import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
// import ThemeProvider from 'react-bootstrap/esm/ThemeProvider'
// import './Dashboard.css'
// import MainHeader from '../mainheader/MainHeader.jsx'
// import SSRProvider from 'react-bootstrap/SSRProvider'
// import { Form } from 'react-bootstrap'
// import { InputGroup } from 'react-bootstrap'
// import { Formik } from 'formik'
// import * as yup from 'yup'

// export default function Dashboard() {
//   const [show, setShow] = useState(true)
//   const passwordRef = useRef(null)
//   const [toggled, setToggled] = useState(false)

//   const { Control, Label, Group, Text, Select, Check, Range, Floating } = Form
//   const { Item, Divider } = Dropdown
//   const { Feedback } = Control
//   const [validated, setValidated] = useState(null)

//   const schema = yup.object().shape({
//     name: yup
//       .string()
//       .min(7, 'Name cannot be less than seven characters')
//       .required('Required'),
//     email: yup.string().email('Email must be valid').required('Required'),
//     password: yup
//       .string()
//       .min(7, 'Password cannot be less than seven characters')
//       .required('Required'),
//     textarea: yup
//       .string()
//       .min(14, 'Comment cannot be less than fourteen characters')
//       .required('Required'),
//     gender: yup
//       .string()
//       .oneOf(['Male', 'Female'], 'Gender must be either male or female')
//       .required('Required'),
//     country: yup
//       .string()
//       .oneOf(['Nigeria', 'Algeria', 'Ghana', 'Ivory-Coast'], 'Invalid Country')
//       .required('Required'),
//   })

// const handleClick = () => {
//   // alert(passwordRef.current?.name.toString())
//   alert(JSON.stringify({ ...formdata, mode: toggled }))
// }

//formik formik.handleChange = (event) => {
//   const { name, value } = event.target
//   setFormData((prev) => ({ ...prev, [name]: value }))
// }

// const handleSubmit = (event) => {
//   const form = event.currentTarget
//   if (form.checkValidity() === false) {
//     event.preventDefault()
//     event.stopPropagation()
//   }
//   setValidated(true)
// }

//   return (
//     <div>
//       <Container fluid="md" bsPrefix="container" as={'div'}>
//         <div style={{ position: 'absolute' }}>
//           <MainHeader />
//         </div>

//         {/* Formik integration */}

//         <Formik
//           initialValues={{
//             name: '',
//             email: '',
//             password: '',
//             textarea: '',
//             gender: '',
//             mode: false,
//             country: 'Nigeria',
//           }}
//           validationSchema={schema}
//           onSubmit={(values) => console.log(values)}
//         >
//           {(formik) => (
//             <Form
//               style={{ marginTop: '200px' }}
//               noValidate
//               onSubmit={formik.handleSubmit}
//             >
//               <Stack className="flex-wrap" direction="vertical" gap={2}>
//                 {/* Name Control */}
//                 <Group className="mb-3 col-md-12 col-lg-6" id="formName">
//                   <Label htmlFor="name">Name</Label>
//                   <Control
//                     required
//                     onChange={formik.handleChange}
//                     value={formik.values.name}
//                     id="name"
//                     type="text"
//                     name="name"
//                     className="me-auto"
//                     placeholder="Enter Name please.."
//                     isValid={formik.touched.name && !formik.errors.name}
//                   />

//                   <Feedback>Correct Name</Feedback>
//                   <Feedback type="invalid">{formik.errors.name}</Feedback>
//                   <Text className="text-muted">Your details are safe</Text>
//                 </Group>

//                 {/* Email Control */}
//                 <Group className="mb-3 col-md-12 col-lg-6" id="formEmail">
//                   <Label htmlFor="email" className="">
//                     Email
//                   </Label>
//                   <Control
//                     required
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     id="email"
//                     type="email"
//                     name="email"
//                     className="me-auto"
//                     placeholder="Enter Email please.."
//                     isValid={formik.touched.email && !formik.errors.email}
//                   />
//                   <Feedback>Correct Email</Feedback>
//                   <Feedback type="invalid">{formik.errors.email}</Feedback>
//                   <Text className="text-muted">
//                     Your Email details are safe
//                   </Text>
//                 </Group>

//                 {/* Password Control */}
//                 <Group className="mb-3 col-md-12 col-lg-6" id="formPassword">
//                   <Label htmlFor="password" className="">
//                     Password
//                   </Label>
//                   <Control
//                     required
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                     ref={passwordRef}
//                     id="password"
//                     type="password"
//                     name="password"
//                     className="me-auto"
//                     placeholder="Enter Password please.."
//                     isValid={formik.touched.password && !formik.errors.password}
//                   />
//                   <Feedback>Correct Password</Feedback>
//                   <Feedback type="invalid">{formik.errors.password}</Feedback>
//                   <Text className="text-muted">
//                     Your Password details are safe
//                   </Text>
//                 </Group>

//                 {/* TextArea Control */}
//                 <Group className="mb-3 col-md-12 col-lg-6" id="formComments">
//                   <Label htmlFor="textarea" className="">
//                     Comments
//                   </Label>
//                   <Control
//                     required
//                     onChange={formik.handleChange}
//                     id="textarea"
//                     as={'textarea'}
//                     rows={8}
//                     name="textarea"
//                     className="me-auto"
//                     placeholder="Enter Comments please.."
//                     aria-describedby="passwordHelpBlock"
//                     isValid={formik.touched.textarea && !formik.errors.textarea}
//                   />
//                   <Feedback>Looks Good</Feedback>
//                   <Feedback type="invalid">{formik.errors.textarea}</Feedback>
//                   <Text id="passwordHelpBlock" muted className="text-muted">
//                     Your Comments are subjective
//                   </Text>
//                 </Group>

//                 {/* Radio/Checkbox Control */}

//                 <Group className="mb-3 col-md-12 col-lg-6" id="formComments">
//                   <Label htmlFor="textarea" className="">
//                     Gender
//                   </Label>
//                   <Stack className="col-md-4" direction="horizontal" gap={2}>
//                     <InputGroup hasValidation>
//                       <Check
//                         required
//                         inline
//                         onChange={formik.handleChange}
//                         id="check-male"
//                         type={'radio'}
//                         name="gender"
//                         className="me-auto col-md-2"
//                         label="Male"
//                         value={'Male'}
//                         feedbackTooltip
//                         feedback={formik.errors.gender}
//                         isValid={formik.touched.gender && !formik.errors.gender}
//                       />
//                       <Check
//                         inline
//                         required
//                         onChange={formik.handleChange}
//                         id="check-female"
//                         type={'radio'}
//                         name="gender"
//                         className="me-auto col-md-2"
//                         label="Female"
//                         value={'Female'}
//                         feedbackTooltip
//                         feedback={formik.errors.gender}
//                         isValid={formik.touched.gender && !formik.errors.gender}
//                       />

//                       {/* <Feedback>
//                         feedback="You must select a gender before submitting."
//                       </Feedback>
//                       <Feedback type="invalid"></Feedback> */}
//                     </InputGroup>
//                   </Stack>
//                 </Group>

//                 {/* Switch Control */}

//                 <Group className="mb-3 col-md-12 col-lg-6" id="formComments">
//                   <Label htmlFor="textarea" className="">
//                     Mode
//                   </Label>
//                   <Stack direction="horizontal" gap={2}>
//                     <Check
//                       onChange={(event) => setToggled(event.target.checked)}
//                       id="check-mode"
//                       type={'switch'}
//                       name="mode"
//                       className="me-auto col-md-12"
//                       label="Active Mode"
//                       value={toggled}
//                       //   checked={formdata.mode}
//                     />
//                   </Stack>
//                 </Group>

//                 <Range />

//                 <Group className="col-lg-6 col-md-12">
//                   <InputGroup hasValidation size="md">
//                     <InputGroup.Text id="small_group_name">
//                       Full Names
//                     </InputGroup.Text>
//                     <Control
//                       type="text"
//                       id="group_name"
//                       aria-label="small"
//                       aria-describedby="small_group_name"
//                     />
//                     <Feedback>Correct Names</Feedback>
//                     <Feedback type="invalid">
//                       Please enter a valid full name
//                     </Feedback>
//                   </InputGroup>
//                 </Group>

//                 <Group className="col-lg-6 col-md-12">
//                   <InputGroup title="State">
//                     <DropdownButton
//                       variant="outline-secondary"
//                       align={'end'}
//                       title="State"
//                     >
//                       <Item href="#">Lagos</Item>
//                       <Item href="#">Edo</Item>
//                       <Item href="#">Delta</Item>
//                       <Item href="#">CrossRiver</Item>
//                       <Divider />
//                       <Item href="#">Plateau</Item>
//                     </DropdownButton>
//                     <Control type="text" />
//                   </InputGroup>
//                 </Group>

//                 <Group className="col-lg-6 col-md-12">
//                   <InputGroup title="L.G.A">
//                     <Control
//                       type="text"
//                       aria-label="List of Local Governnments"
//                     />
//                     <SplitButton
//                       variant="outline-secondary"
//                       alignRight
//                       title="L.G.A"
//                       aria-label="List of Local Governments"
//                     >
//                       <Item href="#">Okota</Item>
//                       <Item href="#">Isolo</Item>
//                       <Item href="#">Ago</Item>
//                       <Item href="#">Ikotun</Item>
//                     </SplitButton>
//                   </InputGroup>
//                 </Group>

//                 {/* Floating email control */}
//                 <Group className="col-lg-6 col-md-12">
//                   {/* <InputGroup title="floating-email"> */}
//                   <FloatingLabel label="Email" controlId="email_input">
//                     <Control type="email" placeholder="Enter Email" />
//                   </FloatingLabel>
//                   {/* </InputGroup> */}
//                 </Group>

//                 {/* Floating textarea control */}
//                 <Group className="col-lg-12 col-md-12">
//                   <Row className="g-sm-2 g-md-1 g-lg-1 ">
//                     {/* <Col lg> */}
//                     {/* Without the Col the floatinglabel is displayed block and takes full-width. */}
//                     {/* With the Col the floatinglabel is displayed in a grid format and takes the average width based on the number of columns */}
//                     <FloatingLabel
//                       as={Col}
//                       controlId="textarea_input"
//                       label="Comments"
//                     >
//                       <Control
//                         as="textarea"
//                         cols={8}
//                         placeholder="Enter Comment"
//                         aria-labelledby="textarea_input"
//                       />
//                     </FloatingLabel>
//                     {/* </Col> */}
//                     <Col lg>
//                       <FloatingLabel
//                         controlId="textarea_input"
//                         label="Enter Post"
//                       >
//                         <Control
//                           as={'textarea'}
//                           cols={8}
//                           placeholder="Enter Post"
//                           aria-labelledby="textarea_input"
//                         />
//                       </FloatingLabel>
//                     </Col>
//                   </Row>
//                 </Group>

//                 {/* Floating nested controls */}

//                 <Group className="col-lg-6 col-md-12">
//                   <Floating>
//                     <Control
//                       placeholder="Enter Institution"
//                       id="institution_id"
//                       type="text"
//                       aria-labelledby="institution_input"
//                     />
//                     <label htmlFor="institution_id">Institution</label>
//                   </Floating>
//                 </Group>

//                 {/* Setting up grid controls */}

//                 <Group className="g-2" controlId="control_ids">
//                   <Row className="align-items-center">
//                     <InputGroup as={Col}>
//                       <InputGroup.Text id="home_address">
//                         Home Address
//                       </InputGroup.Text>
//                       <Control
//                         type="text"
//                         aria-labelledby="home_address"
//                         placeholder="Home Address"
//                       />
//                     </InputGroup>
//                     <InputGroup as={Col}>
//                       <InputGroup.Text id="office_address">
//                         Office Address
//                       </InputGroup.Text>
//                       <Control
//                         type="text"
//                         aria-labelledby="office_address"
//                         placeholder="Office Address"
//                       />
//                     </InputGroup>
//                   </Row>
//                 </Group>

//                 {/* Floating select control */}
//                 <Group className="col-lg-6 col-md-12">
//                   <FloatingLabel
//                     controlId="select_input"
//                     label="Gospel Artists"
//                   >
//                     <Select aria-labelledby="select_input">
//                       <option>Select Your Best Gospel Artists</option>
//                       <option value={'Bebe & Cece Winans'}>Bebe & Cece</option>
//                       <option value={'Fred Hammond'}>Fred Hammond</option>
//                       <option value={'Marcus Cole'}>Marcus Cole</option>
//                       <option value={'Donnie McClurkin'}>
//                         Donnie McClurkin
//                       </option>
//                     </Select>
//                   </FloatingLabel>
//                 </Group>

//                 {/* Select Control */}
//                 <Group className="mb-3 col-md-12 col-lg-6" id="formCountry">
//                   <Label id="country" className="">
//                     Select Country
//                   </Label>
//                   <Select
//                     onChange={formik.handleChange}
//                     name="country"
//                     className="p-2"
//                   >
//                     <option value="Nigeria">Nigeria</option>
//                     <option value="Algeria">Algeria</option>
//                     <option value="Cameroun">Cameroun</option>
//                     <option value="Ivory-coast">Ivory Coast</option>
//                     <option value="Ghana">Ghana</option>
//                   </Select>
//                   <Feedback>Looks Good</Feedback>
//                   <Feedback type="invalid">{formik.errors.country}</Feedback>
//                 </Group>
//                 <Button
//                   type="submit"
//                   className="col-md-2 mb-3"
//                   variant="primary"
//                 >
//                   Submit
//                 </Button>
//               </Stack>
//             </Form>
//           )}
//         </Formik>
//       </Container>
//     </div>
//   )
// }
