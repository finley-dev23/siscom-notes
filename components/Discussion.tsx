"use client";

import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";

export default function Discussion() {
  const discussions = [
    {
      user: "Benjamin Slack",
      time: "12 days ago",
      content: "A \"______sharing\" platform is an excellent business model as Uber and Airbnb have proven. You didn't list any competitors, and as a potential investor, I've never looked into infrastructure investment. Who are your competitors in the market?",
      likes: 0,
      replies: 1,
      avatar: "BS"
    },
    {
      user: "Sarah Kimani",
      time: "9 days ago",
      content: "@benjamin-slack Hi Benjamin - thank you for your interest! Our main competitors are traditional infrastructure investment platforms and direct infrastructure providers. The main differences between those platforms and Siscom Africa are (1) our accessibility - we are the only infrastructure investment marketplace that makes opportunities accessible to retail investors with low minimums. We also require all projects to provide detailed financial projections and complete technical assessments before they can be listed. (2) Ease of use - we have the easiest to use platform experience, which gives investors control over their infrastructure investments, but also the ability to discover and invest in minutes. With other platforms, you need to be an accredited investor and go through complex processes. (3) Transparency - we are the only platform that allows investors to see detailed project information, expected returns, and risk profiles all in one place. This prevents any confusion about investment terms and helps both investors and project teams keep clear records. I hope you will check out Siscom Africa when you are ready to make your first infrastructure investment!",
      likes: 2,
      replies: 0,
      avatar: "SK",
      isFounder: true
    },
    {
      user: "Dave Vianen",
      time: "20 days ago",
      content: "In 2024, $1.5 million cash was burned. There was $1.9 million in cash left at the end of 2024. Now you are raising $1.25M. What are you going to do with that because it seems that's enough until Q2-2026 with this burn-rate. Thanks",
      likes: 2,
      replies: 1,
      avatar: "DV"
    },
    {
      user: "Sarah Kimani",
      time: "17 days ago",
      content: "@dave-vianen Hi Dave. Thank you for your questions. We are launching a few partnerships in the next 2 months, which will provide volume (and guaranteed revenue) to make us profitable. This immediate cash will be used to invest in customer support and engineering ahead of those partnership announcements to ensure we can scale with demand.",
      likes: 1,
      replies: 0,
      avatar: "SK",
      isFounder: true
    },
    {
      user: "Zackery Deering-Haddix",
      time: "21 days ago",
      content: "Could you please provide details on the strategy for returning capital to investors?",
      likes: 1,
      replies: 1,
      avatar: "ZD"
    },
    {
      user: "Sarah Kimani",
      time: "17 days ago",
      content: "@zackery-deering-haddix Thank you for your interest and for the question. As I mentioned to Dave (above), we have a few partnerships coming live (agreements are signed) in the next two months, which will significantly increase our scale and volume. We believe this is likely to result in new opportunities for a liquidity event in the next 1-2 years. I hope that helps.",
      likes: 1,
      replies: 0,
      avatar: "SK",
      isFounder: true
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Discussion</h2>
      
      <p className="text-sm text-gray-700">
        Ask questions and share feedback with the Siscom Africa team below. If you have support related questions for Republic, please contact{" "}
        <a href="mailto:investors@republic.co" className="text-blue-600 hover:underline">
          investors@republic.co
        </a>
        .
      </p>
      
      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{discussion.avatar}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-medium text-gray-900">{discussion.user}</span>
                  {discussion.isFounder && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                      Founder of Siscom Africa
                    </span>
                  )}
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">{discussion.time}</span>
                </div>
                
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {discussion.content}
                </p>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700">
                    <Heart className="w-3 h-3" />
                    <span>{discussion.likes} likes</span>
                  </button>
                  
                  <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700">
                    <MessageCircle className="w-3 h-3" />
                    <span>Reply</span>
                  </button>
                  
                  <button className="text-xs text-gray-500 hover:text-gray-700">
                    <MoreHorizontal className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="text-center py-6">
          <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
            Join the discussion
          </button>
        </div>
      </div>
    </div>
  );
}
