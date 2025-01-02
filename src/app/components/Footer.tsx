import { SocialLinks } from "./SocialLinks";
import { DonationOptions } from "./DonationOptions";
import { data } from "../data";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{data?.name}</h3>
            <p className="text-gray-600">Where Faith Meets Learning</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <SocialLinks />
          </div>
          <DonationOptions />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {data?.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
