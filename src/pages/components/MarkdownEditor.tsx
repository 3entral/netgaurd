import React, { useState } from 'react';
import { Save } from 'lucide-react';

interface MarkdownEditorProps {
  content: string;
  onSave: (content: string) => void;
}

export default function MarkdownEditor({ content, onSave }: MarkdownEditorProps) {
  const [value, setValue] = useState(content);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={() => onSave(value)}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-[600px] px-4 py-3 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500 font-mono text-sm"
      />
    </div>
  );
}