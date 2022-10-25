import React from "react";
import "./shv_footer.css";
import "./bootstrap.min.css";
const Footer = () => {
  return (
      <div>
 <footr>
          <div class="footer">
            <div class="container">
              <div class="row">
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Address
                    </h3>
                    <i>
                      <img src="assets/icon/3.png" />
                      Locations
                    </i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Menus
                    </h3>
                    <i>
                      <img src="assets/icon/2.png" />
                      Locations
                    </i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Useful Linkes
                    </h3>
                    <i>
                      <img src="assets/assets/icon/1.png" />
                      Locations
                    </i>
                  </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Social Media{" "}
                    </h3>
                    <ul class="contant_icon">
                      <li>
                        <img src="assets/icon/fb.png" alt="icon" />
                      </li>
                      <li>
                        <img src="assets/icon/tw.png" alt="icon" />
                      </li>
                      <li>
                        <img src="assets/icon/lin (2).png" alt="icon" />
                      </li>
                      <li>
                        <img src="assets/icon/instagram.png" alt="icon" />
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="col-xl-2 col-lg-9 col-md-10 col-sm-20 width">
                  <div class="address">
                    <h3 font-size="18px" className="sug_h">
                      Newsletter{" "}
                    </h3>
                    <input
                      class="form-control"
                      placeholder="Enter your email"
                      type="type"
                      name="Enter your email"
                    />
                    <button class="submit-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footr>
        </div>
  )
}
export default Footer;
