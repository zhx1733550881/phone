import React from 'react';
import { Package, PackageId } from '../types';
import { ArrowRight } from 'lucide-react';

import traffic29Img from '../assets/images/traffic_29_card_1784086401272.jpg';
import mango29Img from '../assets/images/mango_29_card_1784086417416.jpg';
import broadband39Img from '../assets/images/broadband_39_card_1784086432618.jpg';
import broadband360Img from '../assets/images/broadband_360_card_1784086447519.jpg';
import broadband600Img from '../assets/images/broadband_600_card_1784086462224.jpg';

interface PackageListProps {
  packages: Package[];
  onSelect: (id: PackageId) => void;
}

export default function PackageList({ packages, onSelect }: PackageListProps) {
  const getPackageImage = (id: PackageId) => {
    switch (id) {
      case 'traffic_29': return traffic29Img;
      case 'mango_29': return mango29Img;
      case 'broadband_39': return broadband39Img;
      case 'broadband_360': return broadband360Img;
      case 'broadband_600': return broadband600Img;
      default: return broadband39Img;
    }
  };

  const getButtonBgClass = (id: PackageId) => {
    switch (id) {
      case 'traffic_29': return 'bg-orange-500 hover:bg-orange-600 text-white';
      case 'mango_29': return 'bg-amber-500 hover:bg-amber-600 text-white';
      case 'broadband_39': return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'broadband_360': return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'broadband_600': return 'bg-purple-600 hover:bg-purple-700 text-white';
      default: return 'bg-indigo-600 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 font-sans">
      
      {/* Top App Bar Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 py-5 px-4 shadow-xs">
        <div className="max-w-lg mx-auto text-center space-y-1">
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">移动套餐与宽带办理中心</h1>
          <p className="text-xs text-gray-500 font-semibold">1比1官方正品套餐 · 先预约绿色安装通道</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-md p-4 sm:p-5 border-x border-gray-100/50">
        
        {/* Decorative Promo banner in hub */}
        <div className="mb-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white relative overflow-hidden shadow-md shadow-blue-100">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -mr-12 -mt-12 blur-lg"></div>
          <div className="space-y-1 relative z-10">
            <span className="text-[9px] bg-white/20 border border-white/25 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              OFFICIAL CENTER
            </span>
            <h2 className="text-lg sm:text-xl font-bold">全网套餐自由随心选</h2>
            <p className="text-xs text-blue-100 leading-normal font-medium">包含 200G大流量手机卡、芒果校园专享卡、39元千兆尊享宽带、360年包、600元包年独立宽带等全部官方卡品。</p>
          </div>
        </div>

        {/* Head tag */}
        <div className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-3 justify-between">
          <span className="text-xs font-black text-gray-800 tracking-wider uppercase">
            推荐热门套餐 ({packages.length})
          </span>
          <span className="text-[10px] text-gray-400 font-semibold flex items-center gap-1">
            🟢 官方库存充足
          </span>
        </div>

        {/* Package Card Lists Grid */}
        <div className="space-y-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onSelect(pkg.id)}
              className="relative w-full aspect-[2/1] sm:aspect-[16/7.5] rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group"
            >
              {/* Background image covering card */}
              <img
                src={getPackageImage(pkg.id)}
                alt={pkg.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent flex flex-col justify-between p-4 sm:p-5" />

              {/* Foreground content layout */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 z-10 text-white">
                {/* Top Row: Badges */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black px-2 py-0.5 bg-white/25 border border-white/20 rounded-full text-white uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    官方通道
                  </span>
                </div>

                {/* Middle Row: Name & Description */}
                <div className="space-y-0.5 my-auto">
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight drop-shadow-sm">
                    {pkg.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-200 font-medium opacity-95 truncate max-w-[240px] sm:max-w-[340px]">
                    {pkg.subName}
                  </p>
                </div>

                {/* Bottom Row: Price & Select Action Button */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="text-left">
                    <span className="text-[9px] text-gray-300 font-bold block mb-0.5">预估月均资费</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-lg sm:text-xl font-black text-white leading-none">{pkg.price}</span>
                      <span className="text-[10px] text-gray-300 font-bold">/{pkg.period}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`py-1.5 px-3.5 rounded-xl text-xs font-black flex items-center gap-1 transition-all shadow-md transform hover:scale-[1.03] active:scale-95 cursor-pointer ${getButtonBgClass(pkg.id)}`}
                  >
                    立即办理
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Footnote filing info */}
        <div className="p-6 mt-10 text-center text-[10px] text-gray-400">
          粤ICP备202204561号-3
        </div>

      </div>
    </div>
  );
}
