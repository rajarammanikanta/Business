import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
const TrustBanner=(props)=>{
    let customerCount=props.customerCount 
    return(
        <div
                className="text-center p-5 rounded shadow-lg my-5 container-fluid"
                style={{
                  background: "linear-gradient(135deg,#213555,#213555)",
                  color: "#fff",
                }}
              >
                <h2 className="fw-bold text-light mb-4">
                  Don’t Trust Our Words, Trust Our Valuable Customers
                </h2>
                <p className="fs-5 mb-4">
                  <span className="text-warning fw-bold">500+ Reviews</span> |{" "}
                  <span className="text-light fw-bold">4.9+ Google Rating</span> |{" "}
                  <span className="text-warning fw-bold">99% On-Time Deliveries</span>
                </p>
                <p className="fs-4 fw-semibold mb-4 px-3 py-2 text-warning">
                  Thank You for Trusting Us - SNGR SOFA WORLD AND VARAHI INTERIORS
                </p>
                <p className="text-light fs-6 mt-3">
                  <FaHeart className="text-danger me-2" />
                  <span className="text-light fw-bold">{customerCount}+ Happy Customers | </span>
                  <span className="text-light fw-bold">4.9+ Google Rating</span>
                </p>
        
                {/* Address Section */}
                <div className="mt-4">
                  <p className="text-light fs-5">
                    <span className="fw-bold">Address:</span> 2-3-270, Ganesh Nagar, Karimnagar, Telangana 505001
                  </p>
                  <a
                    href="https://maps.app.goo.gl/5qY64Pj8oQ7yWrMf8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warning fw-bold"
                  >
                    <FaLocationDot size={25} />
                    View Location on Google Maps
                  </a>
                </div>
              </div>
        
    )
}

export default TrustBanner