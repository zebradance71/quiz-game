import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて | 脳トレ・IQクイズゲーム",
  description: "脳トレ・IQクイズゲームの運営情報、サイトの目的、コンテンツについて",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← トップページに戻る
        </Link>

        <article>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            このサイトについて
          </h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              サイトの目的
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              「脳トレ・IQクイズゲーム」は、30代・40代・50代の大人の方々に向けて、楽しみながら知的好奇心を満たし、論理的思考力を鍛えていただくことを目的としたWebサイトです。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              日常生活の中で、じっくりと考える機会は意外と少ないものです。当サイトでは、通勤時間や休憩時間などのちょっとした空き時間に、頭を使って楽しめる良質な論理パズルやIQクイズを提供しています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              スマートフォン、タブレット、パソコンなど、あらゆるデバイスで無料でご利用いただけます。会員登録も不要で、気軽にお楽しみいただけます。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              コンテンツの特徴
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  📚 厳選された30問の良問
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  初級・中級・上級の3つの難易度に分けて、各10問ずつ、合計30問の論理パズル・IQクイズを収録しています。知識だけでは解けない、思考力が試される問題ばかりです。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🎲 ランダム出題システム
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  各難易度から毎回ランダムに5問が選ばれるため、何度プレイしても新鮮な体験ができます。飽きずに長くお楽しみいただけます。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  💡 充実した解説
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  すべての問題に詳しい解説を付けています。正解・不正解に関わらず、なぜその答えになるのかを理解することで、論理的思考力が養われます。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ⏱️ 制限時間とスコアシステム
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  各問題には60秒の制限時間があり、早く正解するほど高得点を獲得できます。自分の実力を試し、成長を実感できる仕組みになっています。
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  🎯 インテリジェント・ヒント機能
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  15秒経過後、ヒントを表示できます。ただし、ヒントを使用するとスコアが半分になるため、戦略的な判断が求められます。
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              こんな方におすすめ
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span className="text-gray-700 leading-relaxed">
                  論理的思考力を鍛えたい方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span className="text-gray-700 leading-relaxed">
                  通勤時間や休憩時間を有意義に過ごしたい方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span className="text-gray-700 leading-relaxed">
                  パズルやクイズが好きな方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span className="text-gray-700 leading-relaxed">
                  脳トレに興味がある30代〜50代の方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span className="text-gray-700 leading-relaxed">
                  知的な刺激を求めている方
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              運営者情報
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <table className="w-full">
                <tbody className="space-y-3">
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium text-gray-900">サイト名</td>
                    <td className="py-3 text-gray-700">脳トレ・IQクイズゲーム</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium text-gray-900">運営者</td>
                    <td className="py-3 text-gray-700">脳トレゲーム運営チーム</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium text-gray-900">設立</td>
                    <td className="py-3 text-gray-700">2026年2月</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">お問い合わせ</td>
                    <td className="py-3 text-gray-700">
                      <Link
                        href="/contact"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        お問い合わせフォーム
                      </Link>
                      よりご連絡ください
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              免責事項
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトのコンテンツは、教育および娯楽を目的として提供されています。問題の内容や解説には細心の注意を払っていますが、その正確性や完全性を保証するものではありません。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトのご利用により生じたいかなる損害についても、運営者は責任を負いかねます。
            </p>
            <p className="text-gray-700 leading-relaxed">
              当サイトのコンテンツは予告なく変更・削除される場合があります。予めご了承ください。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              アフィリエイトプログラムについて
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              ユーザーの皆様には、脳トレに役立つ商品やリラックスタイムを充実させる商品をご紹介しています。購入は任意であり、サイトの利用に必須ではありません。
            </p>
          </section>

          <section className="bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">
              お問い合わせ
            </h2>
            <p className="text-blue-800 mb-4">
              当サイトに関するご質問、ご意見、ご要望などがございましたら、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              お問い合わせフォームへ
            </Link>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
            <p>最終更新日：2026年2月17日</p>
          </div>
        </article>
      </div>
    </div>
  );
}
