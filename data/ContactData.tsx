import { Mail, Phone, MapPin } from "lucide-react";

export const ContactInfoData = [
  {
    icon: <Mail className="w-8 h-8 text-yellow-500" />,
    labelKey: "email",
    valueKey: "email_value",
  },
  {
    icon: <Phone className="w-8 h-8 text-yellow-500" />,
    labelKey: "phone",
    valueKey: "phone_value",
  },
  {
    icon: <MapPin className="w-8 h-8 text-yellow-500" />,
    labelKey: "address",
    valueKey: "address_value",
  },
];
