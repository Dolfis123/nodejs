import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Card, Button } from "react-bootstrap";

function TambahBerita() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    news_title: "",
    news_content: "",
    publication_date: "",
    news_source: "",
    category: "",
    news_image: null, // Menggunakan null untuk menginisialisasi file gambar
    publication_status: "Published",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0]; // Mengambil file gambar yang dipilih
    setFormData({
      ...formData,
      news_image: imageFile, // Menyimpan file gambar dalam state
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData(); // Membuat objek FormData untuk mengirim file gambar

    // Menambahkan data lain ke FormData
    formDataToSend.append("news_title", formData.news_title);
    formDataToSend.append("news_content", formData.news_content);
    formDataToSend.append("publication_date", formData.publication_date);
    formDataToSend.append("news_source", formData.news_source);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("publication_status", formData.publication_status);
    formDataToSend.append("news_image", formData.news_image); // Menambahkan file gambar ke FormData

    axios
      .post("http://localhost:3040/news", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Penting: Gunakan tipe konten yang sesuai
        },
      })
      .then((response) => {
        console.log("Berita berhasil ditambahkan:", response.data);
        navigate("/berita");
      })
      .catch((error) => {
        console.error("Gagal menambahkan berita:", error);
      });
  };
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

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"], // Tambahkan opsi bold, italic, underline, strike
      [{ color: [] }, { background: [] }], // Tambahkan opsi warna teks dan latar belakang
      [{ align: [] }],
      ["link", "image", "video"], // Tambahkan opsi link, image, dan video
      ["clean"],
      ["blockquote"], // Tambahkan opsi blockquote
      [{ script: "sub" }, { script: "super" }], // Tambahkan opsi subscript dan superscript
      [{ indent: "-1" }, { indent: "+1" }], // Tambahkan opsi indentasi
      [{ size: ["small", false, "large", "huge"] }], // Tambahkan opsi ukuran font
      ["code-block"], // Tambahkan opsi code block
    ],
  };

  return (
    <div className="wrapper">
      <div className="body-overlay"></div>
      {/* Sidebar */}
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            {/* <img src="./logo mkw 2" className="img-fluid" alt="logo" /> */}
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
                <a href="/profil">
                  <i className="material-icons">person</i>
                  <span>Profil</span>
                </a>
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
          <li className="active">
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
        <div style={{ margin: "20px" }}>
          <Card>
            <Card.Body>
              <div style={{ margin: "50px" }}>
                <h2>Tambah Berita Baru</h2>
                <br />
                <br />
                <form onSubmit={handleSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label>
                            <b>Judul Berita:</b>
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="news_title"
                            value={formData.news_title}
                            onChange={handleChange}
                            placeholder="Tambahkan judul berita..."
                            style={{ width: "100%", height: "60px" }}
                          />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label>
                            <b>Konten Berita:</b>
                          </label>
                        </td>
                        <td>
                          <ReactQuill
                            name="news_content"
                            value={formData.news_content}
                            onChange={(value) =>
                              handleChange({
                                target: { name: "news_content", value },
                              })
                            }
                            modules={modules} // Tambahkan modules toolbar di sini
                            style={{ width: "100%", height: "400px" }}
                          />
                        </td>
                      </tr>
                      <br />
                      <br />
                      <br />
                      <tr>
                        <td>
                          <label>
                            <b>Tanggal Publikasi:</b>
                          </label>
                        </td>
                        <td>
                          <input
                            type="date"
                            name="publication_date"
                            value={formData.publication_date}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", height: "35px" }}
                          />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label>
                            <b>Sumber Berita:</b>
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="news_source"
                            value={formData.news_source}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", height: "35px" }}
                          />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label>
                            <b>Kategori Berita:</b>
                          </label>
                        </td>
                        <td>
                          <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", height: "35px" }}
                          />
                        </td>
                      </tr>
                      <br />
                      <tr>
                        <td>
                          <label>
                            <b>Gambar Berita:</b>
                          </label>
                        </td>
                        <td>
                          <input
                            type="file"
                            name="news_image"
                            onChange={handleImageChange}
                            accept="image/*"
                            required
                            style={{ width: "100%", height: "35px" }}
                          />
                        </td>
                      </tr>
                      <br />
                    </tbody>
                  </table>
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{ marginRight: "70px", marginLeft: "135px" }}
                  >
                    Tambah Berita
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success rounded btn-center order-2"
                    onClick={(e) => navigate("/berita")}
                  >
                    Kembali
                  </button>
                </form>
              </div>
            </Card.Body>
          </Card>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <nav className="d-flex">
                  <ul className="m-0 p-0">
                    <li>
                      <a href="#"> Home </a>
                    </li>
                    <li>
                      <a href="#"> Kantor </a>
                    </li>
                    <li>
                      <a href="#"> Kelurahan </a>
                    </li>
                    <li>
                      <a href="#"> Blog </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6">
                <p className="copyright d-flex justify-content-end">
                  &copy; 2023 By Dolfis Kareth || Dashboard Admin Lurah Amban
                  {/* <a href="#">Vishweb Design</a> BootStrap Admin Dashboard */}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default TambahBerita;
