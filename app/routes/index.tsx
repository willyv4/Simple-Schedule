import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="bg-white relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://www.thoughtco.com/thmb/qHQUbA5JQmnS3P2lPeiXFeHotmw=/3504x2336/filters:no_upscale():max_bytes(150000):strip_icc()/sandiegocalifornia_large-58b8ac7c5f9b58af5c5778da.jpg"
                alt="BTS playing on stage with the group leaving in action poses"
              />
              <div className="absolute inset-0 bg-[color:rgba(139,92,246,0.5)] mix-blend-multiply" />
            </div>
            <div className="lg:pb-18 relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32">
              <h1 className="text-stone-800 text-center text-6xl font-extrabold tracking-tight  sm:text-8xl lg:text-9xl">
                <span className="text-pink-700 block uppercase drop-shadow-lg">
                  Simply Schedule
                </span>
              </h1>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="border-transparent bg-white hover:bg-violet-50 flex items-center justify-center rounded-md border px-4 py-3 text-base font-medium text-gray shadow-sm sm:px-8"
                  >
                    Schedule appointment for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="border-transparent bg-white text-violet-700 hover:bg-violet-50 flex items-center justify-center rounded-md border px-4 py-3 text-base font-medium shadow-sm sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="bg-violet-500 text-white hover:bg-violet-600 flex items-center justify-center rounded-md px-4 py-3 font-medium  "
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
