export type PackageId = 'broadband_39' | 'mango_29' | 'traffic_29' | 'broadband_360' | 'broadband_600';

export interface Package {
  id: PackageId;
  name: string;
  subName: string;
  price: string;
  period: string;
  themeColor: string;
  accentColor: string;
  badge: string;
  features: string[];
  specs: {
    voice: string;
    data: string;
    other?: string;
  };
}

export interface ApplicationForm {
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  detailAddress: string;
  remarks: string;
  agree: boolean;
}

export interface FAQItem {
  question: string;
  answer: string | string[];
}
