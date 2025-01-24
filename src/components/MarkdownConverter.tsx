import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

interface MarkdownConverterProps {
  markdown?: string;
  url?: string;
  localFile?: File;
}

const MarkdownConverter: React.FC<MarkdownConverterProps> = ({ markdown, url, localFile }) => {
  const [html, setHtml] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        if (url) {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Error fetching markdown from URL: ${response.statusText}`);
          }
          const data = await response.text();
          setHtml(marked(data));
        } else if (localFile) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const text = e.target?.result as string;
            setHtml(marked(text));
          };
          reader.onerror = () => {
            setError('Error reading local file');
          };
          reader.readAsText(localFile);
        } else if (markdown) {
          setHtml(marked(markdown));
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchMarkdown();
  }, [markdown, url, localFile]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownConverter;