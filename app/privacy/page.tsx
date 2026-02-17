import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | 脳トレ・IQクイズゲーム",
  description: "脳トレ・IQクイズゲームのプライバシーポリシー、個人情報保護方針、Cookie利用について",
};

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              個人情報の取り扱いについて
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイト「脳トレ・IQクイズゲーム」（以下、「当サイト」）では、ユーザーの個人情報を適切に保護することを重要な責務と考えています。本プライバシーポリシーは、当サイトがどのような情報を収集し、どのように利用するかについて説明するものです。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              収集する情報
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトでは、以下の情報を収集する場合があります：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>アクセス解析のための匿名の統計情報</li>
              <li>お問い合わせフォームから送信された情報（お名前、メールアドレス、メッセージ内容）</li>
              <li>Cookieやその他の技術を使用して収集される情報</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookieの使用について
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトでは、ユーザーの利便性向上およびサイトの改善のため、Cookieを使用しています。Cookieとは、ウェブサイトがユーザーのコンピュータに保存する小さなテキストファイルです。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookieを使用することで、ユーザーの設定やサイトの利用状況を記録し、より良いサービスを提供することができます。ブラウザの設定でCookieを無効にすることも可能ですが、一部の機能が正常に動作しない場合があります。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              アクセス解析ツールについて
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトでは、Googleアナリティクスなどのアクセス解析ツールを使用しています。これらのツールは、Cookieを使用してユーザーのアクセス情報（訪問回数、滞在時間、閲覧ページなど）を収集します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              収集された情報は匿名で処理され、個人を特定するものではありません。これらの情報は、サイトの利用状況を把握し、サービス向上のために活用されます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Amazonアソシエイト・プログラムについて
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              第三者（Amazonを含む）がCookieを使用して、ユーザーが当サイトや他のサイトに過去にアクセスした際の情報に基づいて広告を配信します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Google が広告 Cookie を使用することにより、ユーザーが当サイトや他のサイトにアクセスした際の情報に基づいて、適切な広告を表示できます。ユーザーは、広告設定でパーソナライズ広告を無効にできます。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              広告配信について
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトでは、第三者配信の広告サービス（Google AdSenseなど）を利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するため、Cookieを使用する場合があります。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              これらのCookieは、ユーザーが当サイトや他のサイトにアクセスした際の情報を使用して広告を配信しますが、個人を特定できる情報は含まれません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              個人情報の第三者への開示
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に開示することはありません：
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>ユーザーの同意がある場合</li>
              <li>法令に基づく開示が必要な場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お問い合わせ情報の取り扱い
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              お問い合わせフォームから送信された情報（お名前、メールアドレス、メッセージ内容）は、お問い合わせへの回答および必要な連絡を行うためにのみ使用します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              これらの情報は適切に管理し、お問い合わせへの対応が完了した後も、一定期間保管する場合がありますが、目的外の使用や第三者への提供は行いません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              プライバシーポリシーの変更
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              本プライバシーポリシーに関するお問い合わせは、
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                お問い合わせフォーム
              </Link>
              よりご連絡ください。
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
            <p>制定日：2026年2月17日</p>
            <p>最終更新日：2026年2月17日</p>
          </div>
        </article>
      </div>
    </div>
  );
}
