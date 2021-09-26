import "./Home.css";

import picOne from "./assets/pic1.jpg";
import picTwo from "./assets/pic2.jpg";
import picThree from "./assets/home1.jpg";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="slideShow">Slide show</div>
        <div className="fashionpics">
          <img src={picOne} alt="fashion" />
          <img src={picTwo} alt="man1" />
          <div class="firstSection">
            <h3>Autumn / Winter 2021 Collection</h3>
            <p>
              Trendy Clothing, Fit for Every Occasion, Great Quality with Big
              Discounts
            </p>
            <button class="button1">SHOP NOW</button>
          </div>
        </div>

        <div className="filler"></div>
        <div className="heroTwo">second hero section</div>
        <div className="filler"></div>
        <div className="living">
          <img src={picThree} alt="livingroom" />
          <div class="thirdSection">
            <h3>Our Trendy Homeware</h3>
            <p>Quality, elegant products suitable for all homes</p>
            <button class="button2">SHOP NOW</button>
          </div>
        </div>
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
