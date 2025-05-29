import React, { useState } from "react";

export default function BookFormModal({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [formData, setFormData] = useState({
    description: "",
    cover_image: null,
    pdf_file: null,
    audio_file: null,
  });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    onSubmit({ title, author, ...formData });
    setTitle("");
    setAuthor("");
    setFormData({
      description: "",
      cover_image: null,
      pdf_file: null,
      audio_file: null,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-bold mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full mb-3 px-3 py-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="w-full mb-3 px-3 py-2 border rounded"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-full mb-3 px-3 py-2 border rounded"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
          <input
            type="file"
            name="cover_image"
            accept="image/*"
            className="w-full mb-3"
            onChange={(e) =>
              setFormData({ ...formData, cover_image: e.target.files[0] })
            }
            required
          />
          <input
            type="file"
            name="pdf_file"
            accept="application/pdf"
            className="w-full mb-3"
            onChange={(e) =>
              setFormData({ ...formData, pdf_file: e.target.files[0] })
            }
            required
          />
          <input
            type="file"
            name="audio_file"
            accept="audio/*"
            className="w-full mb-3"
            onChange={(e) =>
              setFormData({ ...formData, audio_file: e.target.files[0] })
            }
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-3 py-1 rounded bg-gray-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 rounded bg-blue-600 text-white"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}