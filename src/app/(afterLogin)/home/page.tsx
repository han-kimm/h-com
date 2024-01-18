import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex justify-center items-center flex-1">
        <Image src={logo} alt="사이트 로고" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h1 className="font-bold text-6xl my-12">지금 일어나고 있는 일</h1>
        <h2 className="font-bold text-3xl my-8">지금 가입하세요.</h2>
        <Link href="/i/folw/signup" className={linkStyle + "bg-blue-400 hover:bg-blue-500"}>
          계정 만들기
        </Link>
        <h3 className="font-bold text-3xl my-8">이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={linkStyle + "bg-gray-400 hover:bg-gray-500"}>
          로그인
        </Link>
      </div>
    </div>
  );
}

const linkStyle = "w-80 h-10 rounded-3xl px-4 text-lg text-white font-semibold border-none flex justify-center items-center ";
