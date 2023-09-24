import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Informasi() {
  const [loading, setLoading] = useState(true);

  const [berita, setBerita] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3040/news")
      .then((response) => {
        // Mengurutkan berita berdasarkan tanggal publikasi secara descending (terbaru dulu)
        const sortedBerita = response.data
          .map((item) => ({
            ...item,
            publication_date: new Date(item.publication_date),
          }))
          .sort((a, b) => a.publication_date - b.publication_date);

        setBerita(sortedBerita);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);

  const removeHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  // ...
  return (
    <div style={{ backgroundColor: "#F0F0F0" }}>
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
      <div class="container-fluid position-relative p-0">
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
              <a href="/informasi" className="nav-item nav-link active">
                Informasi
              </a>
              <a href="/kontak" className="nav-item nav-link">
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
              <h2
                className="text-center mt-4 animated zoomIn"
                style={{
                  fontSize: "3rem",
                  color: "#F6F6F6",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Berita & Pengumuman
              </h2>
              <h3
                className="text-center mt-4  animated zoomIn" // Menambahkan class Bootstrap untuk membuat teks menjadi tengah
                style={{ fontSize: "1.2rem", color: "#8BE8E5" }} // Mengatur ukuran font agar responsif
              >
                Disini kamu akan melihat berita-berita tentang Lurah amban dan
                <br />
                sekitarnya, dan juga kamu bisa melihat pengumuman-pengumuman
                dari kelurahan amban
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}
      <dir className="container-fluid position-relative p-0">
        {loading ? (
          <h3 style={{ textAlign: "center" }}>Loading....😁</h3>
        ) : (
          <div
            style={{
              marginLeft: "40px",
              marginRight: "40px",
              marginBottom: "100px",
            }}
          >
            <h2
              className="text-center mt-4 section-title position-relative pb-3 mb-5"
              style={{
                fontSize: "2rem",
                color: "#207DFF",
                backgroundColor: "#F0F0F0",
              }}
            >
              Informasi
            </h2>
            <br />
            <br />

            <div className="row" style={{ backgroundColor: "#ffff" }}>
              {berita
                .slice() // Buat salinan array untuk menghindari perubahan mutasi
                .reverse() // Balik urutan item
                .map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div
                      className="card"
                      style={{
                        backgroundColor: "#E4EFE7",
                        marginTop: "30px",
                        marginBottom: "30px",
                      }}
                    >
                      {item.news_image && (
                        <img
                          src={`http://localhost:3040/images/${item.news_image}`}
                          alt={item.news_title}
                          className="card-img-top bg-informasi"
                          // style={{ maxWidth: "100%" }}
                        />
                      )}
                      <div
                        className="card-footer"
                        style={{ backgroundColor: "#EAF6F6" }}
                      >
                        <small className="text-muted">
                          <i className="far fa-calendar-alt text-primary me-2 card-text"></i>
                          Kelurahan Amban: {formatDate(item.publication_date)}
                        </small>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title card-text">
                          {item.news_title}
                        </h5>
                        <p className="card-text">
                          {removeHtmlTags(item.news_content).substring(0, 100)}
                          ...
                        </p>
                        <Link
                          to={`/berita/${item.news_id}`}
                          className="btn btn-primary"
                        >
                          Lihat Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </dir>
      {/* Footer Start */}
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

export default Informasi;
