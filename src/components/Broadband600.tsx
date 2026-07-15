import React from 'react';
import { Package, ApplicationForm } from '../types';
import ApplyForm from './ApplyForm';
import { ArrowLeft, Clock, Zap, ShieldCheck, Heart, LayoutList, HelpCircle, CheckCircle2 } from 'lucide-react';

interface Broadband600Props {
  selectedPackage: Package;
  onBack: () => void;
  onSubmitForm: (data: ApplicationForm) => void;
}

export default function Broadband600({ selectedPackage, onBack, onSubmitForm }: Broadband600Props) {
  const advantages = [
    {
      title: '千兆速率',
      desc: '1000Mbps标称极限下行高速网速体验，秒速下载高清电影、大文件，体验飞一般的感觉。',
      icon: <Zap className="w-5 h-5 text-purple-600" />
    },
    {
      title: '独立宽带',
      desc: '纯独立专线光纤直达家庭，完全独享网络，不与邻里共享，带宽更充足，网络极其稳定。',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />
    },
    {
      title: '畅玩无忧',
      desc: '针对各大游戏服及主流视频直播平台专属底层加速优化，超低Ping值延迟，4K追剧流畅无阻。',
      icon: <Heart className="w-5 h-5 text-purple-600" />
    },
    {
      title: '专业售后服务',
      desc: '尊享中国移动大牌金牌装维7x24小时全天候金牌客服，故障随报随修，安心服务无后顾之忧。',
      icon: <Clock className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-purple-50/50 pb-20 font-sans">
      {/* Stick top nav bar */}
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 py-3.5 px-4 flex items-center justify-between max-w-lg mx-auto shadow-xs">
        <button 
          onClick={onBack} 
          className="flex items-center gap-1.5 text-xs font-semibold text-purple-600 bg-purple-50/80 hover:bg-purple-100/80 px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回列表
        </button>
        <span className="font-bold text-gray-800 text-sm truncate max-w-[200px]">600元包年独立宽带</span>
        <div className="w-20 shrink-0"></div>
      </div>

      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-md overflow-hidden relative border-x border-gray-100/50">
        
        {/* Banner Hero header */}
        <div className="bg-gradient-to-b from-purple-500 to-purple-600 text-white relative px-6 py-10 pb-24 overflow-hidden rounded-b-[40px] shadow-lg shadow-purple-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-15 -mt-15 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-400/20 rounded-full blur-xl"></div>
          
          <div className="absolute top-4 right-4 bg-purple-400 text-purple-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            高速独立专线
          </div>

          <div className="space-y-3">
            <span className="bg-white/20 text-white border border-white/30 text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block">
              高速宽带 · 智享生活
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">千兆独立宽带</h1>
            <p className="text-purple-100 text-xs sm:text-sm font-medium">超值特惠 600元包年，折合仅需50元/月！</p>
          </div>
        </div>

        {/* Highlight Bullets Panels */}
        <div className="px-5 -mt-12 relative z-10">
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-purple-50/50 grid grid-cols-4 gap-2 text-center">
            <div className="p-1 rounded-xl bg-purple-50/40">
              <span className="text-[10px] text-gray-500 block font-medium">免费预约</span>
              <span className="text-xs font-bold text-purple-600 mt-0.5 inline-block">先约先办</span>
            </div>
            <div className="p-1 rounded-xl bg-purple-50/40">
              <span className="text-[10px] text-gray-500 block font-medium">上门服务</span>
              <span className="text-xs font-bold text-purple-600 mt-0.5 inline-block">极速派单</span>
            </div>
            <div className="p-1 rounded-xl bg-purple-50/40">
              <span className="text-[10px] text-gray-500 block font-medium">1000兆速率</span>
              <span className="text-xs font-bold text-purple-600 mt-0.5 inline-block">千兆光宽</span>
            </div>
            <div className="p-1 rounded-xl bg-purple-50/40">
              <span className="text-[10px] text-gray-500 block font-medium">600元包年</span>
              <span className="text-xs font-bold text-purple-600 mt-0.5 inline-block">超低成本</span>
            </div>
          </div>
        </div>

        {/* Rent specifications table */}
        <div className="p-5 mt-4 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-purple-600 tracking-widest flex items-center justify-center gap-2">
            <LayoutList className="w-4 h-4 text-purple-500" />
            千兆独立宽带资费详情
          </h3>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white text-xs font-bold">
                  <th className="p-3">年预付费</th>
                  <th className="p-3">宽带标称网速</th>
                  <th className="p-3">一次性调测费</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100">
                <tr className="hover:bg-purple-50/10">
                  <td className="p-4">
                    <span className="font-extrabold text-purple-600 text-base">¥600/年</span>
                    <span className="text-[10px] text-gray-400 block mt-1">（合约到期后自动享50元/月优惠价）</span>
                  </td>
                  <td className="p-4 font-bold text-gray-800">1000Mbps (千兆)</td>
                  <td className="p-4 text-orange-600 font-semibold text-xs">100元 (首次安装一次性收取)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Booking ApplyForm */}
        <div className="px-5 py-2">
          <div className="bg-purple-600/5 rounded-3xl p-4 sm:p-5 border border-purple-100/50 space-y-4">
            <div className="text-center py-1">
              <h2 className="text-base sm:text-lg font-black text-purple-600 tracking-widest flex items-center justify-center gap-1.5">
                ✦ 填写办理预约信息 ✦
              </h2>
              <p className="text-[10px] sm:text-xs text-purple-500 font-semibold mt-1">无需额外绑定手机主号，纯宽带包年安装</p>
            </div>
            
            <ApplyForm 
              themeColor="bg-purple-600 hover:bg-purple-700 text-white shadow-purple-100" 
              buttonText="提交千兆预约" 
              onSubmit={onSubmitForm}
              packageName="600元包年独立宽带"
            />
          </div>
        </div>

        {/* Strengths Advantages list */}
        <div className="p-5 mt-6 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-purple-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-purple-200"></span>
            千兆独立宽带优势
            <span className="h-0.5 w-6 bg-purple-200"></span>
          </h3>

          <div className="grid grid-cols-1 gap-3.5">
            {advantages.map((item, i) => (
              <div key={i} className="flex gap-3.5 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl hover:bg-purple-50/10 transition-colors">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-purple-50 flex items-center justify-center shadow-2xs border border-purple-100">
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

        {/* Handling Flow Grid */}
        <div className="p-5 mt-4 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-purple-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-purple-200"></span>
            宽带办理及安装流程
            <span className="h-0.5 w-6 bg-purple-200"></span>
          </h3>

          <div className="grid grid-cols-4 gap-2 py-2">
            <div className="flex flex-col items-center text-center space-y-1.5 p-2 bg-gray-50 rounded-xl border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center">1</span>
              <span className="text-[11px] font-bold text-gray-800">填写信息</span>
              <p className="text-[9px] text-gray-400 scale-95 leading-normal">填写名字、电话和地址并点击提交</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-1.5 p-2 bg-gray-50 rounded-xl border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center">2</span>
              <span className="text-[11px] font-bold text-gray-800">等待确认</span>
              <p className="text-[9px] text-gray-400 scale-95 leading-normal">客服致电资源覆盖情况与实名审核</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-1.5 p-2 bg-gray-50 rounded-xl border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center">3</span>
              <span className="text-[11px] font-bold text-gray-800">上门布线</span>
              <p className="text-[9px] text-gray-400 scale-95 leading-normal">专业师傅约定时间进行布网调试</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-1.5 p-2 bg-gray-50 rounded-xl border border-gray-100">
              <span className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shadow-xs">4</span>
              <span className="text-[11px] font-bold text-gray-800">极速开通</span>
              <p className="text-[9px] text-gray-400 scale-95 leading-normal">光纤成功调通测试并交付账单</p>
            </div>
          </div>
        </div>

        {/* Q&A Frequently Asked Questions FAQ list */}
        <div className="p-5 mt-4 space-y-4 bg-gray-50/50 border-y border-gray-100">
          <h3 className="text-center text-sm font-extrabold text-purple-600 tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-purple-500" />
            千兆宽带常见问题
          </h3>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="bg-white rounded-xl p-3 border border-gray-100 space-y-1">
              <p className="font-bold text-gray-800 flex items-start gap-1"><span className="text-purple-600">Q:</span> 什么是独立宽带？需要已有手机号绑定吗？</p>
              <p className="text-gray-500 pl-4 border-l border-purple-100 text-[11px] sm:text-xs leading-relaxed">A: 独立宽带是指纯上网光纤网络宽带，无需已有本网手机卡或强制消费绑定，对已有异网（如联通、电信）用户非常友好。您可以直接申请安装单条线路。</p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 space-y-1">
              <p className="font-bold text-gray-800 flex items-start gap-1"><span className="text-purple-600">Q:</span> 1000M网速能到多少？上传有多少？</p>
              <p className="text-gray-500 pl-4 border-l border-purple-100 text-[11px] sm:text-xs leading-relaxed">A: 1000M(千兆)网速极限下行通常在900-1000Mbps之间（约110M-125M/s下载速率）。上行速率一般由宽带端口技术保障在30-40Mbps左右。</p>
            </div>
            <div className="bg-white rounded-xl p-3 border border-gray-100 space-y-1">
              <p className="font-bold text-gray-800 flex items-start gap-1"><span className="text-purple-600">Q:</span> 如果安装不成功，费用可以退吗？</p>
              <p className="text-gray-500 pl-4 border-l border-purple-100 text-[11px] sm:text-xs leading-relaxed">A: 是的。如果因小区资源未覆盖或无法布网等不可抗原因造成无法安装。我们将对您缴纳的所有包年预存费用进行原渠道返还，请放心申办。</p>
            </div>
          </div>
        </div>

        {/* Warnings Section */}
        <div className="p-5 space-y-3.5">
          <h3 className="font-bold text-sm text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-4 bg-purple-500 rounded-full inline-block"></span>
            温馨提示
          </h3>
          <ul className="list-decimal pl-4 text-[11px] leading-relaxed text-gray-500 space-y-2">
            <li>下单后，工作人员将通过您填写的手机号码与您进行初步地址资源校验，请保持手机可以接听。</li>
            <li>千兆网速需要您的终端路由器及网线支持。若您的设备老旧可能无法跑满千兆网速。</li>
            <li>宽带必须在已有宽带端口资源的小区内方能开通。若因小区无覆盖、无多余网口、或物业垄断导致不能安装，系统将自动原渠道全额退款。</li>
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
