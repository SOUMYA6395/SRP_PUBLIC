import React from "react";
import FaqComponents from "./FaqComponents";

const Faqs = () => {
  const faqs = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 yeas",
    },
  ];
  return (
    <div>
      {faqs.map((faq, index) => {
        return (
          <div key={index} style={{ margin: "10px auto" }}>
            <FaqComponents faq={faq} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
