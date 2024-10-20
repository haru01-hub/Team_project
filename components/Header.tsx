import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div>
      <nav className="bg-green-900 py-7 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-2xl text-white hover:text-yellow-300 mr-4">
                <h1 className="font-serif text-lg">WITH BOOK</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <Link
              href="/team-info"
              className=" text-white hover:text-yellow-300 mr-4"
            >
              Team info
            </Link>
          </div>
          <div className="flex items-center font-bold">
            <SignedOut>
              <div className=" text-white hover:text-yellow-300 mr-4">
                <SignInButton />
              </div>
              <div className=" text-white hover:text-yellow-300 mr-4">
                <SignUpButton />
              </div>
            </SignedOut>

            <SignedIn>
              {/* <Link
                href="/profile"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                Profile
              </Link> */}
              {/* <Link
                href="/dashboard"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                Team information
              </Link> */}

              <Link
                href="/book-rank"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                Reader Ranking
              </Link>
              <Link
                href="/book-list"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                Book List
              </Link>
              <Link
                href="/my_profile"
                className=" text-white hover:text-yellow-300 mr-4"
              >
                My Profile
              </Link>
              <div className=" text-white hover:text-yellow-300 mr-4">
                <UserButton />
              </div>
              <div className=" text-white hover:text-yellow-300 mr-4">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
