import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            このサイトについて
          </Link>
          <Link
            href="/privacy"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            お問い合わせ
          </Link>
        </nav>
        <div className="text-center text-xs text-gray-500">
          <p className="mb-2">
            © {currentYear} 脳トレ・IQクイズゲーム. All rights reserved.
          </p>
          <p className="text-xs">
            当サイトはAmazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
          </p>
        </div>
      </div>
    </footer>
  );
}
