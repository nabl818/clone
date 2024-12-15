import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
      <Header />

      {/* Fullscreen banner */}
      <div className="image-container position-relative" style={{ height: "100vh" }}>
        <img
          className="w-100 h-100 img-fluid"
          src="https://www.peaksportshoes.com/cdn/shop/files/banner1.jpg?v=1680538028&width=1500"
          alt="Professional Basketball Shoes Store"
          style={{ objectFit: "cover" }}
        />
        <div className="position-absolute bottom-0 start-0 text-white p-3">
          <p className="fs-4 fw-bold mb-3">Professional Basketball Shoes Store</p>
          <button className="btn bg-white text-dark border border-3">
            Shop Now
          </button>
        </div>
      </div>

      {/* Hot Sales Section */}
      <div className="container mt-5">
        <h3 className="fs-2 fw-bold mb-4">Hot Sales of PEAK</h3>

        {/* Cards displayed in a flex row */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://www.peaksportshoes.com/cdn/shop/products/1f15a49a8d87b88f21282a3d120f2446.jpg?v=1648225843"
              />
              <Card.Body>
                <Card.Text className="fw-bold">
                  PEAK Basketball Shoes Lou Williams <br />
                  Streetball Master Grey
                </Card.Text>
                <Card.Text className="fw-bold">$70.00 USD</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://www.peaksportshoes.com/cdn/shop/products/f8938f9d3783548ff7253cb12b46c0cf.jpg?v=1648227992&width=493"
              />
              <Card.Body>
                <Card.Text className="fw-bold">
                  PEAK Basketball Shoes Lou Williams Streetball <br />
                  Master Black Gold
                </Card.Text>
                <Card.Text className="fw-bold">$70.00 USD</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://www.peaksportshoes.com/cdn/shop/products/1_ff1d870d-3b63-413f-9a64-ed4905740dab.jpg?v=1647697661&width=493"
              />
              <Card.Body>
                <Card.Text className="fw-bold">
                  PEAK Basketball Shoes Lou Williams Streetball <br />
                  Master White Black
                </Card.Text>
                <Card.Text className="fw-bold">$70.00 USD</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src="https://www.peaksportshoes.com/cdn/shop/products/2d95d9c32dc0e44de4ad2163ab70c685_1e47498e-a09d-498e-b219-d7325b03fff2.jpg?v=1648191097&width=493"
              />
              <Card.Body>
                <Card.Text className="fw-bold">
                  PEAK Lou Williams Basketball Shoes UNDERGROUND Respect to South Gwinnett
                </Card.Text>
                <Card.Text className="fw-bold">$119.00 USD</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Centered Button */}
      <div className="d-flex justify-content-center align-items-center my-5">
        <button className="btn btn-dark text-white">View All</button>
      </div>

      {/* Video Section */}
      <div className="d-flex align-items-center justify-content-center">
        <iframe
          width="1241"
          height="699"
          src="https://www.youtube.com/embed/uhNqpHkDSQY"
          title="PEAK BASKETBALL SHOES ANDREW WIGGINS P.E. Sneaker Tech Display"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Bottom Center Image and Button */}
      <div className="position-relative m-4" style={{ height: "100vh" }}>
        <img
          className="position-absolute bottom-0 start-50 translate-middle-x w-100 img-fluid"
          style={{ width: "300px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadsgb8GLVZ414Bu9CGeVw0d2VlNPLf8Sv2ygFvhB8BWdfKXI5"
          alt="Shop Now Image"
        />
        <button
          className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-4"
        >
          Shop Now
        </button>
      </div>
      
     <Footer />
      
    </>
  );
}

export default App;
