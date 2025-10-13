"use client";

export default function BonusPerks() {
  const perks = [
    {
      amount: "KSH 100,000",
      items: [
        "A Siscom Africa Branded Yeti",
        "Access to our private investor newsletter with early updates and behind-the-scenes stories",
        "Your name featured on our Founding Investor Wall on our website"
      ]
    },
    {
      amount: "KSH 500,000",
      items: [
        "An invitation to a small-group virtual roundtable with our team (bi-annual)",
        "Exclusive data center tour invitation",
        "+ All perks from previous tier"
      ]
    },
    {
      amount: "KSH 1M",
      items: [
        "A 30-minute 1:1 call with our founder - we'd love to get your ideas and input",
        "Recognition in our Annual investor report",
        "Early (beta) access to new features and products",
        "+ All perks from previous tier"
      ]
    },
    {
      amount: "KSH 2.5M",
      items: [
        "You'll be invited to join our Advisory Board",
        "One free access to a capitalized event (annual investor conference or exclusive networking event)",
        "Enjoy a lifetime 'Friends & Family' discount (e.g. no service or membership fees) on future Siscom Africa products or services",
        "+ All perks from previous tier"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Bonus perks</h2>
      
      <p className="text-base text-gray-700">
        In addition to your SAFE, you'll receive perks for investing in Siscom Africa.
      </p>
      
      <div className="space-y-4">
        {perks.map((perk, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="mb-4">
              <h3 className="text-base font-medium text-gray-600 mb-2">
                Invest
              </h3>
              <p className="text-5xl font-bold text-pink-500 mb-4">
                {perk.amount}
              </p>
            </div>
            
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Receive
            </h4>
            
            <ul className="space-y-2 mb-6">
              {perk.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-base text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <a 
              href={`/invest?amount=${perk.amount.replace('$', '').replace(',', '')}`}
              className="block w-full text-center px-4 py-3 border border-gray-300 text-gray-700 text-base font-medium rounded-lg hover:bg-gray-100 transition"
            >
              Invest {perk.amount}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
