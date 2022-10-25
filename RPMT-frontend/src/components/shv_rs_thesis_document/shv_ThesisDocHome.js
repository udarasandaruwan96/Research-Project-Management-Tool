import React, { useState, useRef } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const API_URL = 'http://localhost:5000';

const ThesisDocHome = (props) => {
  const history = useNavigate();
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    ResThesisFileGroupId: '',
    ResThesisFileSupervisor: '',
    ResThesisFileTopic:''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  // Ondrop function
  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(pdf|doc|docx)$/));
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    event.preventDefault();
    try {
      const { ResThesisFileGroupId, ResThesisFileSupervisor, ResThesisFileTopic } = state;
      if (ResThesisFileGroupId.trim() == '' || ResThesisFileSupervisor.trim() == '' || ResThesisFileTopic.trim() == '' )  {
        swal("Feilds Cannot Be empty !!", "You Must fill all the feilds !!", "error");
      }else if((!name.test(String(ResThesisFileSupervisor)))){
        swal("Invalid Supervisor Name !", "Name cannot contain numbers ! Please enter valid name !", "error");
      }else{
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('ResThesisFileGroupId', ResThesisFileGroupId);
          formData.append('ResThesisFileSupervisor', ResThesisFileSupervisor);
          formData.append('ResThesisFileTopic', ResThesisFileTopic);

          await axios.post(`${API_URL}/Thesisupload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(() => history("/ThesisFilesList"));
          swal("Successful!", "Thesis Document Successfully Submitted !!", "success");
        }else {
          swal("Submission Fail !", "You Must Select a File ! Please Upload a file And Try Again !", "error");
        }
      } 
      
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
    <div className='container'><br/>
    <center><h2>Final Thesis Submission</h2></center><br/><br/>
      <Form className="search-form" onSubmit={handleOnSubmit}>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Row>
          <Col>
            <Form.Group controlId="ResThesisFileGroupId">
              <Form.Control
                type="text"
                name="ResThesisFileGroupId"
                value={state.ResThesisFileGroupId || ''}
                placeholder="Enter Group ID"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="ResThesisFileSupervisor">
              <Form.Control
                type="text"
                name="ResThesisFileSupervisor"
                value={state.ResThesisFileSupervisor || ''}
                placeholder="Enter Supervisor"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="ResThesisFileTopic">
              <Form.Control
                type="text"
                name="ResThesisFileTopic"
                value={state.ResThesisFileTopic || ''}
                placeholder="Enter Research Topic"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* File Upload functionality */}

        <div className="upload-section">
        <Dropzone onDrop={onDrop}
        onDragEnter={() => updateBorder('over')}
        onDragLeave={() => updateBorder('leave')}
        >
        {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
            <input {...getInputProps()} />
            <p>Drag and drop a file OR click here to select a file</p>
            {file && (
                <div>
                <strong>Selected file:</strong> {file.name}
                </div>
            )}
            </div>
        )}
        </Dropzone>

        </div>
        

        <Button variant="primary" type="submit">
          Submit
          </Button>&nbsp;&nbsp;
        <a href='/stdHome'>
        <button type="button" class="btn btn-danger">Back</button>
      </a>
      </Form>
      </div>
    </React.Fragment>
  );
};

export default ThesisDocHome;