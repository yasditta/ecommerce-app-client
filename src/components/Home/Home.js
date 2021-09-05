import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="slideShow">Slide show</div>
        <div className="heroOne">Hero section</div>
        <div className="filler"></div>
        <div className="heroTwo">second hero section</div>
        <div className="filler"></div>
        <div className="heroThree">third hero section</div>
        <div className="filler"></div>
      </div>
      <div className="cardWrapper">
        <div className="cardTitle">Card Title</div>
        <div className="cardSection">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
      <footer>
        <p>three column grid</p>
      </footer>
    </div>
  );
};

export default Home;
