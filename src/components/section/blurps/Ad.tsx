import React from 'react';

export default function Ad() {
  return (
    <div
      className="mt-3 p-3 text-center d-none d-md-block"
      style={{ border: '2px dashed #adadad' }}
    >
      FOR MORE COOL & FREE STUFF
      <br />
      {`>>`}
      <a href="#ad" target="_blank" rel="noreferrer" className="mx-2">
        CLICK HERE
      </a>
      {`<<`}
    </div>
  );
}
