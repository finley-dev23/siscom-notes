"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronDown, ArrowLeft } from "lucide-react";

export default function InvestmentForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentAmount: ""
  });

  const [isAmountDropdownOpen, setIsAmountDropdownOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleDownloadClick = () => {
    // Auto-close the modal shortly after download starts
    window.setTimeout(() => {
      setShowSuccessModal(false);
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 4000);
    }, 5000);
  };
  
  // Set to show exactly 90 days remaining
  const [daysRemaining, setDaysRemaining] = useState(90);
  
  useEffect(() => {
    // Keep it at 90 days for now
    setDaysRemaining(90);
  }, []);

  const investmentAmounts = [
    "KSH 350,000",
    "KSH 700,000",
    "KSH 1.05M",
    "KSH 1.4M",
    "KSH 1.75M",
    "KSH 2.1M"
  ];

  // Read URL parameter and set initial investment amount
  useEffect(() => {
    const amountParam = searchParams.get('amount');
    if (amountParam) {
      // Convert the parameter to the correct format
      let formattedAmount = "";
      
      // Handle special case for 100M+
      if (amountParam === "100000000+") {
        formattedAmount = "KSH 100M+";
      } else {
        // Parse the number and format it properly with KSH
        const numAmount = parseInt(amountParam);
        if (!isNaN(numAmount)) {
          if (numAmount >= 1000000) {
            formattedAmount = `KSH ${(numAmount / 1000000).toFixed(numAmount % 1000000 === 0 ? 0 : 2)}M`;
          } else {
            formattedAmount = `KSH ${numAmount.toLocaleString()}`;
          }
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
      const response = await fetch('https://script.google.com/macros/s/AKfycbyQkXHnOUkFWxZlAu92p-cVVP_7Vfm2HlujIX-OLJcPXRqn6hApJKkshXz41H36sCb7iA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });
      
      // Since we're using no-cors mode, we can't check the response
      // Show success modal with SAFE download instead of alert
      setShowSuccessModal(true);
      
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
            Book a Call
          </h1>
          <p className="text-lg text-gray-600">
            Join us in building Africa's intelligent Cloud, Data, and AI infrastructure to empower Kenya's SMEs to innovate, scale, and thrive in a digital-first global economy
          </p>
        </div>

        {/* Investment Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Investment Details</h2>
          <div className="grid grid-cols-2 gap-4 text-base">
            <div>
              <span className="text-gray-500">Security Type:</span>
              <span className="ml-2 font-medium">SAFE Notes (100 available at KSH 350,000 each)</span>
            </div>
            <div>
              <span className="text-gray-500">SAFE Note Price:</span>
              <span className="ml-2 font-medium">KSH 350,000</span>
            </div>
            <div>
              <span className="text-gray-500">Funding Goal:</span>
              <span className="ml-2 font-medium">KSH 35M</span>
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
                  <a href="/terms" className="text-pink-500 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-pink-500 hover:underline">
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
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-base text-gray-700 mb-4">
              Your request has been submitted. You can download the SAFE contract overview below.
            </p>
            <a
              href="/assets/SISCOM%20Crowd%20SAFE%20Investment%20Overview.docx"
              download
              onClick={handleDownloadClick}
              className="inline-flex items-center justify-center w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors mb-3"
            >
              Download SAFE Contract Overview
            </a>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Continue exploring
            </button>
          </div>
        </div>
      )}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm">
            SAFE contract download started.
          </div>
        </div>
      )}
    </div>
  );
}
