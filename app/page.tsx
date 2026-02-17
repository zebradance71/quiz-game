"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          脳トレ・IQクイズ
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          大人が楽しめる本格的な論理パズル
        </p>
        <Link href="/quiz">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            クイズを始める
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
