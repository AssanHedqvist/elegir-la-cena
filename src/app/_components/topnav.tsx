import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
      <nav className="flex w-full items-center justify-between p-4 text-x1
      font-semibold border-b">
        <div>Top Nav</div>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    );
  }