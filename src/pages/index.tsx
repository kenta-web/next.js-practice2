import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      // 名前をクエリパラメータとして渡してリダイレクト
      router.push(`/tanaken?name=${name}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800">名前を入力してください</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前"
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          送信
        </button>
      </form>
    </div>
  );
}
