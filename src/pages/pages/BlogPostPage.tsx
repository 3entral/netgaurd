import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface PostData {
  title: string;
  description: string;
  keywords: string[];
  category: string;
  imagePost: string;
  schema: string;
  content: string;
  date: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, this would fetch from your API
    // For now, we'll use mock data
    const mockPost = {
      title: 'First Post Hello World',
      description: 'Welcome to our first blog post about web security and protection',
      keywords: ['first post', 'hello', 'web security', 'netguard'],
      category: 'security',
      imagePost: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
      schema: '{}',
      content: `# Welcome to Netguard Blog

In this first post, we'll explore the importance of web security in today's digital landscape. As cyber threats continue to evolve, protecting your online presence has become more crucial than ever.

## Why Web Security Matters

In today's interconnected world, websites face numerous security challenges:

1. **Cyber Attacks**: Daily threats from malicious actors
2. **Data Breaches**: Sensitive information at risk
3. **DDoS Attacks**: Service disruption attempts

\`\`\`python
import os
from security import SecurityAudit

# Initialize security audit
audit = SecurityAudit()

# Run comprehensive scan
results = audit.run_scan()
print(f"Found {len(results.vulnerabilities)} vulnerabilities")
\`\`\`

## How Netguard Helps

Our comprehensive security solutions provide:

- Advanced firewall protection
- Real-time threat monitoring
- Automated backup systems
- SSL certificate management

### Getting Started

To begin securing your website, consider these steps:

1. Conduct a security audit
2. Implement basic protection measures
3. Monitor your website regularly

Stay tuned for more security tips and insights in our upcoming posts!`,
      date: '2024-03-20'
    };

    // Mock related posts based on category and keywords
    const mockRelatedPosts = [
      {
        slug: 'web-security-best-practices',
        title: 'Web Security Best Practices for 2024',
        description: 'Essential security practices to protect your website in 2024',
        category: 'security'
      },
      {
        slug: 'ddos-protection-guide',
        title: 'Complete Guide to DDoS Protection',
        description: 'Learn how to protect your website from DDoS attacks',
        category: 'security'
      },
      {
        slug: 'ssl-certificates-explained',
        title: 'SSL Certificates Explained',
        description: 'Everything you need to know about SSL certificates',
        category: 'security'
      }
    ];

    setPost(mockPost);
    setRelatedPosts(mockRelatedPosts.slice(0, 5)); // Show max 5 related posts
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111c2d] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#111c2d] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-400">Post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-[#1c2a3d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent break-words">
              {post.title}
            </h1>
            <p className="text-gray-400 text-lg">{post.description}</p>
          </div>
        </div>
        <div className="relative h-96 max-w-5xl mx-auto">
          <img
            src={post.imagePost}
            alt={post.title}
            className="w-full h-full object-cover rounded-t-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111c2d] to-transparent"></div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-invert prose-blue prose-lg max-w-none">
            <div className="prose-headings:bg-gradient-to-r prose-headings:from-blue-500 prose-headings:to-purple-500 prose-headings:bg-clip-text prose-headings:text-transparent">
              <div className="prose-p:text-gray-300 prose-strong:text-white prose-strong:font-semibold prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-500/5 prose-blockquote:rounded-lg prose-blockquote:py-2 prose-blockquote:px-4 prose-code:text-blue-300 prose-pre:bg-[#1c2a3d] prose-pre:border prose-pre:border-blue-500/20 prose-pre:rounded-xl prose-li:text-gray-300 prose-img:rounded-xl prose-hr:border-blue-500/20">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </article>

          {/* Keywords */}
          <div className="mt-12 pt-8 border-t border-blue-500/20">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm hover:bg-blue-500/20 transition-colors cursor-pointer"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-blue-500/20">
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Related Posts
              </h2>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    title={relatedPost.description}
                    className="block p-4 bg-[#1c2a3d] rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                  >
                    <h3 className="text-lg font-semibold mb-2 hover:text-blue-500 transition-colors line-clamp-1 break-words">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{relatedPost.category}</span>
                      <span className="text-blue-500 flex items-center gap-1">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}