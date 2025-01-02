import { CreditCard, DollarSign } from "lucide-react";
import Image from "next/image";

const donationOptions = [
  { name: "Credit Card", icon: "/card.svg", url: "#donate-credit-card" },
  {
    name: "PayPal",
    icon: "/paypal.svg",
    url: "https://paypal.me/bethmidrachchurch",
  },
  {
    name: "Cash App",
    icon: "/cashapp.svg",
    url: "https://cash.app/$bethmidrachchurch",
  },
  { name: "Zelle", icon: "/zelle.svg", url: "#donate-zelle" },
  { name: "Bank Transfer", icon: "/bank.svg", url: "#donate-bank-transfer" },
];

export const DonationOptions = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-semibold mb-2">Support Our Ministry</h3>
      {donationOptions.map((option) => (
        <a
          key={option.name}
          href={option.url}
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={option.icon}
            alt={`${option.name} icon`}
            width={24}
            height={24}
          />
          <span>{option.name}</span>
        </a>
      ))}
    </div>
  );
};
