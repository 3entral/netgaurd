import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ChevronLeft, ChevronRight } from 'lucide-react';

interface Post {
  slug: string;
  title: string;
  description: string;
  imagePost: string;
  date: string;
  category: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    // In production, this would fetch from your API
    // For now, we'll use mock data
    const mockPosts = [
      {
        slug: 'first-post-hello-world',
        title: 'First Post Hello World',
        description: 'Welcome to our first blog post about web security and protection',
        imagePost: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
        date: '2024-03-20',
        category: 'security'
      },
      {
        slug: 'web-security-best-practices',
        title: 'Web Security Best Practices for 2024',
        description: 'Essential security practices to protect your website in 2024',
        imagePost: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
        date: '2024-03-20',
        category: 'security'
      },
      // Add more mock posts here
    ];

    setPosts(mockPosts);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Stay updated with the latest in web security, SEO, and development
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-[#1c2a3d] rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-colors h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.imagePost}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors line-clamp-2 break-words">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-[#1c2a3d] border border-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === page
                      ? 'bg-blue-600'
                      : 'bg-[#1c2a3d] border border-blue-500/20 hover:bg-[#243040]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-[#1c2a3d] border border-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}