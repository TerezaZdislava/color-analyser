import React, { useState } from 'react';
import axios from 'axios';
import example from '../data/example.jpg';

function Home({ sendformToParent }) {
  const [img, setImg] = useState();
  function uploadFile(e) {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file);
    console.log(data);
    axios
      // post('https://react-flask-tutorial.herokuapp.com/flask/hello')
      .post('http://localhost:5000/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        let image = 'data:image/*;base64,' + response.data.image;
        setImg(image);
        sendformToParent(image);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="app">
      <h1>Seasonal color tool</h1>
      <h2>
        Identify your color season online and for free. After you fill a short
        questionaire
      </h2>
      <figure>
        <img src={example} alt="example" />
        <figcaption>Example of the photo</figcaption>
      </figure>
      <span>Your photo will be deleted in the end of the session.</span>
      <form>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => uploadFile(e)}
        ></input>
      </form>
    </div>
  );
}

export default Home;
