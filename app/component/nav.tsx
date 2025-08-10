"use client";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  UserButton,
  OrganizationList,
  OrganizationSwitcher,
} from "@clerk/nextjs";

import * as React from "react";

const Nav: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div>
        <h1 className="font-semibold text-2xl">SkipUp</h1>
      </div>
      <div className="flex gap-5">
        <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
        <UserButton />
      </div>
    </nav>
  );
};

export default Nav;
