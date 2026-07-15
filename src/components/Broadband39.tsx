import React from 'react';
import { Package, ApplicationForm, FAQItem } from '../types';
import ApplyForm from './ApplyForm';
import { ShieldCheck, Zap, Users, PhoneCall, HelpCircle, ArrowLeft, Headphones, Milestone, ListOrdered, CheckCircle2 } from 'lucide-react';

interface Broadband39Props {
  selectedPackage: Package;
  onBack: () => void;
  onSubmitForm: (data: ApplicationForm) => void;
}

export default function Broadband39({ selectedPackage, onBack, onSubmitForm }: Broadband39Props) {
  const faqs: FAQItem[] = [
    {
      question: '是官方套餐吗？为什么价格会比别的地方低？',
      answer: '宽带是官方正规可查套餐。新入网的主副卡均是11位号数的当地本地正规套餐，可在官方App、官方客服查询，可全国接打电话、收发短信、注册软件等，和您在用的手机号卡是一样的。套餐资费均有推广商补贴+平台补贴+运营商拉新优惠共同组成的优惠方案，专门服务于广大新用户提供最大、最优、最具性价比的方案。宽带装通归档后，所有补贴均在官方移动App可领取，24小时内到账。'
    },
    {
      question: '如何查询能否安装，安装费是多少？',
      answer: [
        '宽带一般基础安装费是100元。如果存在垄断商加收初装费，运营商及平台无法干预。',
        '点击【移动宽带办理入口】，小程序-详细地址-输入即可查询：',
        '1.查询出地址即代表有覆盖，如未显示“初装XXX”标识即代表免费安装。',
        '2.如未显示您的地址，可直接手动输入地址提交审核，6小时内，移动业务员会通过电话反馈能否报装。'
      ]
    },
    {
      question: '有无合约期，如何自主取消，有无违约金？',
      answer: [
        '宽带普遍适合合约期1-2年；部分融合宽带没有合约期，随时可以取消，不限制用多久。',
        '按照以下步骤取消，不产生任何违约金：',
        '1.就近移动营业厅归还光猫设备，取消宽带，不需缴纳违约金。',
        '2.新开卡(副)卡一直用到欠费就停用3个月，自动注销，不需缴纳违约金。'
      ]
    },
    {
      question: '宽带是否包含电视、机顶盒？如何收费？',
      answer: '独立宽带和新入网宽带套餐(月包)都不包含电视和机顶盒。电视IPTV服务费需要额外支付:20元/月；电视机顶盒安装费:100元。'
    },
    {
      question: '宽带是独享宽带吗？速率是多少？',
      answer: '套餐宽带均为独享专线宽带【千兆宽带上下行速率】：正常下行速率为1000Mbps(约125M/s)，上行速率通常为30-50Mbps(约4-6M/s)。'
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50/50 pb-20 font-sans">
      {/* Upper Navigation Rail */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 py-3.5 px-4 flex items-center justify-between max-w-lg mx-auto shadow-xs">
        <button 
          onClick={onBack} 
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50/80 hover:bg-blue-100/80 px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回套餐列表
        </button>
        <span className="font-bold text-gray-800 text-sm truncate max-w-[200px]">39元千兆宽带申请</span>
        <div className="w-20 shrink-0"></div> {/* balancing block */}
      </div>

      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-md overflow-hidden relative border-x border-gray-100/50">
        
        {/* Banner Section */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 text-white relative px-6 py-10 pb-20 overflow-hidden rounded-b-[40px] shadow-lg shadow-blue-100">
          {/* Subtle bg vector shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-xl"></div>
          
          <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm animate-pulse">
            限时特惠 · 立即办理
          </div>

          <div className="space-y-3">
            <span className="bg-white/20 text-white border border-white/30 text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block">
              千兆宽带 · 全家共享
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">39元千兆宽带</h1>
            <p className="text-blue-100 text-xs sm:text-sm font-medium">超高网速，全家共享优质光纤宽带</p>
          </div>

          {/* Floating Price Circular Tag */}
          <div className="absolute bottom-6 right-6 bg-amber-400 text-gray-900 p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center border-4 border-white rotate-6 hover:rotate-0 transition-all">
            <span className="text-[10px] font-bold text-amber-900 leading-none">月租仅需</span>
            <div className="flex items-baseline mt-1">
              <span className="text-3xl font-black">39</span>
              <span className="text-xs font-bold">/月</span>
            </div>
            <span className="text-[9px] text-amber-900 font-semibold line-through mt-0.5 opacity-80">原价129元/月</span>
          </div>
        </div>

        {/* Highlight Stats Panels */}
        <div className="px-5 -mt-12 relative z-10">
          <div className="bg-white rounded-3xl p-5 shadow-xl border border-blue-50/50 grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-blue-50/30">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                <PhoneCall className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-medium">国内通话</span>
              <span className="text-sm font-bold text-gray-800 mt-1">300分钟</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-blue-50/30">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-medium">国内流量</span>
              <span className="text-sm font-bold text-gray-800 mt-1">90G流量</span>
            </div>

            <div className="flex flex-col items-center text-center p-2 rounded-2xl bg-blue-50/30">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs text-gray-500 font-medium">1元升级</span>
              <span className="text-sm font-bold text-gray-800 mt-1">1000M宽带</span>
            </div>
          </div>
        </div>

        {/* Pricing Detail Table Section */}
        <div className="p-5 mt-4 space-y-4">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white text-xs font-bold">
                  <th className="p-3 text-center">月费</th>
                  <th className="p-3">套餐包含</th>
                  <th className="p-3">套餐优惠</th>
                </tr>
              </thead>
              <tbody className="text-xs sm:text-sm text-gray-700 divide-y divide-gray-100">
                <tr className="bg-blue-50/10">
                  <td className="p-4 text-center font-bold text-blue-600 text-base">¥39/月</td>
                  <td className="p-4 font-medium">300分钟通话<br />+90G通用/定向流量</td>
                  <td className="p-4 text-orange-600 font-semibold">
                    +1元升级1000M宽带<br />
                    <span className="text-[10px] text-red-500 block font-bold mt-1 bg-red-50 p-1 rounded">（平台补贴30元/月，12个月）</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-4 text-[11px] leading-relaxed text-amber-800 space-y-1">
            <p className="font-bold text-amber-900 flex items-center gap-1">※ 宽带资费规则说明：</p>
            <p>1. 首月月租仅需<strong>39元/月</strong>，第二个月起月租为<strong>69元/月</strong>；</p>
            <p>2. 优惠签约1年，需在网存话费200元，宽带调测安装费一次性收取<strong>100元</strong>；</p>
            <p>3. 电视高清服务若加开，资费加20元/月，电视初装费一次性100元。</p>
          </div>
        </div>

        {/* Free Booking Form Section */}
        <div className="px-5 py-2">
          <div className="bg-blue-600/5 rounded-3xl p-4 sm:p-5 border border-blue-100/50 space-y-5">
            <div className="text-center py-2">
              <h2 className="text-base sm:text-lg font-black text-blue-600 tracking-widest flex items-center justify-center gap-1.5">
                ✦ 免费预约 先约先办 ✦
              </h2>
              <p className="text-[10px] sm:text-xs text-blue-500 font-semibold mt-1">专属客户专员为您绿色快捷接入服务</p>
            </div>
            
            <ApplyForm 
              themeColor="bg-blue-600 text-blue-600" 
              buttonText="立即提交预约" 
              onSubmit={onSubmitForm}
              packageName="39元千兆宽带"
            />
          </div>
        </div>

        {/* Why choose us Section */}
        <div className="p-5 mt-6 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-blue-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-blue-200"></span>
            选择我们的理由
            <span className="h-0.5 w-6 bg-blue-200"></span>
          </h3>
          
          <div className="grid grid-cols-1 gap-3.5">
            <div className="flex gap-3.5 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-2xs">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-gray-800">高速稳定</h4>
                <p className="text-xs text-gray-500">千兆光纤直达家庭，独享专线，玩游戏、看4K超清直播稳定不掉线。</p>
              </div>
            </div>

            <div className="flex gap-3.5 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-2xs">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-gray-800">全家共享</h4>
                <p className="text-xs text-gray-500">套餐内包含大通话时长与全国流量，全网通用。宽带与多张副卡绑定，全家同享更划算。</p>
              </div>
            </div>

            <div className="flex gap-3.5 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl">
              <div className="w-11 h-11 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-gray-800">服务保障</h4>
                <p className="text-xs text-gray-500">正规国企运营商客服专线在线，宽带问题快速响应，专业师傅极速派装、上门维修。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Handling Flow Section */}
        <div className="p-5 mt-4 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-blue-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-blue-200"></span>
            宽带办理流程
            <span className="h-0.5 w-6 bg-blue-200"></span>
          </h3>

          <div className="grid grid-cols-5 gap-1.5 relative py-2">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center border-2 border-blue-600 relative">
                01
              </div>
              <span className="text-[10px] font-bold text-gray-800">下单预审</span>
              <p className="text-[8px] text-gray-400 leading-normal scale-90">提交订单信息，进行资格预审</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center border-2 border-blue-600 relative">
                02
              </div>
              <span className="text-[10px] font-bold text-gray-800">官方审核</span>
              <p className="text-[8px] text-gray-400 leading-normal scale-90">官方审核资源，核实覆盖覆盖</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center border-2 border-blue-600 relative">
                03
              </div>
              <span className="text-[10px] font-bold text-gray-800">一对一服务</span>
              <p className="text-[8px] text-gray-400 leading-normal scale-90">专属客服专员对接确认时间</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-bold text-xs flex items-center justify-center border-2 border-blue-600 relative">
                04
              </div>
              <span className="text-[10px] font-bold text-gray-800">触达上门</span>
              <p className="text-[8px] text-gray-400 leading-normal scale-90">核实信息无误，师傅出发上门</p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center border-2 border-blue-600 relative shadow-sm">
                05
              </div>
              <span className="text-[10px] font-bold text-gray-800">极速开通</span>
              <p className="text-[8px] text-gray-400 leading-normal scale-90">24小时极速装机，检测上线</p>
            </div>
          </div>
        </div>

        {/* Help Center FAQ Section */}
        <div className="p-5 mt-4 space-y-5 bg-gray-50/50 border-y border-gray-100">
          <h3 className="text-center text-sm font-extrabold text-blue-600 tracking-widest flex items-center justify-center gap-2">
            <Headphones className="w-4 h-4 text-blue-500" />
            常见问题与帮助中心
          </h3>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 shadow-2xs border border-gray-100 space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-gray-800 flex items-start gap-1.5">
                  <span className="text-blue-500 font-black">Q:</span>
                  {faq.question}
                </p>
                <div className="text-gray-500 pl-4 border-l-2 border-blue-100 space-y-1.5 leading-relaxed text-[11px] sm:text-xs">
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((para, pi) => <p key={pi}>{para}</p>)
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="p-5 space-y-3.5">
          <h3 className="font-bold text-sm text-gray-800 border-b border-gray-100 pb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-4 bg-orange-500 rounded-full inline-block"></span>
            温馨提示
          </h3>
          <ul className="list-decimal pl-4 text-[11px] leading-relaxed text-gray-500 space-y-2">
            <li>请确保您的下单手机号码无误，并保持电话畅通！若多次联系无法接通可能导致工单注销。查询路径:【办理入口】-【查询订单】即可查询进度。</li>
            <li>所有赠送话费或平台补贴需要等宽带成功安装并归档后生效，每月需当月内领取。</li>
            <li>新开卡套餐结算日按激活日计算: 即激活日=结算日。</li>
            <li>国内流量、国内通话和接听免费范围均不包括中国港澳台地区。</li>
            <li>部分无覆盖地区(无资源等原因)无法办理，具体以运营商核实反馈为准。</li>
            <li>所有套餐资费及福利政策均按当前运营商最新公开政策执行，请用户明晰资费细节，防范未知资费变化的风险。</li>
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
