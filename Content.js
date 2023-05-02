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

