import React, { useState, useEffect } from 'react';
import { Shield, Plus, Edit2, Trash2, Save, X, Settings } from 'lucide-react';
import websiteContent from '../data/website-content.json';
import Notification from '../components/Notification';
import MarkdownEditor from '../components/MarkdownEditor';
import SecuritySettings from '../components/SecuritySettings';

interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  content: string;
}

interface ContentEditorProps {
  content: any;
  path: string[];
  onSave: (path: string[], value: any) => void;
}

function ContentEditor({ content, path, onSave }: ContentEditorProps) {
  const [editedContent, setEditedContent] = useState(content);

  const handleChange = (value: any) => {
    setEditedContent(value);
    // Real-time update
    onSave(path, value);
  };

  if (typeof content === 'string' || typeof content === 'number') {
    return (
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={editedContent}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
    );
  }

  if (Array.isArray(content)) {
    return (
      <div className="space-y-2">
        {content.map((item, index) => (
          <ContentEditor
            key={index}
            content={item}
            path={[...path, index.toString()]}
            onSave={onSave}
          />
        ))}
      </div>
    );
  }

  if (typeof content === 'object') {
    return (
      <div className="space-y-4">
        {Object.entries(content).map(([key, value]) => (
          <div key={key}>
            <h4 className="font-semibold text-sm text-gray-400 mb-2">{key}</h4>
            <ContentEditor
              content={value}
              path={[...path, key]}
              onSave={onSave}
            />
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('blog');
  const [content, setContent] = useState(websiteContent);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  useEffect(() => {
    // Load posts from markdown files
    const loadPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        setPosts(posts);
      } catch (error) {
        console.error('Error loading posts:', error);
        showNotification('Error loading posts', 'error');
      }
    };

    if (isAuthenticated) {
      loadPosts();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      showNotification('Successfully logged in', 'success');
    } else {
      showNotification('Invalid credentials', 'error');
    }
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleContentSave = async (path: string[], value: any) => {
    try {
      const newContent = { ...content };
      let current = newContent;
      
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      current[path[path.length - 1]] = value;
      setContent(newContent);
      
      // Save to backend
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newContent)
      });

      if (!response.ok) throw new Error('Failed to save content');
      
      showNotification('Content updated successfully!', 'success');
    } catch (error) {
      showNotification('Error updating content', 'error');
    }
  };

  const handleNewPost = () => {
    const newPost: Post = {
      slug: `new-post-${Date.now()}`,
      title: 'New Post',
      category: 'uncategorized',
      date: new Date().toISOString().split('T')[0],
      content: `Title: \`New Post\`
Description: \`Enter description here\`
Category: \`uncategorized\`
ImagePost: \`https://images.unsplash.com/photo-placeholder\`
---
# New Post

Enter your content here...`
    };
    setEditingPost(newPost);
  };

  const handlePostSave = async (post: Post) => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });

      if (!response.ok) throw new Error('Failed to save post');

      const updatedPosts = posts.map(p => 
        p.slug === post.slug ? post : p
      );
      if (!posts.find(p => p.slug === post.slug)) {
        updatedPosts.push(post);
      }
      setPosts(updatedPosts);
      setEditingPost(null);
      
      showNotification('Post saved successfully!', 'success');
    } catch (error) {
      showNotification('Error saving post', 'error');
    }
  };

  const handlePostDelete = async (slug: string) => {
    try {
      const response = await fetch(`/api/posts/${slug}`, {
        method: 'DELETE'
      });

      if (!response.ok) throw new Error('Failed to delete post');

      setPosts(posts.filter(p => p.slug !== slug));
      showNotification('Post deleted successfully!', 'success');
    } catch (error) {
      showNotification('Error deleting post', 'error');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#111c2d] flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-[#1c2a3d] p-8 rounded-xl border border-blue-500/20">
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold">Admin Login</h1>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#243040] border border-blue-500/20 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111c2d]">
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          {activeTab === 'blog' && (
            <button 
              onClick={handleNewPost}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Post
            </button>
          )}
        </div>

        <div className="bg-[#1c2a3d] rounded-xl border border-blue-500/20">
          <div className="border-b border-blue-500/20">
            <div className="flex">
              <button
                className={`px-6 py-4 ${activeTab === 'blog' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('blog')}
              >
                Blog Posts
              </button>
              <button
                className={`px-6 py-4 ${activeTab === 'content' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('content')}
              >
                Website Content
              </button>
              <button
                className={`px-6 py-4 ${activeTab === 'security' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'}`}
                onClick={() => setActiveTab('security')}
              >
                Security Settings
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'blog' ? (
              editingPost ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">
                      {editingPost.slug === `new-post-${Date.now()}` ? 'New Post' : `Editing: ${editingPost.title}`}
                    </h2>
                    <button
                      onClick={() => setEditingPost(null)}
                      className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                  <MarkdownEditor
                    content={editingPost.content}
                    onSave={(content) => handlePostSave({ ...editingPost, content })}
                  />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-500/20">
                        <th className="px-6 py-4 text-left">Title</th>
                        <th className="px-6 py-4 text-left">Category</th>
                        <th className="px-6 py-4 text-left">Date</th>
                        <th className="px-6 py-4 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {posts.map((post) => (
                        <tr key={post.slug} className="border-b border-blue-500/20">
                          <td className="px-6 py-4">{post.title}</td>
                          <td className="px-6 py-4">{post.category}</td>
                          <td className="px-6 py-4">{post.date}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setEditingPost(post)}
                                className="p-2 hover:bg-blue-500/10 rounded-lg transition-colors"
                              >
                                <Edit2 className="w-5 h-5 text-blue-500" />
                              </button>
                              <button 
                                onClick={() => handlePostDelete(post.slug)}
                                className="p-2 hover:bg-red-500/10 rounded-lg transition-colors"
                              >
                                <Trash2 className="w-5 h-5 text-red-500" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            ) : activeTab === 'content' ? (
              <div className="space-y-8">
                <ContentEditor
                  content={content}
                  path={[]}
                  onSave={handleContentSave}
                />
              </div>
            ) : (
              <SecuritySettings onSave={() => showNotification('Security settings updated!', 'success')} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}