import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "脳トレ・IQクイズゲーム | 30代40代50代の大人向け無料論理パズル",
  description: "30代・40代・50代の大人が楽しめる本格的な脳トレクイズゲーム。無料で遊べる論理パズル・IQテスト30問を収録。初級から上級まで3段階の難易度で、あなたの知的好奇心を刺激します。",
  keywords: "脳トレ,IQクイズ,論理パズル,30代,40代,50代,大人,無料,知的ゲーム",
  openGraph: {
    title: "脳トレ・IQクイズゲーム | 大人向け無料論理パズル",
    description: "30代・40代・50代の大人が楽しめる本格的な脳トレクイズ。無料で遊べる論理パズル30問を収録。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased bg-white">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
