/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Package, PackageId, ApplicationForm } from './types';
import PackageList from './components/PackageList';
import Broadband39 from './components/Broadband39';
import MangoCard from './components/MangoCard';
import TrafficCard39 from './components/TrafficCard39';
import Broadband360 from './components/Broadband360';
import Broadband600 from './components/Broadband600';
import SuccessModal from './components/SuccessModal';

const INITIAL_PACKAGES: Package[] = [
  {
    id: 'traffic_29',
    name: '29元大流量卡',
    subName: '官方200G全国通用大流量手机卡',
    price: '¥29',
    period: '月',
    themeColor: 'bg-red-500 text-red-500',
    accentColor: 'red',
    badge: '超值大流量',
    features: ['200G全国大流量', '100分钟国内通话', '前6个月仅需29元/月'],
    specs: { voice: '100分钟', data: '200G流量', other: '优惠期2年' }
  },
  {
    id: 'mango_29',
    name: '29元校园芒果卡',
    subName: '动感地带芒果专属青春特惠卡',
    price: '¥29',
    period: '月',
    themeColor: 'bg-orange-500 text-orange-500',
    accentColor: 'orange',
    badge: '校园卡特惠',
    features: ['150GB流量', '100分钟通话', '芒果TV及咪咕黄金会员权'],
    specs: { voice: '100分钟', data: '150G流量', other: '赠芒果会员' }
  },
  {
    id: 'broadband_39',
    name: '39元千兆宽带',
    subName: '千兆光纤高速家庭宽带套餐',
    price: '¥39',
    period: '月',
    themeColor: 'bg-blue-600 text-blue-600',
    accentColor: 'blue',
    badge: '千兆高速',
    features: ['300分钟语音', '90G大流量', '1元升级1000M宽带'],
    specs: { voice: '300分钟', data: '90G流量', other: '1000M宽带' }
  },
  {
    id: 'broadband_360',
    name: '360年包宽带',
    subName: '移动老用户专享包年优惠光宽带',
    price: '¥360',
    period: '年',
    themeColor: 'bg-emerald-600 text-emerald-600',
    accentColor: 'emerald',
    badge: '老用户专享',
    features: ['300M/600M/1000M可选', '免除100元初装调试费', '成功装机赠100话费'],
    specs: { voice: '已有29+主套餐', data: '300M-1000M', other: '免初装费' }
  },
  {
    id: 'broadband_600',
    name: '600年包宽带',
    subName: '千兆标称极速纯独立包年光纤',
    price: '¥600',
    period: '年',
    themeColor: 'bg-purple-600 text-purple-600',
    accentColor: 'purple',
    badge: '纯独立宽带',
    features: ['1000M千兆不限速', '无需已有号码绑定', '金牌极速装维响应'],
    specs: { voice: '免手机号绑定', data: '1000M网速', other: '独立光纤' }
  }
];

export default function App() {
  const [activePackageId, setActivePackageId] = useState<PackageId | null>(null);
  
  // Success Modal States
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formData, setFormData] = useState<ApplicationForm | null>(null);

  const selectedPackage = INITIAL_PACKAGES.find(pkg => pkg.id === activePackageId);

  const handleSubmitForm = (data: ApplicationForm) => {
    setFormData(data);
    setIsSuccessOpen(true);
  };

  const handleSelectPackage = (id: PackageId) => {
    setActivePackageId(id);
    // Scroll to top of the window
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToList = () => {
    setActivePackageId(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="relative">
      
      {/* Dynamic routing view components */}
      {activePackageId === null && (
        <PackageList 
          packages={INITIAL_PACKAGES} 
          onSelect={handleSelectPackage} 
        />
      )}

      {activePackageId === 'broadband_39' && selectedPackage && (
        <Broadband39
          selectedPackage={selectedPackage}
          onBack={handleBackToList}
          onSubmitForm={handleSubmitForm}
        />
      )}

      {activePackageId === 'mango_29' && selectedPackage && (
        <MangoCard
          selectedPackage={selectedPackage}
          onBack={handleBackToList}
          onSubmitForm={handleSubmitForm}
        />
      )}

      {activePackageId === 'traffic_29' && selectedPackage && (
        <TrafficCard39
          selectedPackage={selectedPackage}
          onBack={handleBackToList}
          onSubmitForm={handleSubmitForm}
        />
      )}

      {activePackageId === 'broadband_360' && selectedPackage && (
        <Broadband360
          selectedPackage={selectedPackage}
          onBack={handleBackToList}
          onSubmitForm={handleSubmitForm}
        />
      )}

      {activePackageId === 'broadband_600' && selectedPackage && (
        <Broadband600
          selectedPackage={selectedPackage}
          onBack={handleBackToList}
          onSubmitForm={handleSubmitForm}
        />
      )}

      {/* Submitted info popup dialog */}
      {isSuccessOpen && formData && selectedPackage && (
        <SuccessModal
          isOpen={isSuccessOpen}
          onClose={() => {
            setIsSuccessOpen(false);
            setFormData(null);
          }}
          formData={formData}
          selectedPackage={selectedPackage}
        />
      )}

    </div>
  );
}
