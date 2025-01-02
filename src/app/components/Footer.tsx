import { SocialLinks } from "./SocialLinks";
import { DonationOptions } from "./DonationOptions";
import { data } from "../data";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/">
              <h3 className="text-lg font-semibold mb-4 text-secondary">
                {data?.name}
              </h3>
            </Link>
            <p className="text-gray-400">{data?.description}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Connect With Us
            </h3>
            <SocialLinks />
          </div>
          <DonationOptions />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {data?.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
