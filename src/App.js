import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import "./App.css";
import Skeleton from "./skeleton/Skeleton"

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000)
  }, [])

  const contentBlockRender = () => {
    if (loading) {
      return [...Array(3)].map((item, index) => {
        return (
          <div key={index}>
            <h3>What is Lorem Ipsum?</h3>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum tenetur debitis, in est aspernatur.
            </p>
          </div>
        );
      });
    } else {
      return [...Array(3)].map((item, index) => {
        return (
          <div className="skeletonBlock" key={index}>
            <Skeleton width="300px" height="40px" />
            <Skeleton height="20px" variant="paragraph" />
            <Skeleton height="20px" variant="paragraph" />
            <Skeleton height="20px" variant="paragraph" />
            <Skeleton height="20px" width="50%" variant="paragraph" />
          </div>
        );
      });
    }
  };

  const cardBlockRender = () => {
    if (loading) {
      return [...Array(4)].map((item, index) => {
        return (
          <div className="card">
            <div className="cardImage">
              <img src={logo} alt="logo" width="80px" height="80px" />
              <div>The React Logo</div>
            </div>
            <div className="cardSkeletonTitle">
              <h3>Description: </h3>
            </div>
            <div className="cardSkeletonBody">
              <p>
              Lorem Ipsum is dummy text for the printing and typesetting industry. It has been the industry standard since the 1500's, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into the electronic typesetting world -remaining unchanged. It was popularized in the 1960s with the release of Letra.
              </p>
            </div>
          </div>
        );
      });
    } else {
      return [...Array(4)].map((index, item) => {
        return (
          <div className="cardSkeleton">
            <div className="cardSkeletonImage">
              <Skeleton width="80px" height="80px" variant="circle" />
              <Skeleton width="100%" height="20px" />
            </div>
            <div className="cardSkeletonTitle">
              <Skeleton width="100%" height="30px" />
            </div>
            <div className="cardSkeletonBody">
              <Skeleton width="250px" height="300px" />
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="App">
      <h1>The App</h1>
      <div>
        <h2 className="header">Skeleton for Header</h2>
        {loading ? (
          <div className="heading">
            <h2>Skeleton Loading</h2>
            <h3>Lorem Ipsum</h3>
            <h4>Examples</h4>
          </div>
        ) : (
          <div className="skeletonBlock">
            <Skeleton width="200px" height="38px" />
            <Skeleton width="150px" height="28px" />
            <Skeleton width="100px" height="25px" />
          </div>
        )}
      </div>
      <div>
        <h2 className="header">Skeleton for Page Content</h2>
        <div className="contentBlock">{contentBlockRender()}</div>
      </div>
      <div>
        <h2 className="header">Skeleton for Cards with Image and Title</h2>
        <div className="cardBlock">{cardBlockRender()}</div>
      </div>
    </div>
  );
}

export default App;
