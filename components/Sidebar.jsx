import Image from "next/image";
import React from "react";
import TrendingIcon from "@/public/icons/trending.svg";
import NewReleaseIcon from "@/public/icons/newRelease.svg";
import ComingSoonIcon from "@/public/icons/commingSoon.svg";
import FavouriteIcon from "@/public/icons/favourite.svg";
import WatchLaterIcon from "@/public/icons/watchLater.svg";
import Link from "next/link";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { Lancelot } from "next/font/google";

const Sidebar = async ({lang}) => {
  const dict = await getDictionary(lang);

  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image src={TrendingIcon} width={24} height={24} alt="" />
            <span>{dict.trending}</span>
          </a>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="/"
          >
            <Image src={NewReleaseIcon} width={24} height={24} alt="" />
            <span>{dict.newReleases}</span>
          </Link>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={ComingSoonIcon} width={24} height={24} alt="" />
            <span>{dict.comingSoon}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={FavouriteIcon} width={24} height={24} alt="" />
            <span>{dict.favourites}</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image src={WatchLaterIcon} width={24} height={24} alt="" />
            <span>{dict.watchLater}</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
