"use client";

import { FormEvent, useState } from "react";

export default function CreatePost() {
  const [postContent, setPostContent] = useState("");
  const [postSlug, setPostSlug] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postBanner, setPostBanner] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const response = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postSlug, postContent, postDescription, postBanner }),
      });

      if (response.ok) {
        alert("Post criado com sucesso!");
        setPostContent("");
        setPostSlug("");
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("Houve um erro ao criar o post");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-10 space-y-6"
    >
      <h1 className="text-3xl font-bold text-center text-purple-800">
        Criar Post
      </h1>

      <div className="flex flex-col gap-4">
        <label
          htmlFor="post-slug"
          className="block text-lg font-medium text-gray-700"
        >
          Título do Post
        </label>
        <input
          id="post-slug"
          value={postSlug}
          onChange={(e) => setPostSlug(e.target.value)}
          placeholder="slug da página (como o arquivo ficará salvo)"
          className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          type="text"
        />
        <label
          htmlFor="post-description"
          className="block text-lg font-medium text-gray-700"
        >
          Descrição do Post
        </label>
        <input
          id="post-description"
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
          placeholder="Descrção da página"
          className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          type="text"
        />
        <label
          htmlFor="post-banner"
          className="block text-lg font-medium text-gray-700"
        >
          Banner do Post
        </label>
        <input
          id="post-banner"
          value={postBanner}
          onChange={(e) => setPostBanner(e.target.value)}
          placeholder="Insira o link de uma imagem para servir de banner"
          className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          type="text"
        />
        <label
          htmlFor="post-content"
          className="block text-lg font-medium text-gray-700"
        >
          Conteúdo do Post (MDX)
        </label>
        <textarea
          id="post-content"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          placeholder="Escreva seu conteúdo em MDX aqui..."
          className="w-full h-64 p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 resize-none"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-purple-800 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-200"
        >
          Publicar Post
        </button>
      </div>
    </form>
  );
}
