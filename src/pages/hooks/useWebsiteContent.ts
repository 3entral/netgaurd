import { useState, useEffect } from 'react';
import websiteContent from '../data/website-content.json';

export function useWebsiteContent() {
  const [content, setContent] = useState(websiteContent);

  // In a real application, you would fetch this from an API
  useEffect(() => {
    setContent(websiteContent);
  }, []);

  return content;
}