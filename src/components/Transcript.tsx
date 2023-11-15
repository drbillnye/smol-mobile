import React from 'react';

interface TranscriptProps {
  transcript: string;
}

const Transcript: React.FC<TranscriptProps> = ({ transcript }) => {
  return (
    <div id="transcript">
      <h2>Transcript</h2>
      <p>{transcript}</p>
    </div>
  );
};

export default Transcript;