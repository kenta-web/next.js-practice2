import { useRouter } from 'next/router';
import React from 'react';

export default function HomePage() {
  const router = useRouter();
  const { name } = router.query;
  const navigateToPortfolio = () => {
    router.push('/tanaken/portfolio')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Tanaken WEB SITE</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="mb-16 flex justify-center items-center">
          <div className="text-center p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800">ようこそ、{name}さん！</h2>
            <p className="text-gray-600">あなたの名前は{name}ですね。</p>
          </div>
        </div>
        <section className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Welcome to Tanaken Website
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            タナケンが作りたいもの、やりたいことを実現させるサイトです。
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            詳しく見る
          </a>
        </section>

        <section id="about" className="py-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">About ME</h3>
          <p className="text-gray-600">
            2001年12月25日生まれ。千葉県出身。<br />
            現在はiYell株式会社にてWEBエンジニアとして頑張っています。
          </p>
        </section>

        <section id="services" className="py-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
          <ul className="space-y-4">
            <button onClick = {navigateToPortfolio} className="w-full bg-white shadow p-6 rounded-lg text-left">
              <h4 className="font-semibold text-gray-800">ポートフォリオ</h4>
              <p className="text-gray-600">私が作ったwebアプリたち.</p>
            </button>
            <button className="w-full bg-white shadow p-6 rounded-lg text-left">
              <h4 className="font-semibold text-gray-800">comming soon</h4>
              <p className="text-gray-600">comming soon.</p>
            </button>
            <button className="w-full bg-white shadow p-6 rounded-lg text-left">
              <h4 className="font-semibold text-gray-800">comming soon</h4>
              <p className="text-gray-600">comming soon.</p>
            </button>
          </ul>
        </section>

        <section id="contact" className="py-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact ME</h3>
          <p className="text-gray-600">お気軽にお声がけください!</p>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 mt-16">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} Tanaken WEB SITE. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
