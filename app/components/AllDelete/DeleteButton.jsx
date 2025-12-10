"use client";

import { deletePost } from "@/app/actions/deletePost";

export default function DeleteButton({ id }) {
  const handleDelete = async () => {
    const confirmDelete = confirm("Are you sure this product is deleted?");
    if (!confirmDelete) return;

    const res = await deletePost(id);

    if (res.success) {
    //   alert("Are you sure this product is deleted?");
    } else {
      alert("Delete Failed!");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white py-1.5 px-5 rounded-lg"
    >
      Delete
    </button>
  );
}
