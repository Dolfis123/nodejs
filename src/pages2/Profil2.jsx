import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function Profil2() {
  const [sejarah, setSejarah] = useState([]);
  const [visiMisi, setVisiMisi] = useState([]);
  const [pegawai, setPegawai] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDataSejarah();
    // Panggil fungsi untuk mengambil data visi dan misi dari backend
    fetchDataVisiMisi();
    // Panggil fungsi untuk mengambil data pegawai dari backend
    fetchDataPegawai();
  }, []);
  const fetchDataSejarah = () => {
    axios
      .get("http://localhost:3040/sejarah")
      .then((response) => {
        setSejarah(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching sejarah data:", error);
        setLoading(false);
      });
  };
  const fetchDataVisiMisi = () => {
    axios
      .get("http://localhost:3040/visi-misi")
      .then((response) => {
        setVisiMisi(response.data);
      })
      .catch((error) => {
        console.error("Error fetching visi dan misi data:", error);
      });
  };

  const fetchDataPegawai = () => {
    axios
      .get("http://localhost:3040/pegawai")
      .then((res) => {
        if (res.data.Status === "Success") {
          setPegawai(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };
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
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark  px-3 py-3 py-lg-0">
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
              <a href="/prfil12" className="nav-item nav-link active">
                Profil
              </a>
              <a href="/informasi" className="nav-item nav-link">
                Informasi
              </a>
              <a href="/kontak" className="nav-item nav-link ">
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
                className="text-center mt-4 animated zoomIn "
                style={{
                  fontSize: "3rem",
                  color: "#F6F6F6",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Profil Kami
              </h2>
              <h3
                className="text-center mt-4 animated zoomIn"
                style={{ fontSize: "1.2rem", color: "#8BE8E5" }}
              >
                Disini kamu akan melihat Profil singkat tentang Lurah Amban,
                <br />
                mulai dari sejarah, visi, misi, dan hal lainya yang mengenai
                lurah amban
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              {loading ? (
                <h3 style={{ textAlign: "center" }}>Loading....😁</h3>
              ) : (
                <div className="mt-3">
                  <Card className="card-stats">
                    {" "}
                    {/* Menggunakan Card */}
                    <Card.Body>
                      <h2
                        className="text-center mt-4 section-title position-relative pb-3 mb-5"
                        style={{ fontSize: "2rem", color: "#207DFF" }}
                      >
                        Sejarah Kelurahan Amban
                      </h2>
                      <br />
                      <ul className="jenis-huruf ukuran-huruf">
                        {sejarah.map((item, index) => (
                          <li key={index}>
                            {item.isi
                              .split("\n")
                              .map((line, lineIndex) =>
                                line.startsWith("•") ? (
                                  <span key={lineIndex}>
                                    {line.substring(1)}
                                  </span>
                                ) : (
                                  <div
                                    key={lineIndex}
                                    dangerouslySetInnerHTML={{ __html: line }}
                                  />
                                )
                              )}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <Card className="p-4">
                {" "}
                {/* Menggunakan Card untuk visi dan misi */}
                <h2
                  className="text-center mt-4 section-title position-relative pb-3 mb-5"
                  style={{ fontSize: "2rem", color: "#207DFF" }}
                >
                  VISI & MISI
                </h2>
                <div className="visi-misi-container">
                  <h2
                    className="text-left mt-4"
                    style={{ fontSize: "1.5rem", color: "#140303" }}
                  >
                    VISI
                  </h2>
                  <ul className="jenis-huruf">
                    {visiMisi.map((item, index) => (
                      <li className="ukuran-huruf" key={index}>
                        {item.visi
                          .split("\n")
                          .map((line, lineIndex) =>
                            line.startsWith("•") ? (
                              <li key={lineIndex}>{line.substring(1)}</li>
                            ) : (
                              <div
                                key={lineIndex}
                                dangerouslySetInnerHTML={{ __html: line }}
                              />
                            )
                          )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="visi-misi-container">
                  <h2
                    className="text-left mt-4"
                    style={{ fontSize: "1.5rem", color: "#140303" }}
                  >
                    MISI
                  </h2>
                  <ul className="jenis-huruf">
                    {visiMisi.map((item, index) => (
                      <li className="ukuran-huruf" key={index}>
                        {item.misi.split("\n").map((line, lineIndex) => (
                          <li
                            key={lineIndex}
                            dangerouslySetInnerHTML={{ __html: line }}
                          />
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <Card className="h-100">
                {" "}
                {/* Menggunakan Card untuk gambar */}
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                    src="https://images.unsplash.com/photo-1695266543586-b4d77d54c3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                    alt="Gambar Sejarah"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      {/* <!-- About End --> */}
      {/* <!-- Team Start --> */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <Card className="p-4">
            {" "}
            {/* Gunakan Card dari Bootstrap */}
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: "600px" }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
                Pegawai Lurah Amban
              </h5>
            </div>
            <div className="container">
              <div className="row">
                <div className="tree">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                          alt="Lurah Amban"
                        />
                        <span>
                          <b>LURAH AMBAN</b>
                        </span>
                        <span>
                          <b>
                            <u>ALHEN SORBU, S.STP</u>
                          </b>
                        </span>
                        <span>
                          <b>NIP: 199304032017081002</b>
                        </span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                              alt="Sekretaris"
                            />
                            <span>
                              <b>SEKRETARIS</b>
                            </span>
                            <span>
                              <b>
                                <u>RONNY TELENGGEN, S.STP</u>
                              </b>
                            </span>
                            <span>
                              <b>NIP: 199405122016091004</b>
                            </span>
                          </a>
                          <a href="#">
                            <img
                              src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                              alt="Bendahara Lurah"
                            />
                            <span>
                              <b>BENDAHARA LURAH</b>
                            </span>
                            <span>
                              <b>
                                <u>YUNUS RUMEREK</u>
                              </b>
                            </span>
                            <span>
                              <b>NIP: 198006052015091001</b>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                              alt="Kasi Pemerintahan & Perlindungan Masyarakat"
                            />
                            <span>
                              <b>
                                {" "}
                                KASI PEMERINTAHAN & PERLINDUNGAN MASYARAKAT
                              </b>
                            </span>
                            <span>
                              <b>
                                <u>HERCANUS YHUDA Y. WAROPEN</u>
                              </b>
                            </span>
                            <span>
                              <b>NIP: 196703102007011027</b>
                            </span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                                  alt="Fredrik C. Awom"
                                />
                                <span>
                                  <b>
                                    ⁕ <u>FREDERIK C. AWOM</u>
                                  </b>
                                </span>
                                <span>
                                  <b>NIP: 01010101010101001</b>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                                  alt="Yustus Ikei"
                                />
                                <span>
                                  <b>
                                    ⁕ <u>YUSTUS IKEI</u>
                                  </b>
                                </span>
                                <span>
                                  <b>NIP: 19800808122015091001</b>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="#">
                            <img
                              src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                              alt="Kasi Ekonomi & Pembangunan"
                            />
                            <span>
                              <b>KASI EKONOMI & PEMBANGUNAN</b>
                            </span>
                            <span>
                              <b>
                                ⁕<u>RACHMAD CAHYADI GOULAP</u>
                              </b>
                            </span>
                            <span>
                              <b>NIP: 198305242008011009</b>
                            </span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://www.pngmart.com/files/15/Female-office-Worker-PNG-Photos.png"
                                  alt="Mariangke Kadop"
                                />
                                <span>
                                  <b>
                                    ⁕<u> MARIANGKE KADOP</u>
                                  </b>
                                </span>
                                <span>
                                  <b>NIP: 197906102015092001</b>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                                  alt="Yance R. Mandacan"
                                />
                                <span>
                                  <b>
                                    ⁕ <u>YANCE R.MANDACAN</u>
                                  </b>
                                </span>
                                <span>
                                  <b>NIP: 197904242005091009</b>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                              alt="Kasi Ekonomi & Pembangunan"
                            />
                            <span>
                              <b>KASI EKONOMI & PEMBANGUNAN</b>
                            </span>
                            <span>
                              <b>
                                ⁕<u>RACHMAD CAHYADI GOULAP</u>
                              </b>
                            </span>
                            <span>
                              <b>NIP: 198305242008011009</b>
                            </span>
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                <img
                                  src="https://www.pngmart.com/files/15/Female-office-Worker-PNG-Photos.png"
                                  alt="Mariangke Kadop"
                                />
                                <span>
                                  <b>
                                    ⁕<u> MARIANGKE KADOP</u>
                                  </b>
                                </span>
                                <span>
                                  <b>NIP: 197906102015092001</b>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <img
                                  src="https://img2.pngdownload.id/20180225/cjq/kisspng-cartoon-illustration-bank-employee-5a925656ac95c6.7702391515195397987069.jpg"
                                  alt="Yance R. Mandacan"
                                />
                                <span>
                                  <b>
                                    ⁕ <u>YANCE R.MANDACAN</u>
                                  </b>
                                </span>
                                <span>
                                  <b>NIP: 197904242005091009</b>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* <!-- Team End --> */}
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
      {/* <!-- Footer End --> */}
    </div>
  );
}
export default Profil2;
