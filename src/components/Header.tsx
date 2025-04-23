import React from 'react';
import { Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center py-2">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full px-6 py-2">
            <div className="flex items-center text-white space-x-3">
              <Clock className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-medium">Special Offer Ends In:</span>
              <span className="font-mono font-bold tracking-wider">01:59:59</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;