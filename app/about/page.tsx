import React from 'react';
import ReactMarkdown from 'react-markdown';
import myMarkdownFile from './data.md';

import Hero from '@/components/hero'

const MyComponent = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 sm:px-6 relative'>
      <ReactMarkdown>{myMarkdownFile}</ReactMarkdown>
    </div>
  );
};

export default MyComponent;