import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col
} from "reactstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      text: ""
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  handleChange = value => {
    this.setState({ text: value });
  };
  onSubmit = event => {
    event.preventDefault();
    const imageLink = event.target.elements.link.value;
    const description = event.target.elements.desc.value;
    if (imageLink && description) {
      this.props.addPhoto({ id: Number(new Date()), imageLink, description });
      this.props.history.push("/");
    }
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div className="form">
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="desc" />
            <ReactQuill
              value={this.state.text}
              modules={AddPhoto.modules}
              formats={AddPhoto.formats}
              onChange={this.handleChange}
            />
            <button>Post</button>
          </form>
        </div>
        <Button color="danger" onClick={this.toggle}>
          {"Modal"}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={"this.props.className"}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="eventname">Event Name</Label>
                <Input
                  type="text"
                  name="eventName"
                  id="eventname"
                  placeholder="Enter event name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="eventType">Event Type</Label>
                <Input type="select" name="eventType" id="eventType">
                  <option>Select event type</option>
                  <option>1</option>
                  <option>2</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="mode">Mode</Label>
                <FormGroup check>
                  <Label check style={{ width: "165px" }}>
                    <Input type="checkbox" /> Audio conference
                  </Label>
                  <Label check style={{ width: "140px" }}>
                    <Input type="checkbox" /> In Person
                  </Label>
                  <Label check style={{ width: "140px" }}>
                    <Input type="checkbox" /> Webex
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>

                <FormGroup check>
                  <Label check style={{ width: "100px" }}>
                    <Input type="radio" name="radio1" /> Off Site
                  </Label>
                  <Label check style={{ width: "140px" }}>
                    <Input type="radio" name="radio1" /> On Site
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="eventname">Audio Conference Dial-in</Label>
                <Input type="text" name="eventName" id="eventname" />
              </FormGroup>
              <FormGroup>
                <Label for="eventname">WebEx Link</Label>
                <Input type="text" name="eventName" id="eventname" />
              </FormGroup>
              <FormGroup>
                <Label for="eventname">Venue</Label>
                <Input type="text" name="eventName" id="eventname" />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="eventType">Region*</Label>
                    <Input type="select" name="eventType" id="eventType">
                      <option>Select region</option>
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6} />
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">Country*</Label>
                    <Input type="select" name="eventType" id="eventType">
                      <option>Select country</option>
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="examplePassword">State/Province*</Label>
                    <Input type="select" name="eventType" id="eventType">
                      <option>Select state</option>
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="exampleEmail">City*</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter event city"
                    />
                  </FormGroup>
                </Col>
                <Col md={8} />
              </Row>
              <FormGroup>
                <Label for="eventname">Street Address*</Label>
                <Input
                  type="text"
                  name="address"
                  id="eventname"
                  placeholder="Enter street address"
                />
              </FormGroup>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="eventType">TimeZone*</Label>
                    <Input type="select" name="eventType" id="eventType">
                      <option>Select time zone</option>
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6} />
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Start Date*</Label>
                    <Input
                      type="date"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter event city"
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">Start Time*</Label>
                    <Input
                      type="date"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter event city"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">End Date*</Label>
                    <Input
                      type="date"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter event city"
                    />
                  </FormGroup>
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="exampleEmail">End Time*</Label>
                    <Input
                      type="date"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter event city"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

AddPhoto.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill AddPhoto formats
 * See https://quilljs.com/docs/formats/
 */
AddPhoto.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
// AddPhoto.propTypes = {
//   placeholder: PropTypes.string,
// }

export default AddPhoto;
