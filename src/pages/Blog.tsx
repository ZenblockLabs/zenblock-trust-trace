
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Pharmaceutical Supply Chain Transparency",
      excerpt: "How blockchain technology is revolutionizing drug traceability and combating counterfeiting in the global pharmaceutical industry.",
      date: "December 15, 2024",
      readTime: "5 min read",
      category: "Industry Insights"
    },
    {
      title: "Understanding Regulatory Compliance in Blockchain Solutions",
      excerpt: "A deep dive into how blockchain can help pharmaceutical companies meet FDA, CDSCO, and Tatmeen requirements.",
      date: "December 10, 2024", 
      readTime: "7 min read",
      category: "Compliance"
    },
    {
      title: "Building Trust in Digital Supply Chains",
      excerpt: "Exploring the key components of trust in modern pharmaceutical supply chains and how technology enables transparency.",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Technology"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Blog
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Insights, updates, and thought leadership on blockchain technology, 
              pharmaceutical compliance, and supply chain innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-zenblock-white card-hover">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-sm text-zenblock-electric-blue font-medium">{post.category}</span>
                    <div className="flex items-center gap-2 text-sm text-zenblock-secondary-text mt-1">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-zenblock-primary-text mb-3">{post.title}</h2>
                  <p className="text-zenblock-secondary-text mb-4">{post.excerpt}</p>
                  <button className="text-zenblock-electric-blue font-medium hover:underline">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
