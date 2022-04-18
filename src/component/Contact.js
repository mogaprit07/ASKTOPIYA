
import React from 'react'
import { Link } from 'react-router-dom'

export const Contact = () => {
  return (
    <div>

    {/* // <!-- Page Content -->
    // <!-- Heading Starts Here --> */}
    <div className="page-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact Us</h1>
            <p><Link to="/home">Home</Link> / <span>Contact Us</span></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Heading Ends Here --> */}


    {/* <!-- Contact Us Starts Here --> */}
    <div className="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <fieldset>
                      <input name="name" type="text" id="name" placeholder="Your name" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <fieldset>
                      <input name="email" type="text" id="email" placeholder="Your email" required=""/>
                    </fieldset>
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <fieldset>
                      <input name="subject" type="text" id="subject" placeholder="Subject"/>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea name="message" rows="6" id="message" placeholder="Your message" required=""></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="main-button">Send Message</button>
                    </fieldset>
                  </div>
                </div>
              </form>
          </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <div className="section-heading">
                <span>Contact Us</span>
                <h2>Let's keep in touch</h2>
                <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <ul>
                    <li><i className="fa fa-phone"></i> 010-020-0560</li>
                    <li><i className="fa fa-support"></i> support@company.com</li>
                  </ul>
                </div>
                <div className="col-md-6 col-sm-12">
                  <ul>
                    <li><i className="fa fa-envelope"></i> contact@company.com</li>
                    <li><i className="fa fa-globe"></i> www.company.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Contact Us Ends Here --> */}


    
    {/* <!-- Footer Starts Here --> */}
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>About Us</h2>
              </div>
              <p>Host Cloud is provided by TemplateMo for free of charge. Anyone can download and use this CSS Bootstrap template for commercial purposes.</p>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>Hosting Plans</h2>
              </div>
              <ul className="footer-list">
                <li><Link to="/">Basic Cloud 5X</Link></li>
                <li><Link to="/">Cloud VPS 10X</Link></li>
                <li><Link to="/">Advanced Cloud</Link></li>
                <li><Link to="/">Custom Designs</Link></li>
                <li><Link to="/">Special Solutions</Link></li>
              </ul>
            </div>
          </div>
          
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>Useful Links</h2>
              </div>
              <ul className="footer-list">
                <li><Link to="/">Cloud Hosting Platform</Link></li>
                <li><Link to="/">Light Speed Zone</Link></li>
                <li><Link to="/">Content Delivery Network</Link></li>
                <li><Link to="/">Customer Support</Link></li>
                <li><Link to="/">Latest News</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer-item">
              <div className="footer-heading">
                <h2>More Information</h2>
              </div>
              <ul className="footer-list">
                <li>Phone: <Link to="/">010-020-0560</Link></li>
                <li>Email: <Link to="/">mail@company.com</Link></li>
                <li>Support: <Link to="/">support@company.com</Link></li>
                <li>Website: <Link to="/">www.company.com</Link></li>
              </ul>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
    {/* <!-- Footer Ends Here --> */}

  
</div>
  )
}

export default Contact;