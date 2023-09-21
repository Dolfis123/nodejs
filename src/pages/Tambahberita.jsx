import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

  return (
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
                  style={{ width: "200%", height: "60px" }}
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
                    handleChange({ target: { name: "news_content", value } })
                  }
                  modules={{
                    toolbar: [
                      [{ header: "1" }, { header: "2" }, { font: [] }],
                      [{ list: "ordered" }, { list: "bullet" }],
                      ["bold", "italic", "underline"],
                      [{ color: [] }, { background: [] }],
                      ["link"],
                    ],
                  }}
                  theme="snow"
                  required
                  style={{ width: "200%", height: "400px" }}
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
                  style={{ width: "30%", height: "35px" }}
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
                  style={{ width: "70%", height: "35px" }}
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
                  style={{ width: "70%", height: "35px" }}
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
                  style={{ width: "70%", height: "35px" }}
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

      {/* <button type="submit">Tambah Berita</button> */}
    </div>
  );
}

export default TambahBerita;
