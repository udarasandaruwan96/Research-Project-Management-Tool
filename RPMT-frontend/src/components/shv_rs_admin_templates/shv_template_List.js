import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
const API_URL = 'http://localhost:5000';

const TemplateList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/TemplategetAllFiles`);
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
      const result = await axios.get(`${API_URL}/Templatedownload/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading Template. Try again later');
      }
    }
  };

    //search..........................
    const filteredItems = filesList.filter((sup) =>
    sup.templates.toLocaleLowerCase().includes(filterText),
      
    );
    const filesLists = filterText ? filteredItems : filesList;
  return (
    <div>
    <h1 className="h3 mb-3 font-weight-normal" ><font face = "Comic sans MS" size =""><b>Uploaded Templates</b></font></h1>
    <div className="container">
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
            <th>Description</th>
            <th>Uploaded Date</th>
            <th>Download Template</th> 
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesLists.map(
              ({ _id, templates, createdAt, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td className="file-title">{templates}</td>
                  <td className="file-title">{createdAt}</td>
                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Click here to download
                    </a>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No templates found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table><br/>
      <a href='/dashboard'>
      <button type="button" class="btn btn-danger">Back</button>
    </a>
    </div>
    </div>
  );
};

export default TemplateList;