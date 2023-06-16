import React, { useState, useEffect } from 'react';

export default function App() {
  const [textObject, setTextObject] = useState('');

  function getObjects() {
  // fetch('http://localhost:8080/listObjectItems?workflow_id=1')
  fetch('/listObjectItems?workflow_id=1')
    .then(response => response.json())
    .then(commits => setTextObject(JSON.stringify(commits)))
    .catch(error => {
       setTextObject(error.toString());
     })
  }

  getObjects();

  useEffect(() => {
    console.log(" textObject = ", textObject);
  }, [ textObject, setTextObject ]);

  return (
    <>
    <div><b>Объекты:</b></div>
    {textObject}
    </>
  );
}
