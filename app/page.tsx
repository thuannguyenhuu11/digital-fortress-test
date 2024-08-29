import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full h-screen grid grid-cols-2 bg-[#131619] min-h-[1024px]">
      <div className="flex flex-col py-[200px] px-[100px]">
        <form className="flex w-[496px] flex-col">
          <h1 className="text-4xl font-normal text-white mb-6">
            Hello, &nbsp;
            <span className="font-medium bg-gradient-to-r from-[#4D62E5] via-[#87DDEE] to-[#B6F09C] text-transparent bg-clip-text">
              Digital Fortress
            </span>
          </h1>
          <h2 className="text-lg font-medium text-[#6F767E] mb-10">Log in to platform to start creating magic.</h2>

          <div className="flex border rounded-[12px] bg-[#1A1D21] p-4 gap-[10px] mb-6">
            <Image src="/icon/email-icon.svg" alt="icon" width={18} height={14}></Image>
            <input
              type="email"
              title="email"
              className="text-base font-medium text-[#ffffff] bg-[#1A1D21] outline-none w-full"
              placeholder="Email address"
            />
          </div>

          <div className="flex border rounded-[12px] bg-[#1A1D21] p-4 gap-[10px] mb-8">
            <Image src="/icon/password-icon.svg" alt="icon" width={18} height={14}></Image>
            <input
              type="password"
              title="password"
              className="text-base font-medium text-[#ffffff] bg-[#1A1D21] outline-none w-full"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between text-base mb-10">
            <div className="flex gap-4">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="text-[#CDCECF]">
                Remember me
              </label>
            </div>

            <p className="bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] text-transparent bg-clip-text">
              Forgot password
            </p>
          </div>

          <Link href="/dashboard">
            <button
              title="button"
              type="submit"
              className="px-6 py-2 text-base font-semibold text-[#0C1132] rounded-[12px] bg-[#B6F09C] mb-10"
            >
              Log in
            </button>
          </Link>

          <p className="text-base text-center font-semibold text-[#6F767E]">
            Don’t have an account? &nbsp;
            <span className="bg-gradient-to-r from-[#82DBF7] to-[#B6F09C] text-transparent bg-clip-text"> Sign Up</span>
          </p>
        </form>
      </div>

      <div className="bg-[url(/image/login-image.png)]  bg-cover bg-center ">
        <div className="max-w-[608px] mx-[40px] mt-[495px] flex flex-col gap-[56px]">
          <p className="text-[32px] leading-10 font-semibold text-white">
            Digital Fortress has been a game-changer for our content creation process.
          </p>
          <p className="text-[32px] leading-10 font-semibold text-white">
            The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.
          </p>
          <div>
            <p className="text-xl text-white font-semibold">Lily Alisson</p>
            <p className="text-sm text-[#B6F09C] font-medium">CMO at Digital Fortress</p>
          </div>
        </div>
      </div>
    </main>
  );
}
