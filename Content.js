import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const CourseContent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };

  const sections = [
    {
      id: 1,
      title: 'Section 1',
      videos: [
        { id: 1, title: 'Introduction', duration: '10:00' },
        { id: 2, title: 'Getting Started with React', duration: '15:30' },
        { id: 3, title: 'Creating Components', duration: '12:45' },
      ],
    },
    {
      id: 2,
      title: 'Section 2',
      videos: [
        { id: 4, title: 'Styling Components', duration: '8:15' },
        { id: 5, title: 'Handling Events', duration: '13:20' },
      ],
    },
  ];

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Course Content</h1>
          <ListGroup>
            {sections.map((section) => (
              <div key={section.id}>
                <h3>{section.title}</h3>
                {section.videos.map((video) => (
                  <ListGroupItem
                    key={video.id}
                    onClick={() => handleVideoSelection(video)}
                    active={selectedVideo?.id === video.id}
                    tag="button"
                  >
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        checked={selectedVideo?.id === video.id}
                        readOnly
                      />
                      <label className="custom-control-label">
                        {video.title}
                      </label>
                      <span className="float-right">{video.duration}</span>
                    </div>
                  </ListGroupItem>
                ))}
              </div>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <div className="text-center">
            {selectedVideo ? (
              <video controls className="w-100">
                <source src="dummy-link.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="p-4 bg-light">No video selected</div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseContent;


import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const CourseContent = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelection = (video) => {
    setSelectedVideo(video);
  };

  const sections = [
    {
      id: 1,
      title: 'Section 1',
      videos: [
        { id: 1, title: 'Video 1.1' },
        { id: 2, title: 'Video 1.2' },
        { id: 3, title: 'Video 1.3' },
      ],
    },
    {
      id: 2,
      title: 'Section 2',
      videos: [
        { id: 4, title: 'Video 2.1' },
        { id: 5, title: 'Video 2.2' },
      ],
    },
  ];

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Course Content</h1>
          {sections.map((section) => (
            <div key={section.id}>
              <h3>{section.title}</h3>
              <ListGroup>
                {section.videos.map((video) => (
                  <ListGroupItem
                    key={video.id}
                    onClick={() => handleVideoSelection(video)}
                  >
                    <input type="checkbox" checked disabled />
                    {video.title}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          ))}
        </Col>
        <Col md={4}>
          {selectedVideo ? (
            <video controls>
              <source src="dummy-link.mp4" type="video/mp4" />
            </video>
          ) : (
            <div>No video selected</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CourseContent;





import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Form } from "react-bootstrap";

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoProgress, setVideoProgress] = useState({});

  const sections = [
    {
      id: 1,
      title: "Introduction",
      videos: [
        {
          id: 1,
          title: "Welcome to the course",
          duration: "4:21",
        },
        {
          id: 2,
          title: "What you will learn",
          duration: "2:33",
        },
      ],
    },
    {
      id: 2,
      title: "Getting started",
      videos: [
        {
          id: 3,
          title: "Setting up your environment",
          duration: "6:02",
        },
        {
          id: 4,
          title: "Creating your first project",
          duration: "9:17",
        },
      ],
    },
  ];

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
    setVideoProgress((prev) => ({ ...prev, [videoId]: true }));
  };

  const getVideoLink = (videoId) => {
    // TODO: Replace with backend API call to get video link
    return "https://dummyvideo.com/" + videoId;
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <ListGroup>
            {sections.map((section) => (
              <ListGroup.Item key={section.id}>
                <h5>{section.title}</h5>
                <ListGroup variant="flush">
                  {section.videos.map((video) => (
                    <ListGroup.Item
                      key={video.id}
                      action
                      onClick={() => handleVideoClick(video.id)}
                      active={selectedVideo === video.id}
                      disabled={!videoProgress[video.id]}
                    >
                      <Form.Check
                        type="checkbox"
                        label={video.title}
                        checked={videoProgress[video.id]}
                        readOnly
                      />
                      <span className="float-right">{video.duration}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={9}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Video player"
              className="embed-responsive-item"
              src={getVideoLink(selectedVideo)}
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoSection;



import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function CourseContent () {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState([]);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    if (!completedVideos.includes(video)) {
      setCompletedVideos([...completedVideos, video]);
      // Call backend API to mark the video as completed
    }
  };

  const sections = [    {      title: 'Section 1',      videos: [        { title: 'Video 1.1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },        { title: 'Video 1.2', url: 'https://www.youtube.com/embed/2ZIpFytCSVc' },        { title: 'Video 1.3', url: 'https://www.youtube.com/embed/_OBlgSz8sSM' },      ],
    },
    {
      title: 'Section 2',
      videos: [
        { title: 'Video 2.1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Video 2.2', url: 'https://www.youtube.com/embed/2ZIpFytCSVc' },
        { title: 'Video 2.3', url: 'https://www.youtube.com/embed/_OBlgSz8sSM' },
      ],
    },
    {
      title: 'Section 3',
      videos: [
        { title: 'Video 3.1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { title: 'Video 3.2', url: 'https://www.youtube.com/embed/2ZIpFytCSVc' },
        { title: 'Video 3.3', url: 'https://www.youtube.com/embed/_OBlgSz8sSM' },
      ],
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <Accordion defaultActiveKey={sections[0].title}>
            {sections.map((section, index) => (
              <Card key={index}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={section.title}>
                    {section.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={section.title}>
                  <Card.Body>
                    <div style={{ maxHeight: '500px', overflowY: 'scroll' }}>
                      {section.videos.map((video, index) => (
                        <div key={index} className="d-flex align-items-center mt-2">
                          <input type="checkbox" checked={completedVideos.includes(video)} readOnly />
                          <div
                            className="ml-2"
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleVideoClick(video)}
                          >
                            {video.title}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="embed-responsive embed-responsive-16by9">
          {currentVideo ? (
              <iframe className="embed-responsive-item" src={currentVideo.url} allowFullScreen />
            ) : (
              <div className="text-center mt-5">
                <i className="far fa-play-circle fa-5x" />
                <div className="mt-2">Select a video to start</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;


