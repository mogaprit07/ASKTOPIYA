
import React from 'react'
import { Link } from 'react-router-dom'
import { AllQuestions }from './AllQuestions'
import "./css/Main.css"

export const Question = () => {
  return (
    <div>

      {/* <!-- Page Content -->
    <!-- Heading Starts Here --> */}
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/askquestion">
                <button type="button" className="btn btn-primary" >Ask Question</button>
              </Link>
              
              <p><Link to="/home">Home</Link> / <span>Questions</span></p>
            </div>
          </div>
        </div>
      </div > 
      {/* <!-- Heading Ends Here --> */}

      <div className="text-center mt-2"><h4>All Questions</h4></div><br />

      <div classNameName='main pl-3 pr-3'>
        <div classNameName='main-container' >
          <div classNameName='main-desc '>
            <p>All question stat</p>
            <div classNameName='main-filter'>
              <div classNameName='main-tabs'>
                <div classNameName='main-tab'>
                  <Link to=''>Newest</Link>
                </div>
                <div classNameName='main-tab'>
                  <Link to=''>Active</Link>
                </div>
                <div classNameName='main-tab'>
                  <Link to=''>More</Link>
                </div>
              </div>
                <div classNameName='main-filter-item'>
                <i className="fa fa-filter"></i>                 
                 <p >Filter</p>
                </div>
            </div>
          </div>
          <div classNameName='alquestions'>
            <div classNameName='alquestion'>
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
                  <AllQuestions />
            </div>
          </div>
        </div>
      </div>




      {/* <!-- Footer Starts Here --> */}
      <footer className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer-item">
                <div className="footer-heading">
                  <h2>Question</h2>
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



    </div>
  )
}

export default Question;