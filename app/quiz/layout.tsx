import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "脳トレ・IQクイズゲーム | 30代40代50代の大人向け無料論理パズル",
  description: "30代・40代・50代の大人が楽しめる本格的な脳トレクイズゲーム。無料で遊べる論理パズル・IQテスト30問を収録。初級から上級まで3段階の難易度で、あなたの知的好奇心を刺激します。制限時間内に解答して、天才の領域を目指しましょう。",
  keywords: "脳トレ,IQクイズ,論理パズル,30代,40代,50代,大人,無料,知的ゲーム,頭脳ゲーム,クイズゲーム",
  openGraph: {
    title: "脳トレ・IQクイズゲーム | 大人向け無料論理パズル",
    description: "30代・40代・50代の大人が楽しめる本格的な脳トレクイズ。無料で遊べる論理パズル30問を収録。",
    type: "website",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
