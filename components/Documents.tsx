"use client";

import { FileText, ExternalLink } from "lucide-react";

export default function Documents() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Documents</h2>
      
      <div className="space-y-4">
        <p className="text-base text-gray-700">
          Republic (OpenDeal Portal LLC, CRD #283874) is hosting this Reg CF securities offering by Siscom Africa. View the official SEC filing and all updates:
        </p>
        
        {/* SEC Filing Link */}
        <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <FileText className="w-4 h-4 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-base font-medium text-gray-900">Form C SEC.gov</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Company Documents */}
        <div className="space-y-3">
          <h3 className="text-base font-medium text-gray-900">Company documents</h3>
          
          <div className="space-y-2">
            <a href="#" className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
              <FileText className="w-4 h-4 text-gray-600" />
              <span className="text-base text-gray-900">Siscom Africa SAFE</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
              <FileText className="w-4 h-4 text-gray-600" />
              <span className="text-base text-gray-900">Siscom Africa Form C.docx.pdf</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
