
CREATE TABLE VideoTracking (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  User_ID INT,
  Video_Title VARCHAR(255),
  Video_URL VARCHAR(255),
  Date_Watched DATE,
  Status VARCHAR(20),
  Rating INT,
  Notes TEXT,
  FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);

CREATE TABLE VideoComments (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  VideoTracking_ID INT,
  User_ID INT,
  Comment TEXT,
  Date_Posted DATE,
  FOREIGN KEY (VideoTracking_ID) REFERENCES VideoTracking(ID),
  FOREIGN KEY (User_ID) REFERENCES Users(User_ID)
);
