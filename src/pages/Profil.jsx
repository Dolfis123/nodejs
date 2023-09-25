import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

function Profil() {
  const [sejarah, setSejarah] = useState([]);
  const [visiMisi, setVisiMisi] = useState([]);
  useEffect(() => {
    // Panggil fungsi untuk mengambil data sejarah dari backend
    fetchDataSejarah();
    // Panggil fungsi untuk mengambil data visi dan misi dari backend
    fetchDataVisiMisi();
  }, []);
  const fetchDataSejarah = () => {
    axios
      .get("http://localhost:3040/sejarah")
      .then((response) => {
        setSejarah(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sejarah data:", error);
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
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Apakah Anda yakin ingin keluar dari halaman ini?"
    );
    if (confirmLogout) {
      axios
        .get("http://localhost:3040/logout", { withCredentials: true })
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="wrapper">
      <div className="body-overlay"></div>
      {/* Sidebar */}
      <nav id="sidebar">
        <div className="sidebar-header ">
          <h3>
            <img src="./public/img/logo mkw.png" alt="logo" />
            <span>Lurah Amban</span>
          </h3>
        </div>
        <ul className="list-unstyled components">
          <li>
            <a href="/dashboard" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </a>
          </li>
          {/* Small Screen Navbar Display */}
          <div className="small-screen navbar-display">
            {/* Dropdown Menu */}
            <li className="dropdown d-lg-none d-md-block d-xl-none d-sm-block">
              <a
                href="#homeSubmenu0"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="material-icons">notifications</i>
                <span> 4 notification</span>
              </a>
            </li>
            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">sms</i>
                <span>Pesan</span>
              </a>
            </li>
            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">apps</i>
                <span>apps</span>
              </a>
            </li>
            <li className="d-lg-none d-md-block d-xl-none d-sm-block">
              <a href="#">
                <i className="material-icons">person</i>
                <span>user</span>
              </a>
            </li>
          </div>
          {/* Dropdown Menu */}
          <li className="dropdown">
            <a
              href="#pageSubmenu2"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">auto_stories</i>
              <span>Halaman</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu2">
              <li>
                <a href="/beranda1">
                  <i className="material-icons">cottage</i>
                  <span>Beranda</span>
                </a>
              </li>
              <li>
                <li className="active ">
                  <a href="/profil" data-toggle="collapse">
                    <i className="material-icons">person</i>
                    <span>Profil</span>
                  </a>
                </li>
              </li>
              <li>
                <a href="/berita">
                  <i className="material-icons">newspaper</i>
                  <span>Berita</span>
                </a>
              </li>
              <li>
                <a href="/pengumuman">
                  <i className="material-icons">campaign</i>
                  <span>Pengumuman</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/penduduk" className="dashboard">
              <i className="material-icons">groups_2</i>
              <span>Penduduk</span>
            </a>
          </li>
          {/* Dropdown Menu */}
          <li className="dropdown">
            <a
              href="#pageSubmenu6"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">note</i>
              <span>Data Master</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu6">
              <li>
                <a href="/jenissurat">
                  <i className="material-icons">drafts</i>
                  <span>Jenis Surat</span>
                </a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
            </ul>
          </li>
          {/* Dropdown Menu */}
          <li className="dropdown">
            <a
              href="#pageSubmenu7"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="material-icons">email</i>
              <span>Persuratan</span>
            </a>
            <ul className="collapse list-unstyled menu" id="pageSubmenu7">
              <li>
                <a>
                  <i className="material-icons">mark_email_unread</i>
                  <span>Arsip</span>
                </a>
              </li>
              <li>
                <a>
                  <i className="material-icons">request_page</i>
                  <span>Permintaan</span>
                </a>
              </li>
            </ul>
          </li>
          {/* Other Menu Items */}
          <li className="">
            <a href="#">
              <i className="material-icons">date_range</i>
              <span>copy</span>
            </a>
          </li>
          <li className="">
            <a href="#">
              <i className="material-icons">library_books</i>
              <span>Kalender</span>
            </a>
          </li>
          <li className="">
            <a href="/location">
              <i className="material-icons">location_on</i>
              <span>Lokasi</span>
            </a>
          </li>
          <li className="">
            <a href="/setting">
              <i className="material-icons">settings</i>
              <span>Pengaturan</span>
            </a>
          </li>
          <li className="" onClick={handleLogout}>
            <a href="#">
              <i className="material-icons">logout</i>
              <span>Keluar</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* Page Content */}
      <div id="content">
        <div className="top-navbar">
          <nav className="navbar1 navbar-expand-lg">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="d-xl-block d-lg-block d-md-mone d-none"
              >
                <span className="material-icons">arrow_back_ios</span>
              </button>
              <a className="navbar-brand" href="#">
                {" "}
                Administrator{" "}
              </a>
              <button
                className="d-inline-block d-lg-none ml-auto more-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="material-icons">more_vert</span>
              </button>
              <div
                className="collapse navbar-collapse d-lg-block d-xl-block d-sm-none d-md-none d-none"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav ml-auto">
                  {/* Dropdown Menu */}
                  <li className="dropdown nav-item active">
                    <a href="#" className="nav-link" data-toggle="dropdown">
                      <span className="material-icons">notifications</span>
                      <span className="notification">4</span>
                    </a>
                  </li>
                  {/* Other Menu Items */}
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">sms</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">apps</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span className="material-icons">person</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div>
          <div style={{ margin: "20px" }}>
            <Card>
              <Card.Body>
                <h2
                  className="text-center mt-4"
                  style={{ fontSize: "2rem", color: "#140303" }}
                >
                  Sejarah Kelurahan Amban
                </h2>
                <div style={{ margin: "20px" }}>
                  <div className="mt-3">
                    <Card className="card-stats">
                      <Card.Body>
                        <h4 className="text-center pb-1">
                          <b>SEJARAH</b>
                        </h4>
                        <div style={{ margin: "30px" }}>
                          {sejarah.map((item, index) => (
                            <div key={index}>
                              {item.isi
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
                            </div>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                    {sejarah.map((item, index) => (
                      <Link to={`/sejarah/${item.id}`}>
                        <Button
                          variant="primary"
                          style={{
                            fontSize: "16px",
                            color: "#ffffff",
                            border: "4px solid",
                            padding: "5px 25px",
                            borderRadius: "25px",
                            marginTop: "0px",
                          }}
                        >
                          Edit Sejarah
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "20px",
              marginTop: "70px",
            }}
          >
            {" "}
            <Card>
              <Card.Body>
                <h2
                  className="text-center mt-4"
                  style={{ fontSize: "2rem", color: "#140303" }}
                >
                  Visi & Misi Kelurahan Amban
                </h2>
                <div className="mt-3">
                  <Card className="card-stats">
                    <Card.Body>
                      <h4 className="text-center pb-1">
                        <b>VISI</b>
                      </h4>
                      <div style={{ marginLeft: "30px", marginRight: "20px" }}>
                        {visiMisi.map((item, index) => (
                          <div key={index}>
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
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                  <Card className="card-stats">
                    <Card.Body>
                      <h4 className="text-center pb-1">
                        <b>MISI</b>
                      </h4>
                      <div style={{ marginRight: "20px" }}>
                        {visiMisi.map((item, index) => (
                          <div key={index}>
                            <ul>
                              {item.misi.split("\n").map((line, lineIndex) => (
                                <li
                                  key={lineIndex}
                                  dangerouslySetInnerHTML={{ __html: line }}
                                />
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                  {visiMisi.map((item, index) => (
                    <Link to={`/visi-misi/${item.id}`}>
                      <Button
                        variant="primary"
                        style={{
                          fontSize: "16px",
                          color: "#ffffff",
                          border: "4px solid",
                          padding: "3px 25px",
                          borderRadius: "25px",
                          marginTop: "0px",
                        }}
                      >
                        Edit Visi & Misi
                      </Button>
                    </Link>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        {/* ... Bagian footer ... */}
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <nav className="d-flex">
                  <ul className="m-0 p-0">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Kantor</a>
                    </li>
                    <li>
                      <a href="#">Kelurahan</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6">
                <p className="copyright d-flex justify-content-end">
                  &copy; 2023 By Dolfis Kareth || Dashboard Admin Lurah Amban
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Profil;
