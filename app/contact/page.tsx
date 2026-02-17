"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の送信処理はバックエンドが必要ですが、ここではデモとして完了表示のみ
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← トップページに戻る
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>
          <p className="text-gray-600 mb-8">
            ご質問、ご意見、ご要望などがございましたら、以下のフォームよりお気軽にお問い合わせください。
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center"
            >
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-green-900 mb-2">
                送信完了
              </h2>
              <p className="text-green-800">
                お問い合わせありがとうございます。内容を確認の上、ご連絡させていただきます。
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none transition-colors"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  メールアドレス <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none transition-colors"
                  placeholder="example@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  件名 <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="question">サイトに関するご質問</option>
                  <option value="bug">不具合の報告</option>
                  <option value="suggestion">ご意見・ご要望</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  お問い合わせ内容 <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gray-900 focus:outline-none transition-colors resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
                <p className="mb-2">
                  ※ お送りいただいた個人情報は、お問い合わせへの回答にのみ使用いたします。
                </p>
                <p>
                  ※ 内容によっては、回答にお時間をいただく場合や、回答できない場合がございます。予めご了承ください。
                </p>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 text-white py-4 rounded-xl font-medium text-lg hover:bg-gray-800 transition-colors"
              >
                送信する
              </motion.button>
            </form>
          )}

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              よくあるご質問
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q. このクイズゲームは本当に無料ですか？
                </h3>
                <p className="text-gray-700">
                  A. はい、完全無料でお楽しみいただけます。会員登録も不要です。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q. スマートフォンでもプレイできますか？
                </h3>
                <p className="text-gray-700">
                  A. はい、スマートフォン、タブレット、PCなど、あらゆるデバイスでお楽しみいただけます。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Q. 問題の追加予定はありますか？
                </h3>
                <p className="text-gray-700">
                  A. はい、定期的に新しい問題を追加していく予定です。ご期待ください。
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
