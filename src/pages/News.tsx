
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      date: "December 2024",
      title: "Zenblock Labs Completes MVP Development",
      excerpt: "Successfully developed and tested our blockchain traceability platform for pharmaceutical supply chains.",
      category: "Product Update"
    },
    {
      date: "November 2024", 
      title: "Pilot Program Launch in India and UAE",
      excerpt: "Beginning outreach to pharmaceutical companies for pilot implementations across key markets.",
      category: "Business Development"
    },
    {
      date: "October 2024",
      title: "Regulatory Partnership Initiatives",
      excerpt: "Building strategic relationships with Tatmeen, FDA, and CDSCO for compliance excellence.",
      category: "Partnerships"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zenblock-primary-text mb-6">
              Latest News
            </h1>
            <p className="text-xl text-zenblock-secondary-text max-w-3xl mx-auto">
              Stay updated with the latest developments at Zenblock Labs and in the pharmaceutical blockchain space.
            </p>
          </div>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="bg-zenblock-white card-hover">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm text-zenblock-electric-blue font-medium">{item.category}</span>
                        <span className="text-sm text-zenblock-secondary-text">{item.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-zenblock-primary-text mb-3">{item.title}</h2>
                      <p className="text-zenblock-secondary-text text-lg">{item.excerpt}</p>
                    </div>
                  </div>
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

export default News;
