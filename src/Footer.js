
import "./Footer.css";
export const Footer = () =>{
    return (
      <footer className="footer">
        <div className="footer-column">
          <h3>HerbIQ</h3>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Ayurvedic Medicine Recommender</a>
            </li>
            <li>
              <a href="#">Ayurvedic College Recommender</a>
            </li>
            <li>
              <a href="#">Ayurvedic Hospital Recommender</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Stay Connected</h4>
          <ul>
            <li>
              <a href="#">Subscription</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }