import React from 'react';
import { Package, ApplicationForm } from '../types';
import ApplyForm from './ApplyForm';
import { HelpCircle, ArrowLeft, ShieldCheck, Heart, Smartphone, Wifi, Calendar, CheckSquare } from 'lucide-react';

interface TrafficCard39Props {
  selectedPackage: Package;
  onBack: () => void;
  onSubmitForm: (data: ApplicationForm) => void;
}

export default function TrafficCard39({ selectedPackage, onBack, onSubmitForm }: TrafficCard39Props) {
  const advantages = [
    {
      title: '超多流量',
      desc: '200G全国大流量，高速不限速，刷短视频、追剧、打游戏开热点随心用。',
      icon: <Wifi className="w-5 h-5 text-red-500" />
    },
    {
      title: '通话无忧',
      desc: '包含100分钟全国免费拨打通话，国内接听免费，亲友畅聊没有顾虑。',
      icon: <Smartphone className="w-5 h-5 text-red-500" />
    },
    {
      title: '优惠期长',
      desc: '连续享受长达2年(24个月)月租补贴，到期后根据在网优惠政策或恢复原价。',
      icon: <Calendar className="w-5 h-5 text-red-500" />
    },
    {
      title: '官方保障',
      desc: '正规三大运营商出品，APP、客服均可查。资费透明，无隐藏收费和霸王条款。',
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />
    },
    {
      title: '全国通用',
      desc: '国内各省市不限地区通用（港澳台除外），网络不锁卡，无指定定向免流限额。',
      icon: <Heart className="w-5 h-5 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-rose-50/50 pb-20 font-sans">
      {/* Upper Navigation sticky */}
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 py-3.5 px-4 flex items-center justify-between max-w-lg mx-auto shadow-xs">
        <button 
          onClick={onBack} 
          className="flex items-center gap-1.5 text-xs font-semibold text-red-600 bg-red-50/80 hover:bg-red-100/80 px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回列表
        </button>
        <span className="font-bold text-gray-800 text-sm truncate max-w-[200px]">39元大流量卡申请</span>
        <div className="w-20 shrink-0"></div>
      </div>

      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-md overflow-hidden relative border-x border-gray-100/50">
        
        {/* Header Hero banner */}
        <div className="bg-gradient-to-b from-red-500 to-orange-500 text-white relative px-6 py-10 pb-24 overflow-hidden rounded-b-[40px] shadow-lg shadow-red-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-15 -mt-15 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-xl"></div>
          
          <div className="absolute top-4 right-4 bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            官方正品 | 安全可靠
          </div>

          <div className="space-y-3">
            <span className="bg-white/20 text-white border border-white/30 text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block">
              优惠2年 · 超值卡品
            </span>
            <h1 className="text-4xl font-black tracking-tight text-white">39大流量卡</h1>
            <p className="text-red-50 text-xs sm:text-sm font-medium">超大全国200G高速流量 + 100分钟语音</p>
          </div>
        </div>

        {/* Dynamic Highlight stats panels */}
        <div className="px-5 -mt-12 relative z-10">
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-red-50/50 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-red-50/30">
              <span className="text-xs text-gray-500 font-bold">套餐费用</span>
              <span className="text-xl sm:text-2xl font-black text-red-600 mt-1">¥29/月</span>
              <span className="text-[9px] text-gray-400 line-through mt-0.5 font-semibold">原价¥69/月</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-red-50/30 border-x border-red-100/50">
              <span className="text-xs text-gray-500 font-bold">国内通话</span>
              <span className="text-lg sm:text-xl font-extrabold text-gray-800 mt-1">100分钟</span>
              <span className="text-[9px] text-gray-400 mt-0.5">分钟/月</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-red-50/30">
              <span className="text-xs text-gray-500 font-bold">国内流量</span>
              <span className="text-lg sm:text-xl font-extrabold text-gray-800 mt-1">200GB</span>
              <span className="text-[9px] text-gray-400 mt-0.5">全国通用</span>
            </div>
          </div>
        </div>

        {/* Rent Detail Instruction Badge */}
        <div className="p-5">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
            <div className="text-xs text-amber-900 space-y-1">
              <p className="font-bold">※ 套餐限时月租资费政策：</p>
              <ul className="list-disc pl-4 space-y-0.5 text-amber-800 font-medium">
                <li><strong>激活第 1~6 个月：</strong>月租补贴享 <strong>29元/月</strong>。</li>
                <li><strong>激活第 7~24 个月：</strong>月租按 <strong>39元/月</strong> 优惠价计算。</li>
                <li>激活后一次性到账预存话费 100 元，用于直接抵扣前几个月部分月租费。</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Free Booking ApplyForm */}
        <div className="px-5 py-2">
          <div className="bg-red-500/5 rounded-3xl p-4 sm:p-5 border border-red-100/50 space-y-4">
            <div className="text-center py-1">
              <h2 className="text-base sm:text-lg font-black text-red-600 tracking-widest flex items-center justify-center gap-1.5">
                ✦ 立即免费预约 ✦
              </h2>
              <p className="text-[10px] sm:text-xs text-red-500 font-semibold mt-1">顺丰/京东包邮极速配送 支持在线自助开卡激活</p>
            </div>
            
            <ApplyForm 
              themeColor="bg-red-500 hover:bg-red-600 text-white shadow-red-100" 
              buttonText="立即提交申请" 
              onSubmit={onSubmitForm}
              packageName="39大流量卡"
            />
          </div>
        </div>

        {/* Strengths advantages details cards */}
        <div className="p-5 mt-6 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-red-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-red-200"></span>
            39大流量卡独特优势
            <span className="h-0.5 w-6 bg-red-200"></span>
          </h3>

          <div className="grid grid-cols-1 gap-3.5">
            {advantages.map((item, i) => (
              <div key={i} className="flex gap-3.5 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl hover:bg-red-50/10 transition-colors">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-red-50 flex items-center justify-center shadow-2xs border border-red-100">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warnings Section */}
        <div className="p-5 space-y-3.5 border-t border-gray-100">
          <h3 className="font-bold text-sm text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-4 bg-red-500 rounded-full inline-block"></span>
            办理温馨提示
          </h3>
          <ul className="list-decimal pl-4 text-[11px] leading-relaxed text-gray-500 space-y-2">
            <li>请确保您的下单手机号码无误，并保持电话畅通！我们将联系您确认配送，多次联系未接通可能会被系统直接注销。</li>
            <li>所有话费赠送及返还补贴均是在您卡激活并成功充值100元后，通过系统自动触发，通常24小时内到账。</li>
            <li>新开卡结算按激活当日激活日计算结算期。</li>
            <li>国内流量及国内通话不含港澳台，且不支持漫游超出特定国际通信。</li>
            <li>部分省市存在无覆盖地区可能会无法配送，请以物流配送小哥及运营商最终出单反馈为准。</li>
            <li>所有套餐政策均严格依照运营商公示条款执行，请务必在仔细了解其月费抵扣规则后再行申请。</li>
          </ul>
        </div>

        {/* Footnote */}
        <div className="p-6 bg-gray-50 text-center border-t border-gray-100 text-[10px] text-gray-400 shrink-0">
          粤ICP备202204561号-3
        </div>

      </div>
    </div>
  );
}
