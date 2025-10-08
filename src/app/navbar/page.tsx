"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavItem[] = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo and Links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex shrink-0 items-center">
                  <span className="ml-3 text-xl font-semibold text-white">
                    Softsmartz
                  </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex sm:items-center sm:ml-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-blue-800 text-white"
                            : "text-white hover:bg-blue-800 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Icons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notification Bell */}
                <button
                  type="button"
                  className="relative rounded-full p-1 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="flex rounded-full bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                    </MenuButton>
                  </div>

                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900 py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-blue-800" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-blue-800" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-blue-800" : "",
                            "block px-4 py-2 text-sm text-white"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-900">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-blue-800 text-white"
                      : "text-white hover:bg-blue-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
