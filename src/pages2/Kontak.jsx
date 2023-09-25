import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
function Kontak() {
  return (
    <div className="bg-body-secondary">
      {/* <!-- Topbar Start --> */}

      <div
        className="container-fluid px-5 d-none d-lg-block"
        style={{ backgroundColor: "#0F2C59" }}
      >
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0 animated slideInDown">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <small className="me-3 text-light">
                <i class="fa fa-map-marker-alt me-2"></i>5357+4VW, Jl. Gn.
                Salju, Amban, Kec. Manokwari Bar., Kabupaten Manokwari, Papua
                Bar. 98312
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2"></i>+0122023030
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>lurahamban@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end animated slideInRight">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://twitter.com/"
              >
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://web.facebook.com/"
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://id.linkedin.com/"
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href="https://youtube.com"
              >
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-3 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <pre>
              <h1 className="m-0 animated slideInDown">
                <img
                  style={{ justifyContent: "center", marginTop: "15px" }}
                  width="58px"
                  height="63px"
                  src="/img/logo mkw 2.png"
                  alt="logo"
                />
                <span> Lurah Amban</span>
              </h1>
            </pre>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="/" className="nav-item nav-link ">
                Beranda
              </a>
              <a href="/prfil12" className="nav-item nav-link">
                Profil
              </a>
              <a href="/informasi" className="nav-item nav-link">
                Informasi
              </a>
              <a href="/kontak" className="nav-item nav-link active ">
                Kontak
              </a>
            </div>
            <div className="navbar-nav">
              <a href="/login" className="nav-item nav-link">
                <span
                  className="btn btn-outline-info py-md-3 px-md-5 animated slideInRight"
                  style={{
                    borderRadius: "50px",
                  }}
                >
                  <b>Masuk</b>
                </span>
              </a>
            </div>
          </div>
        </nav>

        <div
          className="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">
                Kontak Kami
              </h1>
              <h3
                className="text-center mt-4 animated zoomIn" // Menambahkan class Bootstrap untuk membuat teks menjadi tengah
                style={{ fontSize: "1.2rem", color: "#8BE8E5" }} // Mengatur ukuran font agar responsif
              >
                Disini kamu akan melihat Lokasi dan kontak kelurahan Amban
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <Card className="p-4">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
                Kontak Kami
              </h5>
            </div>

            <Row className="g-5 mb-5">
              <Col lg={4}>
                <div
                  className="d-flex align-items-center wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Hubungi nomor kami</h5>
                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div
                  className="d-flex align-items-center wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-envelope-open text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Hubungi email kami</h5>
                    <h4 className="text-primary mb-0">lurahamban@gmail.com</h4>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div
                  className="d-flex align-items-center wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Lokasi Kantor Lurah</h5>
                    <h4 className="text-primary mb-0">Kantor Lurah Amban</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="g-5">
              <Col lg={6} className="wow slideInUp" data-wow-delay="0.3s">
                <Form>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Control
                        type="text"
                        placeholder="Nama Anda"
                        style={{ height: "55px" }}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control
                        type="email"
                        placeholder="Email Anda"
                        style={{ height: "55px" }}
                      />
                    </Col>
                    <Col xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        style={{ height: "55px" }}
                      />
                    </Col>
                    <Col xs={12}>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Pesan"
                      />
                    </Col>
                    <Col xs={12}>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 py-3"
                      >
                        Kirim Pesan
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col lg={6} className="wow slideInUp" data-wow-delay="0.6s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.883570495203!2d134.062120374614!3d-0.8421289991496924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d540b025081f9eb%3A0x1cc8b5d44a4f1b0c!2sKantor%20Lurah%20Amban!5e1!3m2!1sid!2sid!4v1691212046653!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  style={{
                    border: "0",
                    borderRadius: "20px",
                    marginBottom: "50px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Menghubungi</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      Amban Kabupaten Manokwari Papua Barat
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">lurahamban@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+088820499241</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Menghubungi</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      5357+4VW, Jl. Gn. Salju, Amban, Kec. Manokwari Bar.,
                      Kabupaten Manokwari, Papua Bar. 98312
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">lurahamban@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+088820499241</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Menghubungi</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">
                      Amban Kabupaten Manokwari Papua Barat
                    </p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">lurahamban@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+088820499241</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
}

export default Kontak;
