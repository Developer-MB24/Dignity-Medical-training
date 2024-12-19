"use client";
import Footer from "@/components/client/common/Footer";
import Logo from "@/components/client/common/Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const questionsData = [
  {
    question: "What is the primary goal of HIPAA?",
    options: [
      "To reduce healthcare costs",
      "To protect patient health information",
      "To improve healthcare quality",
      "To increase access to healthcare",
    ],
    correctAnswer: 1, // Adjusted index
  },
  {
    question: "What is the difference between PHI and ePHI?",
    options: [
      "There is no difference.",
      "PHI is paper-based, while ePHI is electronic.",
      "PHI is more sensitive than ePHI.",
      "PHI is for individuals, while ePHI is for organizations.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is NOT a core principle of HIPAA?",
    options: ["Confidentiality", "Integrity", "Availability", "Profitability"],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is NOT a covered entity under HIPAA?",
    options: [
      "Health insurance company",
      "Hospital",
      "Law firm",
      "Healthcare clearinghouse",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of the following is an example of a covered entity?",
    options: [
      "A patient",
      "A healthcare provider",
      "A software vendor",
      "A data storage company",
    ],
    correctAnswer: 1,
  },
];

const TestPage = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0); // Track selected question
  const [answers, setAnswers] = useState(
    Array(questionsData.length).fill(null)
  ); // To store user answers
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30 * 60); // Timer in seconds (30 minutes)
  const router = useRouter();

  useEffect(() => {
    if (timer === 0) {
      handleSubmit();
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Calculate the score
    const totalScore = questionsData.reduce((acc, question, index) => {
      if (answers[index] === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const percentage = (totalScore / questionsData.length) * 100;
    setScore(percentage);
    setSubmitted(true);
  };

  const handleRetake = () => {
    setAnswers(Array(questionsData.length).fill(null));
    setSubmitted(false);
    setTimer(30 * 60); // Reset timer
  };

  const goToNextQuestion = () => {
    if (selectedQuestionIndex < questionsData.length - 1) {
      setSelectedQuestionIndex(selectedQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (selectedQuestionIndex > 0) {
      setSelectedQuestionIndex(selectedQuestionIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-semibold mb-6">
          {score >= 70
            ? "Congratulations, You Passed!"
            : "Please Retake the Test"}
        </h1>
        <p className="text-lg">Your Score: {score}%</p>
        {score >= 70 ? (
          <>
            <p className="text-green-600">
              You have successfully passed the test.
            </p>
            <p className="text-green-600">
              Your certificate is generated successfully
            </p>
            <button
              onClick={() => router.push("user/courses")}
              className="mt-6 bg-red-500 text-white font-semibold py-2 px-4 rounded"
            >
              Go to Mycourse
            </button>
          </>
        ) : (
          <button
            onClick={handleRetake}
            className="mt-6 bg-red-500 text-white font-semibold py-2 px-4 rounded"
          >
            Retake the Test
          </button>
        )}
      </div>
    );
  }

  return (
    <>
      <header className="bg-white text-black font-medium sticky top-0 z-40 shadow-sm shadow-black/20">
        <div className="py-4 px-5 flex items-center justify-between bg-[#ececec]">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className=" text-center">
            <h2 className="text-xl font-semibold mb-4">
              Time Remaining: {formatTime(timer)}
            </h2>
          </div>
          {/* Right side: Submit Button */}
          <div className="flex items-center">
            <button
              onClick={handleSubmit}
              className="bg-primarygold text-white px-4 py-2 rounded"
            >
              Submit Test
            </button>
          </div>
        </div>
      </header>

      <div className="flex max-w-4xl mx-auto p-6">
        {/* Left Side - Questions List */}
        <div className="w-1/4 border-r pr-4">
          <h2 className="font-semibold mb-4 bg-slate-100 border-2 p-2 shadow-md rounded-lg">
            Questions
          </h2>
          <ul className="space-y-2">
            {questionsData.map((question, index) => (
              <li
                key={index}
                onClick={() => setSelectedQuestionIndex(index)}
                className={`cursor-pointer p-2 rounded-lg ${
                  selectedQuestionIndex === index
                    ? "bg-gray-200 font-semibold"
                    : ""
                }`}
              >
                {index + 1}. {question.question}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Selected Question Options */}
        <div className="w-3/4 pl-6">
          <h2 className="text-lg font-semibold mb-4 bg-slate-100 border-2 p-2 shadow-md rounded-lg">
            {questionsData[selectedQuestionIndex].question}
          </h2>
          <ul className="space-y-2 bg-slate-100 border-2 p-2 shadow-md rounded-lg">
            {questionsData[selectedQuestionIndex].options.map(
              (option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${selectedQuestionIndex}`}
                      value={optionIndex}
                      onChange={() =>
                        handleAnswerChange(selectedQuestionIndex, optionIndex)
                      }
                      checked={answers[selectedQuestionIndex] === optionIndex}
                    />{" "}
                    {option}
                  </label>
                </li>
              )
            )}
          </ul>

          {/* Next and Previous Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={goToPreviousQuestion}
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded disabled:opacity-50"
              disabled={selectedQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={goToNextQuestion}
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded disabled:opacity-50"
              disabled={selectedQuestionIndex === questionsData.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TestPage;
