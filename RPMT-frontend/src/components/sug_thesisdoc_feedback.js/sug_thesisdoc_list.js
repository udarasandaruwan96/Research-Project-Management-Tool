import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import Sug_supervioser_page from "../sug_supervisor_page/sug_supervisor_page"
const API_URL = 'http://localhost:5000';

const Sug_ThesisDocFilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/ThesisgetAllFiles`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`${API_URL}/Thesisdownload/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  return (
    <div>
    <Sug_supervioser_page/>
    <div className='contentsug'>
    <div className="container">
    <br/>
    <center><h2>Thesis Documents</h2></center><br/><br/>
    
    <div className="files-container">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <table className="files-table">
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Supervisor</th>
            <th>Research Topic</th>
            <th>Download Thesis Document</th>
            <th> Give Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, ResThesisFileGroupId, ResThesisFileSupervisor, ResThesisFileTopic, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{ResThesisFileGroupId}</td>
                  <td className="file-title">{ResThesisFileSupervisor}</td>
                  <td className="file-title">{ResThesisFileTopic}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                  <td  className="file-title"> <a href={`/ThesisFilesList/${_id}`} > Give Feedback</a>  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Sug_ThesisDocFilesList;