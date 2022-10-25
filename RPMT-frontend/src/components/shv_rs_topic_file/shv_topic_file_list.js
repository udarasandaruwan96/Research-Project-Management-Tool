import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const TopicFilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/TopicgetAllFiles`);
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
      const result = await axios.get(`${API_URL}/Topicdownload/${id}`, {
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

    //search..........................
    const filteredItems = filesList.filter((sup) =>
    sup.ResTopicFileGroupId.toLocaleLowerCase().includes(filterText),
    
  );
  const filesLists = filterText ? filteredItems : filesList;
  
  return (
    <div>
          &nbsp;<a href = "/stdHome"><button className="btn btn-success">Back</button></a>
    <div className="container">
      <br/>
    <center><h2>Research Topic Details Documents</h2></center><br/>
    <form action="">
                  <input
                    className="float-right"
                    type="text"
                    placeholder="Search"
                    name="search"
                    onChange={(e) =>
                      setFilterText(e.target.value.toLocaleLowerCase())
                    }/>
      </form><br/>{" "}
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <br/>
      <table className="files-table">
        <thead>
          <tr>
            <th>Group ID</th>
            <th>Supervisor</th>
            <th>Research Topic</th>
            <th>Panel</th>
            <th>Submitted Date</th>
            <th>Download File</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesLists.map(
              ({ _id, ResTopicFileGroupId, ResTopicFileSupervisor, ResTopicFileTopic, ResTopicFilePanel, createdAt, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{ResTopicFileGroupId}</td>
                  <td className="file-title">{ResTopicFileSupervisor}</td>
                  <td className="file-title">{ResTopicFileTopic}</td>
                  <td className="file-title">{ResTopicFilePanel}</td>
                  <td className="file-title">{createdAt}</td>
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
      </table><br/>
      <a href='/stdHome'>
      <button type="button" class="btn btn-danger">Back</button>
      </a>
    </div>
    </div>
  );
};

export default TopicFilesList;