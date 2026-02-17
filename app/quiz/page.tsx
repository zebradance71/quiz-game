"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { getQuestionsByDifficulty, getRandomQuestions, type Question } from "./data";

// Amazonアソシエイトリンクのデータ（検索結果ページへのリンク）
const amazonLinks = {
  explanation: [
    {
      title: "森永製菓 大粒ラムネ",
      url: "https://www.amazon.co.jp/s?k=ラムネ+大粒&tag=zebradance-22",
      description: "集中力アップの定番。脳のエネルギー補給に",
    },
    {
      title: "味の素 マルチビタミン ゼリー飲料",
      url: "https://www.amazon.co.jp/s?k=味の素+ゼリー+マルチビタミン&tag=zebradance-22",
      description: "手軽に栄養補給。頭を使った後に",
    },
  ],
  result: [
    {
      title: "サントリー プレミアムモルツ",
      url: "https://www.amazon.co.jp/s?k=プレミアムモルツ+ギフト&tag=zebradance-22",
      description: "頑張った自分へのご褒美に。至福の一杯",
    },
    {
      title: "ちょっと贅沢な珈琲店 ドリップコーヒー",
      url: "https://www.amazon.co.jp/s?k=ちょっと贅沢な珈琲店&tag=zebradance-22",
      description: "リラックスタイムに最適な上質な一杯",
    },
    {
      title: "大人の脳トレパズル・ドリル本",
      url: "https://www.amazon.co.jp/s?k=脳トレ+本+大人&tag=zebradance-22",
      description: "もっと脳を鍛えたい方へ。充実のラインナップ",
    },
  ],
};

export default function QuizPage() {
  // ゲームの状態管理
  const [gameState, setGameState] = useState<"difficulty" | "quiz" | "result">("difficulty");
  const [selectedDifficulty, setSelectedDifficulty] = useState<"初級" | "中級" | "上級" | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ questionId: number; answer: number; timeTaken: number; usedHint: boolean }[]>([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());
  const [showHintButton, setShowHintButton] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [hintRevealed, setHintRevealed] = useState(false);

  // タイマー
  useEffect(() => {
    if (gameState !== "quiz" || showExplanation) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
        
        // 15秒経過でヒントボタン表示
        if (elapsed >= 15 && !hintUsed) {
          setShowHintButton(true);
        }

        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return 60 - elapsed;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [gameState, showExplanation, currentQuestionIndex, questionStartTime, hintUsed]);

  // 難易度選択
  const handleDifficultySelect = (difficulty: "初級" | "中級" | "上級") => {
    setSelectedDifficulty(difficulty);
    const allQuestionsForDifficulty = getQuestionsByDifficulty(difficulty);
    const selectedQuestions = getRandomQuestions(allQuestionsForDifficulty, 5);
    setCurrentQuestions(selectedQuestions);
    setGameState("quiz");
    setQuestionStartTime(Date.now());
  };

  // 時間切れ
  const handleTimeUp = () => {
    if (selectedAnswer === null) {
      setUserAnswers([
        ...userAnswers,
        { questionId: currentQuestions[currentQuestionIndex].id, answer: -1, timeTaken: 60, usedHint: hintUsed },
      ]);
      setShowExplanation(true);
    }
  };

  // ヒント表示
  const handleShowHint = () => {
    setHintUsed(true);
    setHintRevealed(true);
  };

  // 回答選択
  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  // 回答確定
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const timeTaken = Math.floor((Date.now() - questionStartTime) / 1000);
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // スコア計算（正解 + 時間ボーナス、ヒント使用時は半分）
    if (isCorrect) {
      const timeBonus = Math.max(0, 60 - timeTaken) * 2;
      let questionScore = currentQuestion.baseScore + timeBonus;
      
      // ヒント使用時はスコア半分
      if (hintUsed) {
        questionScore = Math.floor(questionScore / 2);
      }
      
      setScore(score + questionScore);
    }

    setUserAnswers([
      ...userAnswers,
      { questionId: currentQuestion.id, answer: selectedAnswer, timeTaken, usedHint: hintUsed },
    ]);

    setShowExplanation(true);
  };

  // 次の問題へ
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimer(60);
      setQuestionStartTime(Date.now());
      setShowHintButton(false);
      setHintUsed(false);
      setHintRevealed(false);
    } else {
      checkForPerfectScore();
      setGameState("result");
    }
  };

  // 完璧なスコアの判定
  const checkForPerfectScore = () => {
    const allCorrect = userAnswers.every((ua, index) => {
      return ua.answer === currentQuestions[index]?.correctAnswer;
    });

    const lastCorrect = selectedAnswer === currentQuestions[currentQuestions.length - 1].correctAnswer;

    if (allCorrect && lastCorrect && score >= 800) {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
    }
  };

  // リセット
  const handleRestart = () => {
    setGameState("difficulty");
    setSelectedDifficulty(null);
    setCurrentQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setScore(0);
    setTimer(60);
    setShowHintButton(false);
    setHintUsed(false);
    setHintRevealed(false);
  };

  const currentQuestion = currentQuestions[currentQuestionIndex];

  const correctCount = userAnswers.filter((ua, index) => {
    const question = currentQuestions[index];
    return ua.answer === question?.correctAnswer;
  }).length + (selectedAnswer === currentQuestion?.correctAnswer && showExplanation ? 1 : 0);

  return (
    <article className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {/* 難易度選択画面 */}
        {gameState === "difficulty" && (
          <motion.section
            key="difficulty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl w-full text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">脳トレ・IQクイズ - 難易度を選択</h1>
            <p className="text-gray-600 mb-12">あなたに合ったレベルを選んでください</p>

            <div className="space-y-4">
              {(["初級", "中級", "上級"] as const).map((difficulty) => (
                <motion.button
                  key={difficulty}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDifficultySelect(difficulty)}
                  className="w-full bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-900 text-gray-900 py-6 px-8 rounded-2xl text-xl font-medium transition-all"
                >
                  {difficulty}
                  <span className="block text-sm text-gray-500 mt-1">
                    {difficulty === "初級" && "一般教養・直感で解ける問題（10問からランダム5問）"}
                    {difficulty === "中級" && "論理パズル・計算が必要（10問からランダム5問）"}
                    {difficulty === "上級" && "超難問・高度な推論（10問からランダム5問）"}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.section>
        )}

        {/* クイズ画面 */}
        {gameState === "quiz" && currentQuestion && (
          <motion.section
            key={`quiz-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl w-full"
          >
            {/* ヘッダー情報 */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-sm text-gray-500">
                問題 {currentQuestionIndex + 1} / {currentQuestions.length}
              </div>
              <div className="flex gap-4 items-center">
                <div className="text-sm text-gray-500">難易度: {selectedDifficulty}</div>
                <div
                  className={`text-2xl font-bold ${
                    timer <= 10 ? "text-red-600" : "text-gray-900"
                  }`}
                >
                  {timer}秒
                </div>
              </div>
            </div>

            {/* 進捗バー */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`,
                }}
                className="bg-gray-900 h-2 rounded-full"
              />
            </div>

            {/* 問題 */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
                {currentQuestion.question}
              </h1>

              {/* ヒント表示 */}
              <AnimatePresence>
                {showHintButton && !showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-6"
                  >
                    {!hintRevealed ? (
                      <button
                        onClick={handleShowHint}
                        className="w-full bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-400 text-yellow-900 py-3 px-6 rounded-xl font-medium transition-all"
                      >
                        💡 ヒントを見る（スコア半減）
                      </button>
                    ) : (
                      <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
                        <div className="flex items-start gap-2">
                          <span className="text-xl">💡</span>
                          <div>
                            <div className="font-bold text-yellow-900 mb-1">ヒント</div>
                            <p className="text-yellow-800 text-sm">{currentQuestion.hint}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 選択肢 */}
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  const showResult = showExplanation;

                  let buttonClass =
                    "w-full text-left p-5 rounded-xl border-2 transition-all font-medium";

                  if (showResult) {
                    if (isCorrect) {
                      buttonClass += " bg-green-50 border-green-500 text-green-900";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += " bg-red-50 border-red-500 text-red-900";
                    } else {
                      buttonClass += " bg-white border-gray-200 text-gray-500";
                    }
                  } else {
                    if (isSelected) {
                      buttonClass += " bg-gray-900 border-gray-900 text-white";
                    } else {
                      buttonClass += " bg-white border-gray-300 text-gray-900 hover:border-gray-900";
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileHover={!showResult ? { scale: 1.01 } : {}}
                      whileTap={!showResult ? { scale: 0.99 } : {}}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={buttonClass}
                    >
                      {option}
                      {showResult && isCorrect && (
                        <span className="ml-2 text-green-600">✓</span>
                      )}
                      {showResult && isSelected && !isCorrect && (
                        <span className="ml-2 text-red-600">✗</span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* 解説 */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6"
                >
                  <div className="bg-blue-50 rounded-2xl p-6 mb-4">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">解説</h3>
                    <p className="text-blue-800 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>

                  {/* Amazonリンク（解説画面） */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="text-sm font-bold text-gray-700 mb-4">🧠 脳の栄養・集中力維持</h4>
                    <div className="space-y-3">
                      {amazonLinks.explanation.map((link, index) => (
                        <div
                          key={index}
                          className="bg-white border border-gray-200 rounded-xl p-4"
                        >
                          <div className="font-medium text-gray-900 text-sm mb-1">
                            {link.title}
                          </div>
                          <div className="text-xs text-gray-600 mb-3">{link.description}</div>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2 rounded-lg transition-colors"
                          >
                            Amazonでチェック →
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ボタン */}
            <div className="flex justify-end">
              {!showExplanation ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className={`px-8 py-4 rounded-full font-medium text-lg transition-all ${
                    selectedAnswer === null
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  回答する
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextQuestion}
                  className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all"
                >
                  {currentQuestionIndex < currentQuestions.length - 1 ? "次の問題へ" : "結果を見る"}
                </motion.button>
              )}
            </div>

            {/* スコア表示 */}
            <div className="text-center mt-8 text-gray-600">
              現在のスコア: <span className="font-bold text-gray-900 text-2xl">{score}</span> 点
              {hintUsed && <span className="ml-2 text-sm text-yellow-600">(ヒント使用中)</span>}
            </div>
          </motion.section>
        )}

        {/* 結果画面 */}
        {gameState === "result" && (
          <motion.section
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full text-center"
          >
            {/* 完璧な結果の場合 */}
            {correctCount === currentQuestions.length && score >= 800 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-yellow-400 rounded-3xl p-12 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="text-6xl mb-4"
                  >
                    🏆
                  </motion.div>
                  <h1 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4">
                    天才の領域
                  </h1>
                  <p className="text-yellow-800 text-lg">
                    あなたは卓越した論理的思考力を持っています
                  </p>
                </div>

                {/* デジタル合格証 */}
                <div className="bg-white border-4 border-gray-900 rounded-2xl p-8 shadow-2xl mb-6">
                  <div className="text-sm text-gray-500 mb-2">認定証</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">IQクイズマスター</h2>
                  <div className="border-t-2 border-gray-200 pt-4 mb-4">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{score}点</div>
                    <div className="text-sm text-gray-600">
                      {selectedDifficulty}レベル 全{currentQuestions.length}問完全正解
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date().toLocaleDateString("ja-JP")}
                  </div>
                </div>
              </motion.div>
            )}

            {/* 通常の結果 */}
            {!(correctCount === currentQuestions.length && score >= 800) && (
              <>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  お疲れ様でした！
                </h1>
                <p className="text-gray-600 mb-12">あなたの結果</p>

                <div className="bg-gray-50 rounded-3xl p-12 mb-8">
                  <div className="text-6xl font-bold text-gray-900 mb-4">{score}</div>
                  <div className="text-xl text-gray-600 mb-8">点</div>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{correctCount}</div>
                      <div className="text-sm text-gray-600">正解数</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {currentQuestions.length}
                      </div>
                      <div className="text-sm text-gray-600">総問題数</div>
                    </div>
                  </div>
                </div>

                {/* 評価メッセージ */}
                <div className="mb-8 text-lg text-gray-700">
                  {correctCount === currentQuestions.length && "完璧です！素晴らしい！"}
                  {correctCount === currentQuestions.length - 1 && "惜しい！あと一歩でした！"}
                  {correctCount < currentQuestions.length - 1 &&
                    correctCount >= currentQuestions.length / 2 &&
                    "よく頑張りました！"}
                  {correctCount < currentQuestions.length / 2 && "次は頑張りましょう！"}
                </div>
              </>
            )}

            {/* Amazonリンク（結果画面） */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">🎁 自分へのご褒美</h4>
              <div className="space-y-3">
                {amazonLinks.result.map((link, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4"
                  >
                    <div className="font-medium text-gray-900 text-sm mb-1">
                      {link.title}
                    </div>
                    <div className="text-xs text-gray-600 mb-3">{link.description}</div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2 rounded-lg transition-colors"
                    >
                      Amazonでチェック →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* ボタン */}
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all"
              >
                もう一度挑戦
              </motion.button>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </article>
  );
}
