import React from 'react';
import { Package, ApplicationForm } from '../types';
import ApplyForm from './ApplyForm';
import { ArrowLeft, CheckCircle2, Gift, DollarSign, Clock, HelpCircle, ShieldCheck, RefreshCw, Layers } from 'lucide-react';

interface Broadband360Props {
  selectedPackage: Package;
  onBack: () => void;
  onSubmitForm: (data: ApplicationForm) => void;
}

export default function Broadband360({ selectedPackage, onBack, onSubmitForm }: Broadband360Props) {
  const tableData = [
    { speed: '300M', originalPrice: '¥58/月', prepay: '360元包年', setupFee: '100元 (限时免除)' },
    { speed: '600M', originalPrice: '¥98/月', prepay: '360元包年', setupFee: '100元 (限时免除)' },
    { speed: '1000M', originalPrice: '¥138/月', prepay: '360元包年', setupFee: '100元 (限时免除)' }
  ];

  const steps = [
    { title: '选择套餐', desc: '挑选适合您需求的包年宽带网速规格。', step: '01' },
    { title: '在线办理', desc: '在线填写联系姓名、电话与安装地址快速提交。', step: '02' },
    { title: '上门开通', desc: '区域装维工程师联系匹配，预约上门布线装机。', step: '03' },
    { title: '安装调试', desc: '现场光纤调通、路由器配置调试，保障网络畅通。', step: '04' },
    { title: '话费赠送', desc: '完成归档安装后，系统自动到账赠送100元话费。', step: '05' }
  ];

  return (
    <div className="min-h-screen bg-emerald-50/40 pb-20 font-sans">
      {/* Sticky nav */}
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 py-3.5 px-4 flex items-center justify-between max-w-lg mx-auto shadow-xs">
        <button 
          onClick={onBack} 
          className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50/80 hover:bg-emerald-100/80 px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回列表
        </button>
        <span className="font-bold text-gray-800 text-sm truncate max-w-[200px]">360元包年宽带申请</span>
        <div className="w-20 shrink-0"></div>
      </div>

      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-md overflow-hidden relative border-x border-gray-100/50">
        
        {/* Banner Hero header */}
        <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 text-white relative px-6 py-10 pb-24 overflow-hidden rounded-b-[40px] shadow-lg shadow-emerald-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-15 -mt-15 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-400/20 rounded-full blur-xl"></div>
          
          <div className="absolute top-4 right-4 bg-emerald-400 text-emerald-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            老用户专享
          </div>

          <div className="space-y-3">
            <span className="bg-white/20 text-white border border-white/30 text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block">
              一次性支付360元 · 包年宽带特惠
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">360年包宽带</h1>
            <p className="text-emerald-100 text-xs sm:text-sm font-medium">免装机调测费，安装成功即赠100元体验话费！</p>
          </div>
        </div>

        {/* Highlights bullets panels */}
        <div className="px-5 -mt-12 relative z-10">
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-emerald-50/50 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-emerald-50/30">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-bold">初装费用</span>
              <span className="text-xs font-extrabold text-emerald-600 mt-1">限时全免</span>
              <span className="text-[9px] text-gray-400 line-through">原价100元</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-emerald-50/30">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-bold">成功装机</span>
              <span className="text-xs font-extrabold text-emerald-600 mt-1">赠100话费</span>
              <span className="text-[9px] text-gray-400">自动到账</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-emerald-50/30">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-bold">合约期限</span>
              <span className="text-xs font-extrabold text-emerald-600 mt-1">签约2年</span>
              <span className="text-[9px] text-gray-400">稳定安心</span>
            </div>
          </div>
        </div>

        {/* Specs pricing details grid */}
        <div className="p-5 mt-4 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-emerald-600 tracking-widest flex items-center justify-center gap-2">
            <Layers className="w-4 h-4" />
            老用户专享资费详情
          </h3>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-600 text-white text-xs font-bold">
                  <th className="p-3">宽带速率</th>
                  <th className="p-3">原包月资费</th>
                  <th className="p-3">年包预存</th>
                  <th className="p-3">初装调试费</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100">
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-emerald-50/10">
                    <td className="p-3.5 font-bold text-gray-800">{row.speed}</td>
                    <td className="p-3.5 text-gray-500 line-through">{row.originalPrice}</td>
                    <td className="p-3.5 font-extrabold text-emerald-600">{row.prepay}</td>
                    <td className="p-3.5 text-orange-600 font-medium text-[10px]">{row.setupFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-4 text-[11px] text-amber-800 space-y-1">
            <p className="font-bold text-amber-900 flex items-center gap-1">※ 申办条件限制说明：</p>
            <p>1. 本套餐属于<strong>老用户专属提速加开通道</strong>。需要名下已有29元或以上基线套餐号码方能办理。</p>
            <p>2. 一次性缴清360元直接享受整年包年宽带不限速，中途不产生任何宽带月租账单。</p>
          </div>
        </div>

        {/* Free Booking Form Frame */}
        <div className="px-5 py-2">
          <div className="bg-emerald-600/5 rounded-3xl p-4 sm:p-5 border border-emerald-100/50 space-y-4">
            <div className="text-center py-1">
              <h2 className="text-base sm:text-lg font-black text-emerald-600 tracking-widest flex items-center justify-center gap-1.5">
                ✦ 填写办理信息 ✦
              </h2>
              <p className="text-[10px] sm:text-xs text-emerald-500 font-bold mt-1">专属网格工程师24小时内极速核装上门</p>
            </div>
            
            <ApplyForm 
              themeColor="bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-100" 
              buttonText="提交包年预约" 
              onSubmit={onSubmitForm}
              packageName="360年包宽带"
            />
          </div>
        </div>

        {/* Handling steps section */}
        <div className="p-5 mt-6 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-emerald-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-emerald-200"></span>
            宽带安装开通流程
            <span className="h-0.5 w-6 bg-emerald-200"></span>
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-3.5 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl hover:bg-emerald-50/10 transition-colors">
                <div className="w-8 h-8 shrink-0 rounded-full bg-emerald-50 font-bold text-emerald-600 flex items-center justify-center shadow-2xs border border-emerald-100 text-xs">
                  {item.step}
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-800">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cancel terms Section */}
        <div className="p-5">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-2">
            <h4 className="font-bold text-xs text-gray-700 flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-gray-500" />
              宽带包年退订方式说明
            </h4>
            <p className="text-[11px] leading-relaxed text-gray-500">
              若在合约期（2年内）需要申请提前退订或取消。用户需携带有效证件前往<strong>就近营业厅办理并归还完整无损的光猫及机顶盒设备。</strong>由于享受了年包特惠折价，合约未满提前退单需补缴每月30元的话费补贴违约金（按已使用的月份进行结算扣减）。
            </p>
          </div>
        </div>

        {/* Warnings Tips */}
        <div className="p-5 space-y-3.5 border-t border-gray-100">
          <h3 className="font-bold text-sm text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full inline-block"></span>
            宽带包年办理须知
          </h3>
          <ul className="list-decimal pl-4 text-[11px] leading-relaxed text-gray-500 space-y-2">
            <li>下单后，工作人员将通过您填写的手机号码与您进行初步地址资源校验，请保持手机可以接听。</li>
            <li>免费赠送的100元话费，将在装机成功系统生成归档后3个工作日内一次性发放到您的手机主卡中。</li>
            <li>宽带必须在已有宽带端口资源的小区内方能开通。若因小区无覆盖、无多余网口、或物业垄断导致不能安装，系统将自动全额退款。</li>
            <li>老用户提速套餐不可共享过户，合约期内手机号码不能欠费停机，停机可能导致宽带网络同步中断。</li>
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
