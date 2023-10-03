import React from 'react';
import ReactMarkdown from 'react-markdown';
import myMarkdownFile from './data.md';

const MyComponent = () => {
  return (
    <div>
      <ReactMarkdown>{myMarkdownFile}</ReactMarkdown>
    </div>
  );
};

export default MyComponent;