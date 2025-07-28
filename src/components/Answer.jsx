import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { checkHeading, replaceHeadingStars } from "../helper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Answer = ({ ans, totalResult, index, type }) => {
  const [heading, setHeadig] = useState(false);
  const [answer, setAnswer] = useState(ans);
  useEffect(() => {
    const clean = replaceHeadingStars(ans);
    if (checkHeading(clean)) {
      setHeadig(true);
    }
    setAnswer(clean);
  }, []);

  const renderer = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={oneDark}
          PreTag={"div"}
          language={match[1]}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index == 0 && totalResult > 1 ? (
        <span className="pt-2 italic font-semibold text-xl block">
          {answer}
        </span>
      ) : heading ? (
        <span className={"pt-2 italic font-semibold text-lg block"}>
          {answer}
        </span>
      ) : (
        <span className={type == "q" ? "pl-1" : "pl-5"}>
          <ReactMarkdown components={renderer}>{answer}</ReactMarkdown>
        </span>
      )}
    </>
  );
};

export default Answer;
