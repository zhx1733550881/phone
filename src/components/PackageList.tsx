import React from 'react';
import { Package, PackageId } from '../types';
import { Wifi, ShieldAlert, Smartphone, Tv, Zap, Phone, Heart, Users, ArrowRight } from 'lucide-react';

interface PackageListProps {
  packages: Package[];
  onSelect: (id: PackageId) => void;
}

export default function PackageList({ packages, onSelect }: PackageListProps) {
  // Map package icons dynamically based on ID
  const getPackageIcon = (id: PackageId) => {
    switch (id) {
      case 'traffic_29':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-red-500 flex items-center justify-center text-white shadow-md relative shrink-0">
            <Smartphone className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">G</span>
          </div>
        );
      case 'mango_29':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-md relative shrink-0">
            <Tv className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">M</span>
          </div>
        );
      case 'broadband_39':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md relative shrink-0">
            <Wifi className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">W</span>
          </div>
        );
      case 'broadband_360':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md relative shrink-0">
            <ShieldAlert className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">S</span>
          </div>
        );
      case 'broadband_600':
        return (
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-md relative shrink-0">
            <Zap className="w-6 h-6" />
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">K</span>
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-2xl bg-gray-500 flex items-center justify-center text-white shrink-0">
            <Wifi className="w-6 h-6" />
          </div>
        );
    }
  };

  // Map card custom classes
  const getCardStyleClasses = (id: PackageId) => {
    switch (id) {
      case 'traffic_29':
        return 'bg-gradient-to-r from-red-50/70 to-orange-50/30 hover:shadow-red-100/50 border-red-100/80 hover:border-red-300';
      case 'mango_29':
        return 'bg-gradient-to-r from-orange-50/70 to-amber-50/30 hover:shadow-orange-100/50 border-orange-100/80 hover:border-orange-300';
      case 'broadband_39':
        return 'bg-gradient-to-r from-blue-50/70 to-cyan-50/30 hover:shadow-blue-100/50 border-blue-100/80 hover:border-blue-300';
      case 'broadband_360':
        return 'bg-gradient-to-r from-emerald-50/70 to-teal-50/30 hover:shadow-emerald-100/50 border-emerald-100/80 hover:border-emerald-300';
      case 'broadband_600':
        return 'bg-gradient-to-r from-purple-50/70 to-indigo-50/30 hover:shadow-purple-100/50 border-purple-100/80 hover:border-purple-300';
      default:
        return 'bg-gray-50 hover:shadow-gray-100 border-gray-100 hover:border-gray-300';
    }
  };

  const getButtonBgClass = (id: PackageId) => {
    switch (id) {
      case 'traffic_29': return 'bg-red-500 hover:bg-red-600 shadow-red-100/50 hover:shadow-lg hover:shadow-red-200 text-white';
      case 'mango_29': return 'bg-orange-500 hover:bg-orange-600 shadow-orange-100/50 hover:shadow-lg hover:shadow-orange-200 text-white';
      case 'broadband_39': return 'bg-blue-600 hover:bg-blue-700 shadow-blue-100/50 hover:shadow-lg hover:shadow-blue-200 text-white';
      case 'broadband_360': return 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100/50 hover:shadow-lg hover:shadow-emerald-200 text-white';
      case 'broadband_600': return 'bg-purple-600 hover:bg-purple-700 shadow-purple-100/50 hover:shadow-lg hover:shadow-purple-200 text-white';
      default: return 'bg-indigo-600 text-white';
    }
  };

  const getBadgeStyle = (id: PackageId) => {
    switch (id) {
      case 'traffic_29': return 'bg-red-100 text-red-700';
      case 'mango_29': return 'bg-orange-100 text-orange-700';
      case 'broadband_39': return 'bg-blue-100 text-blue-700';
      case 'broadband_360': return 'bg-emerald-100 text-emerald-700';
      case 'broadband_600': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
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
              className={`border rounded-3xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:shadow-xl hover:translate-y-[-2px] ${getCardStyleClasses(pkg.id)}`}
            >
              <div className="flex items-start gap-4">
                {/* Custom Left Icon matching package */}
                {getPackageIcon(pkg.id)}

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-sm sm:text-base text-gray-800 group-hover:text-gray-900 transition-colors truncate">
                      {pkg.name}
                    </h3>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${getBadgeStyle(pkg.id)}`}>
                      {pkg.badge}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium truncate">{pkg.subName}</p>
                </div>
              </div>

              {/* Bottom Specs and Actions details bar */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-600">
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{pkg.specs.voice}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-2xs">
                    <Wifi className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{pkg.specs.data}</span>
                  </div>
                  {pkg.specs.other && (
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-100 shadow-2xs">
                      <Heart className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate max-w-[80px]">{pkg.specs.other}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-auto mt-2 sm:mt-0">
                  <div className="text-right">
                    <span className="text-xs text-gray-400 font-bold">月均 </span>
                    <span className="text-lg font-black text-gray-900">{pkg.price}</span>
                    <span className="text-[10px] text-gray-400 font-semibold">/{pkg.period}</span>
                  </div>
                  <button
                    type="button"
                    className={`py-2 px-4 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer ${getButtonBgClass(pkg.id)}`}
                  >
                    立即办理
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
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
