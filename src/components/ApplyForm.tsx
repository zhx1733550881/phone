import React, { useState, useEffect } from 'react';
import { ApplicationForm } from '../types';
import { MapPin, Sparkles, Check, HelpCircle, X, ScrollText } from 'lucide-react';

interface ApplyFormProps {
  themeColor: string; // Tailwind class like bg-blue-600, text-blue-600 etc
  buttonText: string;
  onSubmit: (data: ApplicationForm) => void;
  packageName: string;
}

// Cascading region data
const REGION_DATA: Record<string, Record<string, string[]>> = {
  '广东省': {
    '佛山市': ['禅城区', '南海区', '顺德区', '三水区', '高明区'],
    '广州市': ['天河区', '越秀区', '海珠区', '番禺区', '白云区', '荔湾区', '黄埔区'],
    '深圳市': ['南山区', '福田区', '罗湖区', '宝安区', '龙岗区', '盐田区', '龙华区'],
    '东莞市': ['莞城区', '东城区', '南城区', '万江区', '虎门镇', '长安镇'],
    '惠州市': ['惠城区', '惠阳区', '博罗县', '惠东县'],
  },
  '北京市': {
    '北京市': ['朝阳区', '海淀区', '东城区', '西城区', '丰台区', '石景山区', '通州区']
  },
  '上海市': {
    '上海市': ['浦东新区', '黄浦区', '静安区', '徐汇区', '长宁区', '普陀区', '虹口区']
  },
  '浙江省': {
    '杭州市': ['西湖区', '拱墅区', '上城区', '滨江区', '萧山区', '余杭区', '临平区'],
    '宁波市': ['海曙区', '江北区', '北仑区', '镇海区', '鄞州区']
  },
  '江苏省': {
    '南京市': ['玄武区', '秦淮区', '鼓楼区', '建邺区', '雨花台区', '栖霞区', '江宁区'],
    '苏州市': ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区']
  }
};

export default function ApplyForm({ themeColor, buttonText, onSubmit, packageName }: ApplyFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('广东省');
  const [city, setCity] = useState('佛山市');
  const [district, setDistrict] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [remarks, setRemarks] = useState('');
  const [agree, setAgree] = useState(false);

  // Smart Parse Modal State
  const [isSmartModalOpen, setIsSmartModalOpen] = useState(false);
  const [smartText, setSmartText] = useState('');
  
  // Protocol Modal States
  const [activeProtocol, setActiveProtocol] = useState<string | null>(null);

  // Form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Reset city/district when province changes
  useEffect(() => {
    const cities = Object.keys(REGION_DATA[province] || {});
    if (cities.length > 0) {
      setCity(cities[0]);
    } else {
      setCity('');
    }
  }, [province]);

  // Reset district when city changes
  useEffect(() => {
    if (province && city) {
      const districts = REGION_DATA[province]?.[city] || [];
      if (districts.length > 0) {
        setDistrict(districts[0]);
      } else {
        setDistrict('');
      }
    } else {
      setDistrict('');
    }
  }, [province, city]);

  // Simple Smart Parsing
  const handleSmartParse = () => {
    if (!smartText.trim()) return;

    // Parse phone (11 digit starting with 1)
    const phoneRegex = /(1[3-9]\d{9})/;
    const phoneMatch = smartText.match(phoneRegex);
    let parsedPhone = '';
    let textToProcess = smartText;

    if (phoneMatch) {
      parsedPhone = phoneMatch[0];
      // Remove phone from text
      textToProcess = textToProcess.replace(parsedPhone, ' ');
    }

    // Try parsing province, city, district
    let parsedProvince = '广东省';
    let parsedCity = '佛山市';
    let parsedDistrict = '';

    // Loop and search for matches
    for (const prov of Object.keys(REGION_DATA)) {
      if (textToProcess.includes(prov) || textToProcess.includes(prov.substring(0, 2))) {
        parsedProvince = prov;
        const cities = REGION_DATA[prov];
        for (const c of Object.keys(cities)) {
          if (textToProcess.includes(c) || textToProcess.includes(c.substring(0, 2))) {
            parsedCity = c;
            const dists = cities[c];
            for (const d of dists) {
              if (textToProcess.includes(d) || textToProcess.includes(d.substring(0, 2))) {
                parsedDistrict = d;
                break;
              }
            }
            break;
          }
        }
        break;
      }
    }

    // Extract name
    // Strip address words, punctuation, and common symbols to get candidate names
    let cleanedText = textToProcess
      .replace(/[\d]/g, '') // remove remaining numbers
      .replace(parsedProvince, '')
      .replace(parsedProvince.substring(0, 2), '')
      .replace(parsedCity, '')
      .replace(parsedCity.substring(0, 2), '')
      .replace(parsedDistrict, '');
    
    if (parsedDistrict) {
      cleanedText = cleanedText.replace(parsedDistrict.substring(0, 2), '');
    }

    // Split words, grab first word that's 2-4 characters long (typical Chinese name)
    const words = cleanedText.replace(/[，。、；：,.;: \n\t]/g, ' ').split(/\s+/).filter(w => w.trim().length >= 2);
    let parsedName = words[0] || '';
    if (parsedName.length > 10) {
      parsedName = parsedName.substring(0, 4);
    }

    // Clean address details
    // Remove the province/city/district keywords from the smart text to find detail address
    let parsedDetail = textToProcess;
    if (parsedName) parsedDetail = parsedDetail.replace(parsedName, ' ');
    
    // Remove province/city/district and clean spacing
    parsedDetail = parsedDetail
      .replace(new RegExp(parsedProvince, 'g'), '')
      .replace(new RegExp(parsedProvince.substring(0, 2), 'g'), '')
      .replace(new RegExp(parsedCity, 'g'), '')
      .replace(new RegExp(parsedCity.substring(0, 2), 'g'), '');
    
    if (parsedDistrict) {
      parsedDetail = parsedDetail.replace(new RegExp(parsedDistrict, 'g'), '')
                                 .replace(new RegExp(parsedDistrict.substring(0, 2), 'g'), '');
    }

    parsedDetail = parsedDetail.replace(/[，。、；：,.;:\s]+/g, ' ').trim();

    // Populate
    if (parsedName) setName(parsedName);
    if (parsedPhone) setPhone(parsedPhone);
    setProvince(parsedProvince);
    setTimeout(() => {
      setCity(parsedCity);
      setTimeout(() => {
        if (parsedDistrict) setDistrict(parsedDistrict);
        if (parsedDetail) setDetailAddress(parsedDetail);
      }, 50);
    }, 50);

    // Close modal
    setIsSmartModalOpen(false);
    setSmartText('');
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = '请输入姓名';
    
    const phonePattern = /^1[3-9]\d{9}$/;
    if (!phone.trim()) {
      newErrors.phone = '请输入手机号码';
    } else if (!phonePattern.test(phone.trim())) {
      newErrors.phone = '请输入正确的11位手机号码';
    }

    if (!district) newErrors.district = '请选择区/县';
    if (!detailAddress.trim()) newErrors.detailAddress = '请输入详细收货地址';
    if (detailAddress.trim().length < 5) newErrors.detailAddress = '详细地址不能少于5个字，需包含路名、小区、门牌等信息';
    if (!agree) newErrors.agree = '请阅读并同意相关协议服务条款';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        name: name.trim(),
        phone: phone.trim(),
        province,
        city,
        district,
        detailAddress: detailAddress.trim(),
        remarks: remarks.trim(),
        agree
      });
    } else {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(`field-${firstError}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 border border-gray-100" id="apply-form-section">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div id="field-name">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
            姓名 <span className="text-red-500 ml-1 font-bold">*</span>
          </label>
          <input
            type="text"
            placeholder="请输入您的真实姓名"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
            }}
            className={`w-full bg-gray-50 border ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-100'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:bg-white transition-all text-gray-800`}
          />
          {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Phone Field */}
        <div id="field-phone">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center">
            联系号码 <span className="text-red-500 ml-1 font-bold">*</span>
          </label>
          <input
            type="tel"
            maxLength={11}
            placeholder="请输入11位手机号码（用于接收确认验证）"
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              setPhone(val);
              if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
            }}
            className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-100'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:bg-white transition-all text-gray-800`}
          />
          {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>}
        </div>

        {/* Address Field */}
        <div id="field-address" className="space-y-3">
          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold text-gray-700 flex items-center">
              收货地址 <span className="text-red-500 ml-1 font-bold">*</span>
            </label>
            <button
              type="button"
              onClick={() => setIsSmartModalOpen(true)}
              className="text-xs bg-indigo-50 hover:bg-indigo-100 text-indigo-600 px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all"
            >
              <Sparkles className="w-3 h-3" />
              智能识别地址
            </button>
          </div>

          {/* Regional cascading selectors */}
          <div className="grid grid-cols-3 gap-2">
            {/* Province Select */}
            <select
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
                if (errors.province) setErrors(prev => ({ ...prev, province: '' }));
              }}
              className="bg-gray-50 border border-gray-200 rounded-xl px-2 py-3 text-xs sm:text-sm focus:outline-none text-gray-800"
            >
              {Object.keys(REGION_DATA).map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>

            {/* City Select */}
            <select
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className="bg-gray-50 border border-gray-200 rounded-xl px-2 py-3 text-xs sm:text-sm focus:outline-none text-gray-800"
              disabled={!province}
            >
              {province && Object.keys(REGION_DATA[province] || {}).map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* District Select */}
            <select
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
                if (errors.district) setErrors(prev => ({ ...prev, district: '' }));
              }}
              className={`bg-gray-50 border ${errors.district ? 'border-red-400' : 'border-gray-200'} rounded-xl px-2 py-3 text-xs sm:text-sm focus:outline-none text-gray-800`}
              disabled={!city}
            >
              <option value="">请选择区</option>
              {city && (REGION_DATA[province]?.[city] || []).map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Detailed address */}
          <input
            type="text"
            placeholder="请输入详细地址（街道、小区、楼栋、门牌号等）"
            value={detailAddress}
            onChange={(e) => {
              setDetailAddress(e.target.value);
              if (errors.detailAddress) setErrors(prev => ({ ...prev, detailAddress: '' }));
            }}
            className={`w-full bg-gray-50 border ${errors.detailAddress ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-100'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:bg-white transition-all text-gray-800`}
          />
          {errors.detailAddress && <p className="text-xs text-red-500 font-medium">{errors.detailAddress}</p>}
          <p className="text-[11px] text-orange-500 font-medium flex items-center gap-1 bg-orange-50/50 p-2 rounded-lg border border-orange-100">
            <HelpCircle className="w-3 h-3 text-orange-400 shrink-0" />
            请确保省、市、区与详细地址的完整准确，否则可能导致快递配送失败或无法上门开通。
          </p>
        </div>

        {/* Remarks Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            备注 (选填)
          </label>
          <textarea
            placeholder="如有特殊派送或安装时间需求，可在此留言说明..."
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            rows={3}
            className="w-full bg-gray-50 border border-gray-200 focus:ring-indigo-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:bg-white transition-all text-gray-800 resize-none"
          />
        </div>

        {/* Privacy Agreement Checkbox */}
        <div id="field-agree" className="pt-2">
          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => {
                setAgree(e.target.checked);
                if (errors.agree) setErrors(prev => ({ ...prev, agree: '' }));
              }}
              className="sr-only"
            />
            <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center transition-all ${agree ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300 bg-white group-hover:border-indigo-500'}`}>
              {agree && <Check className="w-3 h-3 text-white stroke-[3]" />}
            </div>
            <span className="text-xs text-gray-500 leading-normal select-none">
              我已阅读并同意
              <button type="button" onClick={() => setActiveProtocol('privacy')} className="text-blue-500 hover:underline mx-0.5 font-medium">《个人信息保护政策》</button>、
              <button type="button" onClick={() => setActiveProtocol('booking')} className="text-blue-500 hover:underline mx-0.5 font-medium">《业务预约及信息使用告知书》</button>及
              <button type="button" onClick={() => setActiveProtocol('service')} className="text-blue-500 hover:underline mx-0.5 font-medium">《用户服务协议》</button>。
            </span>
          </label>
          {errors.agree && <p className="text-xs text-red-500 mt-1 font-medium">{errors.agree}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3.5 px-6 rounded-xl font-bold text-white shadow-lg shadow-indigo-100 ${themeColor} hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer text-center text-sm sm:text-base flex justify-center items-center`}
        >
          {buttonText}
        </button>
      </form>

      {/* Smart Address Parser Dialog */}
      {isSmartModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden animate-scale-up border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-gray-800">智能地址识别</h3>
              </div>
              <button onClick={() => setIsSmartModalOpen(false)} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-xs text-gray-500 leading-relaxed">
                请在下方粘贴包含收货姓名、联系电话、收货地址的完整文本，系统将智能提取对应字段，自动填充表格。
              </p>
              <textarea
                placeholder="例如：张大山，13912345678，广东省佛山市南海区桂城街道千灯湖东路1号保利水城"
                value={smartText}
                onChange={(e) => setSmartText(e.target.value)}
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 transition-all text-gray-700"
              />
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-100 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-[11px] text-amber-800 leading-relaxed">
                  <strong>匹配贴士：</strong>
                  <ul className="list-disc pl-3.5 space-y-0.5 mt-1">
                    <li>支持空格、逗号或换行分隔</li>
                    <li>手机号需为11位</li>
                    <li>地址中含有省市区名称识别率最高</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-2 justify-end">
              <button
                type="button"
                onClick={() => setIsSmartModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-500 hover:bg-gray-100 rounded-lg transition-all"
              >
                取消
              </button>
              <button
                type="button"
                onClick={handleSmartParse}
                className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-all"
              >
                立即识别
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Protocol Agreement Content Modal */}
      {activeProtocol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden animate-scale-up border border-gray-100 flex flex-col max-h-[85vh]">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
              <div className="flex items-center gap-2">
                <ScrollText className="w-5 h-5 text-indigo-500" />
                <h3 className="font-bold text-gray-800">
                  {activeProtocol === 'privacy' && '个人信息保护政策'}
                  {activeProtocol === 'booking' && '业务预约及信息使用告知书'}
                  {activeProtocol === 'service' && '用户服务协议条款'}
                </h3>
              </div>
              <button onClick={() => setActiveProtocol(null)} className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-xs text-gray-600 space-y-4 leading-relaxed">
              {activeProtocol === 'privacy' && (
                <>
                  <p className="font-bold text-gray-800 text-sm">【前言】</p>
                  <p>我们非常重视用户的个人隐私保护，在您预约办理【{packageName}】服务时，我们将收集、存储和使用您的必要相关信息。本政策旨在说明我们如何收集、使用、存储这些信息，并保障您的合法权益。</p>
                  <p className="font-bold text-gray-800 text-sm">1. 我们收集的信息</p>
                  <p>• <strong>身份信息：</strong>您的姓名。用于在公安及运营商实名制系统中验证身份、建立服务合同档案。</p>
                  <p>• <strong>联系电话：</strong>您的手机号码。用于确认订单意愿、下发服务开通及上门派装短信通知、以及与您电话联系预约服务时间。</p>
                  <p>• <strong>派装地址：</strong>您的省、市、区及详细物理地址。用于进行宽带资源网格覆盖校验、快递投递（对电话卡产品）以及工程师上门宽带线路派装。</p>
                  <p className="font-bold text-gray-800 text-sm">2. 信息的使用目的</p>
                  <p>我们收集上述信息仅为了向您提供您所申请的本款套餐服务，包括实名制入网审核、宽带资源核查、物流配送、工程师上门安装和后续售后保障。我们承诺绝不会将您的上述信息用于任何与本次服务申请无关的第三方商业推广活动。</p>
                  <p className="font-bold text-gray-800 text-sm">3. 信息的安全保障</p>
                  <p>我们采用行业标准的加密技术传输和存储您的个人敏感信息。建立严格的数据访问控制，确保只有经授权的服务派装和核装工程师才能访问您的订单地址，防止信息泄露、滥用或篡改。</p>
                </>
              )}
              {activeProtocol === 'booking' && (
                <>
                  <p className="font-bold text-gray-800 text-sm">【业务预约及信息使用告知】</p>
                  <p>尊敬的用户，请您在提交业务预约前仔细阅读以下告知条款：</p>
                  <p>1. <strong>预约性质：</strong>本页面提供的“立即提交/免费预约”属于网络入网意愿预登记。提交成功不代表合同正式成立或套餐已完全开通。具体资费标准、安装工期及实名制签约需以最终装维工程师现场实人核验或电话客服确认为准。</p>
                  <p>2. <strong>实名核验：</strong>根据国家工信部《电话用户真实身份信息登记规定》，所有电话卡和宽带用户在交付及上门安装时，<strong>必须出示申办人本人有效身份证件原件</strong>，并由工作人员进行现场人脸对比校验。非本人申办或无法出示证件将无法办理开通。</p>
                  <p>3. <strong>信息转交与上门：</strong>您填写的预约信息（姓名、电话、地址）将会安全流转给您所在区域的授权装维工程师及专属物流客服，用于安排上门服务、资源匹配或快件投递。您同意接收由我们或授权第三方通过电话、短信方式发起的后续服务核对沟通。</p>
                  <p>4. <strong>费用说明：</strong>若您预约的套餐涉及初装费、设备押金或一次性预存等。这些费用将在上门激活或宽带调通后，由运营商官方渠道扣除，或由装维人员协助您在官方专属页面支付，我们绝不会通过私人账号索要费用。</p>
                </>
              )}
              {activeProtocol === 'service' && (
                <>
                  <p className="font-bold text-gray-800 text-sm">【移动互联网及宽带接入服务协议】</p>
                  <p>1. <strong>服务内容：</strong>本服务属于宽带互联网接入/移动通信SIM卡卡品订购业务。具体的上下行传输速率、包含通话时长、定向流量使用范围等，需严格遵守对应套餐的资费详情页面的说明。</p>
                  <p>2. <strong>网络速率与环境：</strong>千兆宽带标称下行速率最高可达1000Mbps，但在实际使用中，受限于用户的终端设备（路由器、网卡、手机）、网线规格、光猫配置以及访问的目标网站服务器，实际网速可能会有所浮动，属于正常技术特征。</p>
                  <p>3. <strong>定向流量范围：</strong>对于流量卡类套餐所包含的“定向免流范围”，限在指定合伙APP（如哔哩哔哩、爱奇艺、优酷、抖音等）内使用，且通常不含APP内的第三方广告、直播、视频弹幕等外链内容。具体免流细节以运营商官方最新公告为准。</p>
                  <p>4. <strong>在网期限与退订：</strong>部分优惠套餐（如年包、合约期套餐）包含明确的“最少在网期限”（如1年或2年）。在合约期内如申请提前拆机退订，可能会产生违约金或需退还赠送的体验话费/免费设备。详情请在办理时与装维客服最终确认。</p>
                </>
              )}
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100 shrink-0 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setAgree(true);
                  setActiveProtocol(null);
                }}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                我已阅读并同意该协议
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
