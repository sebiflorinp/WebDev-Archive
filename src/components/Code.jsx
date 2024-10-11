import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Code({ code, language }) {
  return (
    <SyntaxHighlighter
      className="text-sm lg:text-lg"
      style={atomOneDark}
      language={language}
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default Code;
