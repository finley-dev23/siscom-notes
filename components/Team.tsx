"use client";

export default function Team() {
  const teamMembers = [
    {
      name: "Derrick Gakuu",
      role: "Founder",
      description: "Derrick is the founder of Siscom Africa, leading the vision to build the Technology Bank of Africa. He is driving the mission to democratize access to Africa's technology infrastructure investment opportunities and connect local and diaspora capital to high-return digital infrastructure projects.",
      initials: "DG"
    },
    {
      name: "Nashon Garvey",
      role: "Co-Founder",
      description: "Nashon is the co-founder of Siscom Africa and an expert in digital infrastructure and fintech. As a reality architect, he is building the backbone of Africa's digital economy by connecting capital to transformative technology infrastructure projects across the continent.",
      initials: "NG"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Siscom Africa Team</h2>
      <p className="text-base text-gray-600">Everyone helping build Siscom Africa, not limited to employees</p>
      
      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 rounded-lg hover:bg-gray-50 transition">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-base font-medium text-pink-500 mb-3">{member.role}</p>
              <p className="text-base text-gray-700 leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
