import React from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = React.useState(null);
  const [previewImg, setPreviewImg] = React.useState(undefined);
  const [submitImg, setSubmitImg] = React.useState(undefined);

  React.useEffect(()=>{
    fetch('/api/getImage')
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
  })

  React.useEffect(() => {
    if (!submitImg) {
      setPreviewImg(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(submitImg);
    setPreviewImg(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [submitImg]);


  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSubmitImg(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSubmitImg(e.target.files[0]);
  };

  const submitForm = () => {
    // const imageForm = new FormData();
    // imageForm.append("file", submitImg);
    var requestOptions = {
      method: "POST",
      redirect: "manual",
    };
    fetch("/api/postImage", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        {message && <p>This is the message from the Backend: {message}</p>}
        <form>
          <input
            type="file"
            id="imageTBD"
            name="imageTBD"
            accept="image/png, image/jpeg"
            onChange={onSelectFile}
          />
          <button onClick={submitForm}>Submit</button>
        </form>

        {submitImg && <img src={previewImg} />}
      </header>
    </div>
  );
}

export default App;
