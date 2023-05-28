import React, { useState } from 'react';

const EditableTable = () => {
  const [videos, setVideos] = useState([
    { id: 1, description: 'Video 1 description', status: 'Active', url: 'https://example.com/video1', videoTitle: 'Video 1', sectionId: 1 },
    { id: 2, description: 'Video 2 description', status: 'Inactive', url: 'https://example.com/video2', videoTitle: 'Video 2', sectionId: 1 },
    { id: 3, description: 'Video 3 description', status: 'Active', url: 'https://example.com/video3', videoTitle: 'Video 3', sectionId: 2 },
  ]);

  const [editedVideos, setEditedVideos] = useState([]);

  const handleSave = (videoId) => {
    const editedVideo = editedVideos.find(video => video.id === videoId);
    if (editedVideo) {
      // Perform API call or any other action to update the video fields
      console.log(`Updating video ${videoId}:`, editedVideo);
      alert('Data updated successfully!');
    }
  };

  const handleInputChange = (event, videoId, field) => {
    const editedVideo = editedVideos.find(video => video.id === videoId);
    if (editedVideo) {
      // Update the field value in the editedVideos state
      editedVideo[field] = event.target.value;
      setEditedVideos([...editedVideos]);
    } else {
      // Create a new edited video object and add it to the editedVideos state
      const newEditedVideo = { id: videoId, [field]: event.target.value };
      setEditedVideos([...editedVideos, newEditedVideo]);
    }
  };

  return (
    <div className="table-container">
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Status</th>
          <th>URL</th>
          <th>Video Title</th>
          <th>Section ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {videos.map(video => (
          <tr key={video.id}>
            <td>{video.id}</td>
            <td>
              <input
                type="text"
                value={editedVideos.find(v => v.id === video.id)?.description || video.description}
                onChange={event => handleInputChange(event, video.id, 'description')}
              />
            </td>
            <td>
              <input
                type="text"
                value={editedVideos.find(v => v.id === video.id)?.status || video.status}
                onChange={event => handleInputChange(event, video.id, 'status')}
              />
            </td>
            <td>
              <input
                type="text"
                value={editedVideos.find(v => v.id === video.id)?.url || video.url}
                onChange={event => handleInputChange(event, video.id, 'url')}
              />
            </td>
            <td>
              <input
                type="text"
                value={editedVideos.find(v => v.id === video.id)?.videoTitle || video.videoTitle}
                onChange={event => handleInputChange(event, video.id, 'videoTitle')}
              />
            </td>
            <td>{video.sectionId}</td>
            <td>
              <button className="save-button" onClick={() => handleSave(video.id)}>Save</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default EditableTable;

import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const EditPage = () => {
  const [sections, setSections] = useState([
    { id: 1, section_title: 'Section 1' },
    { id: 2, section_title: 'Section 2' },
    { id: 3, section_title: 'Section 3' },
  ]);

  const [videos, setVideos] = useState([
    {
      id: 1,
      video_title: 'Video 1',
      description: 'Description for Video 1',
      status: 'Active',
      url: 'https://www.example.com/video1',
      section_id: 1,
    },
    {
      id: 2,
      video_title: 'Video 2',
      description: 'Description for Video 2',
      status: 'Inactive',
      url: 'https://www.example.com/video2',
      section_id: 1,
    },
    {
      id: 3,
      video_title: 'Video 3',
      description: 'Description for Video 3',
      status: 'Active',
      url: 'https://www.example.com/video3',
      section_id: 2,
    },
  ]);

  // Handle form submission for adding a new section
  const handleAddSection = (event) => {
    event.preventDefault();
    const { sectionTitle } = event.target.elements;

    // Generate a new unique ID for the section
    const newId = sections.length > 0 ? sections[sections.length - 1].id + 1 : 1;

    // Create a new section object
    const newSection = {
      id: newId,
      section_title: sectionTitle.value,
    };

    // Update the sections state with the new section
    setSections(prevSections => [...prevSections, newSection]);

    // Reset the form after submission
    event.target.reset();
  };

  // Handle form submission for adding a new video
  const handleAddVideo = (event) => {
    event.preventDefault();
    const { videoTitle, videoDescription, videoStatus, videoUrl, sectionId } = event.target.elements;

    // Generate a new unique ID for the video
    const newId = videos.length > 0 ? videos[videos.length - 1].id + 1 : 1;

    // Create a new video object
    const newVideo = {
      id: newId,
      video_title: videoTitle.value,
      description: videoDescription.value,
      status: videoStatus.value,
      url: videoUrl.value,
      section_id: parseInt(sectionId.value),
    };

    // Update the videos state with the new video
    setVideos(prevVideos => [...prevVideos, newVideo]);

    // Reset the form after submission
    event.target.reset();
  };

  // Handle video editing
  const handleEditVideo = (id, updatedVideo) => {
    // Find the index of the video in the videos array
    const videoIndex = videos.findIndex(video => video.id === id);

    if (videoIndex !== -1) {
      // Create a new array with the updated video
      const updatedVideos = [...videos];
      updatedVideos[videoIndex] = updatedVideo;

      // Update the videos state with the updated array
      setVideos(updatedVideos);
    }
  };

  return (
    <Container>
      <h1>Edit Page</h1>

      {/* Add Section Form */}
      <Form onSubmit={handleAddSection}>
        <h2>Add Section</h2>
        <FormGroup>
          <Label for="sectionTitle">Section Title</Label>
          <Input type="text" name="sectionTitle" id="sectionTitle" placeholder="Enter section title" required />
        </FormGroup>
        <Button type="submit" color="primary">Add Section</Button>
      </Form>

      {/* Add Video Form */}
      <Form onSubmit={handleAddVideo}>
        <h2>Add Video</h2>
        <FormGroup>
          <Label for="videoTitle">Video Title</Label>
          <Input type="text" name="videoTitle" id="videoTitle" placeholder="Enter video title" required />
        </FormGroup>
        <FormGroup>
          <Label for="videoDescription">Description</Label>
          <Input type="textarea" name="videoDescription" id="videoDescription" placeholder="Enter video description" required />
        </FormGroup>
        <FormGroup>
          <Label for="videoStatus">Status</Label>
          <Input type="text" name="videoStatus" id="videoStatus" placeholder="Enter video status" required />
        </FormGroup>
        <FormGroup>
          <Label for="videoUrl">URL</Label>
          <Input type="text" name="videoUrl" id="videoUrl" placeholder="Enter video URL" required />
        </FormGroup>
        <FormGroup>
          <Label for="sectionId">Section</Label>
          <Input type="select" name="sectionId" id="sectionId" required>
            {/* Generate options for sections */}
            {sections.map(section => (
              <option key={section.id} value={section.id}>{section.section_title}</option>
            ))}
          </Input>
        </FormGroup>
        <Button type="submit" color="primary">Add Video</Button>
      </Form>

      {/* Render existing videos */}
      <h2>Existing Videos</h2>
      <Row>
        {videos.map(video => (
          <Col key={video.id} sm="6" md="4" lg="3">
            <div className="video-card">
              <h3>{video.video_title}</h3>
              <p>{video.description}</p>
              <p>Status: {video.status}</p>
              <p>URL: {video.url}</p>
              <p>Section: {video.section_id}</p>
              {/* Edit button */}
              <Button
                color="secondary"
                onClick={() => handleEditVideo(video.id, { ...video, description: 'Updated description' })}
              >
                Edit
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditPage;



.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px;
  border: 1px solid #ddd;
}

.data-table th {
  background-color: #f2f2f2;
  text-align: left;
}

.data-table input {
  width: 100%;
  padding: 5px;
  border: none;
}
.data-table input:focus{

  outline: none; 
}

.save-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}

