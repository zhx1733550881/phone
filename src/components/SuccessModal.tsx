import React from 'react';
import { ApplicationForm, Package } from '../types';
import { CheckCircle2, Phone, MapPin, User, Calendar, FileText, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: ApplicationForm;
  selectedPackage: Package;
}

export default function SuccessModal({ isOpen, onClose, formData, selectedPackage }: SuccessModalProps) {
  if (!isOpen) return null;

  const getAccentColorClass = () => {
    switch (selectedPackage.id) {
      case 'broadband_39': return 'bg-blue-600 text-blue-600 border-blue-100';
      case 'mango_29': return 'bg-orange-500 text-orange-500 border-orange-100';
      case 'traffic_29': return 'bg-red-500 text-red-500 border-red-100';
      case 'broadband_360': return 'bg-emerald-600 text-emerald-600 border-emerald-100';
      case 'broadband_600': return 'bg-purple-600 text-purple-600 border-purple-100';
      default: return 'bg-indigo-600 text-indigo-600 border-indigo-100';
    }
  };

  const getButtonBgClass = () => {
    switch (selectedPackage.id) {
      case 'broadband_39': return 'bg-blue-600 hover:bg-blue-700 shadow-blue-100';
      case 'mango_29': return 'bg-orange-500 hover:bg-orange-600 shadow-orange-100';
      case 'traffic_29': return 'bg-red-500 hover:bg-red-600 shadow-red-100';
      case 'broadband_360': return 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100';
      case 'broadband_600': return 'bg-purple-600 hover:bg-purple-700 shadow-purple-100';
      default: return 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100';
    }
  };

  const getAccentBgClass = () => {
    switch (selectedPackage.id) {
      case 'broadband_39': return 'bg-blue-50 text-blue-700 border-blue-100';
      case 'mango_29': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'traffic_29': return 'bg-red-50 text-red-700 border-red-100';
      case 'broadband_360': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      case 'broadband_600': return 'bg-purple-50 text-purple-700 border-purple-100';
      default: return 'bg-indigo-50 text-indigo-700 border-indigo-100';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-up border border-gray-100 flex flex-col max-h-[90vh]">
        
        {/* Header Section */}
        <div className="p-6 text-center border-b border-gray-50 bg-radial-at-t from-emerald-50/40 via-white to-white shrink-0 relative">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-3 animate-bounce-subtle">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">预约提交成功！</h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-sm mx-auto">
            我们已收到您的业务预约登记，专属客服/装维工程师将在24小时内电话与您取得联系。
          </p>
        </div>

        {/* Content Section (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Selected Package Summary Card */}
          <div className={`p-4 rounded-2xl border flex items-center justify-between ${getAccentBgClass()}`}>
            <div className="space-y-1">
              <span className="text-[10px] font-bold tracking-wider uppercase bg-white/80 px-2 py-0.5 rounded-full shadow-2xs">
                已选套餐
              </span>
              <h4 className="font-bold text-base mt-1 text-gray-800">{selectedPackage.name}</h4>
              <p className="text-xs opacity-80">{selectedPackage.subName}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black">{selectedPackage.price}</span>
              <span className="text-xs font-semibold">/{selectedPackage.period}</span>
            </div>
          </div>

          {/* User Application Details */}
          <div className="space-y-3.5 bg-gray-50/50 p-5 rounded-2xl border border-gray-100">
            <h5 className="font-bold text-sm text-gray-800 border-b border-gray-100 pb-2 mb-3 flex items-center gap-1.5">
              <span className="w-1 h-4 bg-gray-800 rounded-full inline-block"></span>
              办理人登记信息
            </h5>
            
            {/* Name */}
            <div className="flex items-start gap-3">
              <User className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="text-gray-400 font-medium inline-block w-16">姓名：</span>
                <span className="text-gray-800 font-semibold">{formData.name}</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="text-gray-400 font-medium inline-block w-16">联系号码：</span>
                <span className="text-gray-800 font-semibold tracking-wide">
                  {formData.phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')}
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="text-gray-400 font-medium inline-block w-16 shrink-0">安装地址：</span>
                <span className="text-gray-800 font-semibold leading-relaxed">
                  {formData.province} {formData.city} {formData.district} {formData.detailAddress}
                </span>
              </div>
            </div>

            {/* Remarks */}
            {formData.remarks && (
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="text-gray-400 font-medium inline-block w-16 shrink-0">预约备注：</span>
                  <span className="text-gray-700 italic">{formData.remarks}</span>
                </div>
              </div>
            )}

            {/* Submit Time */}
            <div className="flex items-start gap-3">
              <Calendar className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <span className="text-gray-400 font-medium inline-block w-16">提交时间：</span>
                <span className="text-gray-600 font-mono">
                  {new Date().toLocaleString('zh-CN', { hour12: false })}
                </span>
              </div>
            </div>
          </div>

          {/* Critical Reminders */}
          <div className="bg-orange-50/70 border border-orange-100 p-4 rounded-xl text-orange-800 space-y-1">
            <h6 className="font-bold text-xs flex items-center gap-1.5">
              ⚠️ 重要实名核验提示：
            </h6>
            <ul className="list-disc pl-4 text-[11px] leading-relaxed space-y-0.5 opacity-90 font-medium">
              <li>根据工信部防诈实名入网规范，<strong>宽带现场开通或SIM卡签收激活时，必须由申请人本人持二代身份证原件在场。</strong></li>
              <li>请确保填写的手机处于开机且可接通状态，以便工程师预约上门，24小时内未接通可能导致订单取消。</li>
            </ul>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 shrink-0 flex gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className={`w-full py-3 text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer text-center ${getButtonBgClass()}`}
          >
            确认并关闭
          </button>
        </div>
      </div>
    </div>
  );
}
