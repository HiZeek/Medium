import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href='/'>
            <Image width={176} height={100} className="object-contain cursor-pointer" src='/assets/medium.png' alt="" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3>
      </div>
    </header>
  );
};

export default Header;
