import React from "react";

import MarkdownParser from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight as highlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter style={highlight} language={language} children={value || ""} />;
  },
};

const Markdown = ({ children }) => {
  return (
    <MarkdownParser className="markdown" renderers={renderers} plugins={[gfm]}>
      {children}
    </MarkdownParser>
  );
};

export default Markdown;
