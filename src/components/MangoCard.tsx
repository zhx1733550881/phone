import React from 'react';
import { Package, ApplicationForm } from '../types';
import ApplyForm from './ApplyForm';
import { Gift, Zap, ShieldAlert, Award, Star, ArrowLeft, Disc, Tv, Sparkles } from 'lucide-react';

interface MangoCardProps {
  selectedPackage: Package;
  onBack: () => void;
  onSubmitForm: (data: ApplicationForm) => void;
}

export default function MangoCard({ selectedPackage, onBack, onSubmitForm }: MangoCardProps) {
  const exclusiveBenefits = [
    {
      title: '超级会员3重享',
      desc: '芒果TV会员、咪咕视频钻石会员、咪咕音乐特权，3大黄金会员平台月月可领。',
      icon: <Tv className="w-5 h-5 text-orange-500" />
    },
    {
      title: '超级芒盒天天抽',
      desc: '芒果热门综艺/晚会/明星演唱会内场门票、大牌口红美妆、数码潮玩产品天天免费抽。',
      icon: <Gift className="w-5 h-5 text-orange-500" />
    },
    {
      title: '超级内容看不停',
      desc: '尊享明星专区专属直拍视角、独家未播花絮、探班花絮与粉丝彩蛋。',
      icon: <Sparkles className="w-5 h-5 text-orange-500" />
    },
    {
      title: '超级现场去见TA',
      desc: '“无限X”巡回演唱会、芒果音乐节、明星见面青春派对，提供粉丝专属通道奔赴现场。',
      icon: <Star className="w-5 h-5 text-orange-500" />
    },
    {
      title: '超级应用新玩法',
      desc: '视频彩铃、星动专属来电秀、极速云盘存储、星动专属视频秘书、云手机尝鲜体验。',
      icon: <Disc className="w-5 h-5 text-orange-500" />
    }
  ];

  const appIcons = [
    { name: '芒果TV', bg: 'bg-orange-100 text-orange-600' },
    { name: '爱奇艺', bg: 'bg-green-100 text-green-600' },
    { name: '腾讯视频', bg: 'bg-blue-100 text-blue-600' },
    { name: '哔哩哔哩', bg: 'bg-pink-100 text-pink-600' },
    { name: '优酷视频', bg: 'bg-sky-100 text-sky-600' },
    { name: '抖音', bg: 'bg-gray-100 text-gray-800' },
    { name: '新浪微博', bg: 'bg-red-100 text-red-600' },
    { name: '喜马拉雅', bg: 'bg-red-50 text-red-500' }
  ];

  return (
    <div className="min-h-screen bg-amber-50/20 pb-20 font-sans">
      {/* Sticky upper nav */}
      <div className="bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100 py-3.5 px-4 flex items-center justify-between max-w-lg mx-auto shadow-xs">
        <button 
          onClick={onBack} 
          className="flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50/80 hover:bg-orange-100/80 px-3 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          返回列表
        </button>
        <span className="font-bold text-gray-800 text-sm truncate max-w-[200px]">动感地带芒果校园卡</span>
        <div className="w-20 shrink-0"></div>
      </div>

      <div className="max-w-lg mx-auto bg-white min-h-screen shadow-md overflow-hidden relative border-x border-gray-100/50">
        
        {/* Banner Section */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 text-white relative px-6 py-10 pb-24 overflow-hidden rounded-b-[40px] shadow-lg shadow-orange-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-15 -mt-15 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-yellow-400/30 rounded-full blur-xl"></div>
          
          <div className="absolute top-4 right-4 bg-yellow-400 text-orange-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            限时返校特惠
          </div>

          <div className="space-y-3">
            <span className="bg-white/20 text-white border border-white/30 text-[10px] font-semibold px-2.5 py-1 rounded-full inline-block">
              动感地带 · 青春不设限
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight flex items-center gap-1">
              芒果卡 <span className="text-yellow-300">¥29/月</span>
            </h1>
            <p className="text-orange-50 text-xs sm:text-sm font-medium">150GB超大流量 + 芒果TV等双大会员任选</p>
          </div>

          <div className="absolute bottom-6 right-6 bg-white text-orange-600 p-4 rounded-2xl shadow-xl flex flex-col items-center justify-center border-2 border-orange-200 -rotate-3 hover:rotate-0 transition-all">
            <span className="text-[10px] font-extrabold text-orange-500 leading-none">专属办理资格</span>
            <span className="text-xs font-bold text-orange-950 mt-1">18-30岁学生</span>
            <span className="text-[9px] text-gray-400 font-semibold mt-0.5">或提供学生证件</span>
          </div>
        </div>

        {/* Input Form Frame */}
        <div className="px-5 -mt-12 relative z-10">
          <div className="bg-orange-500/5 rounded-3xl p-4 sm:p-5 border border-orange-100 shadow-xl bg-white/90 backdrop-blur-sm space-y-4">
            <div className="text-center py-1">
              <h2 className="text-base sm:text-lg font-black text-orange-600 tracking-widest flex items-center justify-center gap-1.5">
                🍊 填写办理信息 🍊
              </h2>
              <p className="text-[10px] sm:text-xs text-orange-500 font-bold mt-1">包邮寄送到家 线上自助极速激活</p>
            </div>
            
            <ApplyForm 
              themeColor="bg-orange-500 hover:bg-orange-600 text-white shadow-orange-100" 
              buttonText="立即申请芒果卡" 
              onSubmit={onSubmitForm}
              packageName="动感地带芒果卡"
            />
          </div>
        </div>

        {/* Package Specs details */}
        <div className="p-5 mt-6 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-orange-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-orange-200"></span>
            套餐详细资费
            <span className="h-0.5 w-6 bg-orange-200"></span>
          </h3>

          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs divide-y divide-gray-100 text-xs sm:text-sm">
            <div className="grid grid-cols-4 p-4 items-center">
              <span className="font-bold text-gray-500 text-center col-span-1 border-r border-gray-100">月租</span>
              <div className="col-span-3 pl-4 space-y-1">
                <p className="font-extrabold text-orange-600 text-base">29元/月 <span className="text-xs text-gray-400 line-through font-normal">原价59/月</span></p>
                <p className="text-xs text-gray-500 leading-normal">首充充值100元，激活后保持在网4年，享每月减免30元话费优惠。</p>
              </div>
            </div>

            <div className="grid grid-cols-4 p-4 items-center">
              <span className="font-bold text-gray-500 text-center col-span-1 border-r border-gray-100">超大流量</span>
              <div className="col-span-3 pl-4 space-y-1">
                <p className="font-extrabold text-gray-800">共 150GB 流量/月</p>
                <ul className="list-disc pl-4 text-xs text-gray-500 space-y-0.5">
                  <li>20GB 国内通用流量</li>
                  <li>30GB 专属定向免流</li>
                  <li>100GB 赠送通用流量 (有效期4年)</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-4 p-4 items-center">
              <span className="font-bold text-gray-500 text-center col-span-1 border-r border-gray-100">国内通话</span>
              <div className="col-span-3 pl-4">
                <p className="font-bold text-gray-800">100分钟/月 国内免费通话</p>
                <p className="text-xs text-gray-500 mt-1">超出后拨打国内通话仅需0.1元/分钟，接听免费。</p>
              </div>
            </div>

            <div className="grid grid-cols-4 p-4 items-center">
              <span className="font-bold text-gray-500 text-center col-span-1 border-r border-gray-100">芒果权益</span>
              <div className="col-span-3 pl-4 text-xs text-gray-500 leading-relaxed space-y-1">
                <p className="font-bold text-orange-600">双大黄金会员平台特权</p>
                <p>包含芒果TV/咪咕视频双会员月月领、超级芒盒抽门票/美妆等好物权益。</p>
              </div>
            </div>

            <div className="grid grid-cols-4 p-4 items-center">
              <span className="font-bold text-gray-500 text-center col-span-1 border-r border-gray-100">全国亲情网</span>
              <div className="col-span-3 pl-4">
                <p className="font-bold text-gray-800">免费赠送全国亲情网</p>
                <p className="text-xs text-gray-500 mt-0.5">可添加4个全国互拨免费通话的亲情号码(含1主卡3副卡)。</p>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming range app icons */}
        <div className="px-5 py-2">
          <div className="bg-orange-50/40 border border-orange-100/50 rounded-2xl p-4 space-y-3">
            <p className="text-xs font-bold text-orange-800 text-center">🍿 定向流量可使用的免流APP（部分）</p>
            <div className="grid grid-cols-4 gap-2">
              {appIcons.map((app, i) => (
                <div key={i} className={`p-2 rounded-lg text-center ${app.bg} text-[11px] font-bold shadow-2xs`}>
                  {app.name}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 text-center leading-normal">免流范围APP仍在持续增加中，详情以微信公众号“动感地带芒果卡”官方说明为准。</p>
          </div>
        </div>

        {/* Benefits details cards */}
        <div className="p-5 mt-4 space-y-4">
          <h3 className="text-center text-sm font-extrabold text-orange-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-orange-200"></span>
            芒果专属权益详情
            <span className="h-0.5 w-6 bg-orange-200"></span>
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {exclusiveBenefits.map((item, i) => (
              <div key={i} className="flex gap-3 bg-gray-50/50 border border-gray-100 p-4 rounded-2xl hover:bg-orange-50/20 transition-colors">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-2xs">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs sm:text-sm text-gray-800">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-gray-500 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Description details */}
        <div className="p-5 mt-4 space-y-4 border-t border-gray-100">
          <h3 className="text-center text-sm font-extrabold text-orange-600 tracking-widest flex items-center justify-center gap-2">
            <span className="h-0.5 w-6 bg-orange-200"></span>
            活动参与说明
            <span className="h-0.5 w-6 bg-orange-200"></span>
          </h3>
          <ul className="list-decimal pl-4 text-[11px] leading-relaxed text-gray-500 space-y-2">
            <li><strong>办理时间：</strong>即日起至2026年12月31日限时特惠，逾期将恢复原价59元/月。</li>
            <li><strong>用户专享资格：</strong>限年龄在18-30岁青年办理（系统身份证自动识别），非学生或不在年龄范围的用户需提供有效学信网学生身份截图或学生证等辅证。</li>
            <li><strong>首充与赠存：</strong>新激活手机卡需在一周内通过专属充值页一次性首充100元，方可触发在网4年月减30元话费返还福利。</li>
            <li><strong>亲情网添加：</strong>手机激活成功后，可通过中国移动App搜索“亲情网”自助添加其他免费成员号码。</li>
            <li><strong>配送说明：</strong>本卡品顺丰/京东包邮极速配送。</li>
          </ul>
        </div>

        {/* Anti-fraud Warning Section */}
        <div className="p-5">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-5 text-red-800 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-red-500 shrink-0" />
              <h4 className="font-bold text-sm">防诈骗及实名制使用注意事项</h4>
            </div>
            <p className="text-xs leading-relaxed text-red-900 font-medium">
              请保管好自己的身份证、手机卡，<strong>不要出租、出借、出售给他人。</strong>根据《中华人民共和国刑法》规定，对明知他人利用信息网络实施犯罪而提供帮助，情节严重的，处三年以下有期徒刑或者拘役，并处或者单处罚金。
            </p>
          </div>
        </div>

        {/* Footnote */}
        <div className="p-6 bg-gray-50 text-center border-t border-gray-100 text-[10px] text-gray-400 shrink-0">
          粤ICP备202204561号-3
        </div>

      </div>
    </div>
  );
}
