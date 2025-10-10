"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronDown, ArrowLeft } from "lucide-react";

export default function InvestmentForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentAmount: ""
  });

  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false);
  
  // Set to show exactly 90 days remaining
  const [daysRemaining, setDaysRemaining] = useState(90);
  
  useEffect(() => {
    // Keep it at 90 days for now
    setDaysRemaining(90);
  }, []);

  const investmentAmounts = [
    "$500",
    "$1,000",
    "$2,500",
    "$5,000",
    "$10,000",
    "$25,000",
    "$50,000",
    "$100,000",
    "$250,000",
    "$500,000",
    "$1,000,000+"
  ];

  // Read URL parameter and set initial investment amount
  useEffect(() => {
    const amountParam = searchParams.get('amount');
    if (amountParam) {
      // Convert the parameter to the correct format
      let formattedAmount = "";
      
      // Handle special case for 1,000,000+
      if (amountParam === "1000000+") {
        formattedAmount = "$1,000,000+";
      } else {
        // Parse the number and format it properly
        const numAmount = parseInt(amountParam);
        if (!isNaN(numAmount)) {
          formattedAmount = `$${numAmount.toLocaleString()}`;
        }
      }
      
      // Check if the formatted amount exists in our options
      if (formattedAmount && investmentAmounts.includes(formattedAmount)) {
        setFormData(prev => ({
          ...prev,
          investmentAmount: formattedAmount
        }));
      }
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAmountSelect = (amount: string) => {
    setFormData(prev => ({
      ...prev,
      investmentAmount: amount
    }));
    setIsAmountDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state (you could add a loading spinner here)
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    submitButton.textContent = "Submitting...";
    submitButton.disabled = true;
    
    try {
      // Prepare form data
      const formDataToSend = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        investmentAmount: formData.investmentAmount,
        timestamp: new Date().toISOString(),
        source: 'Investment Form'
      };
      
      // Send data to Google Sheets via Apps Script
      // Note: Replace YOUR_SCRIPT_ID with your actual Google Apps Script ID
      const response = await fetch('https://script.google.com/macros/s/AKfycbw4OUsocQUBM3QZ9pSLDdBUjLGHIaJOlQxLbtgXT_0UbjR6brYPGqdjTHiRBmWl2xBzcw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
      
      // Since we're using no-cors mode, we can't check the response
      // But we can show success message
      alert("Thank you for your investment interest! We'll be in touch soon.");
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        investmentAmount: ""
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your form. Please try again or contact us directly.");
    } finally {
      // Restore button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Campaign
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Invest in Siscom Africa
          </h1>
          <p className="text-lg text-gray-600">
            Join us in building Africa's first dedicated Technology Bank + Investment Marketplace
          </p>
        </div>

        {/* Investment Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Investment Details</h2>
          <div className="grid grid-cols-2 gap-4 text-base">
            <div>
              <span className="text-gray-500">Security Type:</span>
              <span className="ml-2 font-medium">Equity + SAFE</span>
            </div>
            <div>
              <span className="text-gray-500">Minimum Investment:</span>
              <span className="ml-2 font-medium">$500</span>
            </div>
            <div>
              <span className="text-gray-500">Funding Goal:</span>
              <span className="ml-2 font-medium">$1.25M</span>
            </div>
            <div>
              <span className="text-gray-500">Days Remaining:</span>
              <span className="ml-2 font-medium">{daysRemaining} days</span>
            </div>
          </div>
        </div>

        {/* Investment Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Information</h2>
          
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Investment Amount Dropdown */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                Investment Amount *
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAmountDropdownOpen(!isAmountDropdownOpen)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
                >
                  <span className={formData.investmentAmount ? "text-gray-900" : "text-gray-500"}>
                    {formData.investmentAmount || "Select investment amount"}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>
                
                {isAmountDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {investmentAmounts.map((amount, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className="w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="terms" className="text-base text-gray-700">
                  I agree to the{" "}
                  <a href="#" className="text-pink-500 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-pink-500 hover:underline">
                    Privacy Policy
                  </a>
                  . I understand that this is a private investment opportunity and I am an accredited investor.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Submit Request
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="mt-8 text-center text-base text-gray-500">
          <p>
            By submitting this form, you agree to receive communications from Siscom Africa about your investment.
          </p>
        </div>
      </div>
    </div>
  );
}
