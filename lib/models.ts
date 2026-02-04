export type ServiceType = "hair" | "makeup" | "nail" | "aesthetic";
export type RequestStatus =
  | "Submitted"
  | "Reviewing"
  | "OptionsSent"
  | "BookingInProgress"
  | "Confirmed"
  | "Failed";

export type Availability = "pending" | "available" | "limited" | "unavailable";

export type Offer = {
  rank: 1 | 2 | 3;
  shopId: string;
  title: string;
  rationale: string;
  estPrice: string;
  estDuration: string;
  availability: Availability;
  bookingNote: string;
};

export type RequestDoc = {
  token: string;
  createdAt: unknown;
  updatedAt: unknown;
  guest: {
    city: "Seoul";
    district: string;
    date: string;
    timePref: string;
    serviceType: ServiceType;
    styleText: string;
    refUrl?: string;
    constraints: string[];
    budget?: string;
    contact?: {
      email?: string;
      instagram?: string;
    };
    accommodation?: string;
  };
  status: RequestStatus;
  offers: Offer[];
  admin: {
    internalMemo?: string;
    assignedTo?: string;
    lastEditedBy?: string;
  };
  guestMessage?: string;
};

export type ShopDoc = {
  name: string;
  category: ServiceType;
  district: string;
  address: string;
  instagram?: string;
  languages: string[];
  tags: string[];
  risk_specialties: string[];
  price_min: number;
  price_max: number;
  rating_hint?: string;
  createdAt: unknown;
};
