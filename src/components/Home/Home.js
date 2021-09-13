import "./Home.css";

import picOne from "./assets/pic.jpg";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="slideShow">Slide show Changed</div>
        <div className="heroOne">
          <p>hero section</p>
          <img src={picOne} alt="something" />
        </div>
        <div className="filler"></div>
        <div className="heroTwo">second hero section</div>
        <div className="filler"></div>
        <div className="heroThree">third hero section</div>
        <div className="filler"></div>
      </div>
      <div className="cardWrapper">
        <div className="cardTitle">
          <h3>Lorem Ipsum</h3>
          <p>Lorem Ipsum sater kihert oii</p>
        </div>
        <div className="cardSection">
          <div className="card">
            <div className="image">
              <img
                src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200"
                alt="cardImage"
              />
            </div>
            <div className="desc">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                incidunt est nihil quod aliquid eveniet facere placeat.
                Voluptatum, a sequi.
              </p>
            </div>
            <button>Read More</button>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200"
                alt="cardImage"
              />
            </div>
            <div className="desc">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                incidunt est nihil quod aliquid eveniet facere placeat.
                Voluptatum, a sequi.
              </p>
            </div>
            <button>Read More</button>
          </div>
          <div className="card">
            <div className="image">
              <img
                src="https://images.pexels.com/photos/3568518/pexels-photo-3568518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=200"
                alt="cardImage"
              />
            </div>
            <div className="desc">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                incidunt est nihil quod aliquid eveniet facere placeat.
                Voluptatum, a sequi.
              </p>
            </div>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
