import { CodeBlock, dracula } from "react-code-blocks";

function MyCoolCodeBlock() {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}