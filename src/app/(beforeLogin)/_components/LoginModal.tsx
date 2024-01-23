"use client";

import { useState } from "react";

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const onSubmit = () => {};
  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangePassword = () => {};

  return (
    <div className="w-dvw h-full flex justify-center items-center bg-black/40 absolute top-0 left-0 right-0 bottom-0">
      <div className="px-20 bg-white relative top-[5%] max-w-[80dvw] min-w-[600px] rounded-2xl flex flex-col h-[450px]">
        <div className="pt-9  pb-5 text-3xl font-bold">
          <button onClick={onClickClose} className="w-8 h-8 rounded-2xl absolute top-4 left-4 hover:bg-gray-300 flex justify-center items-center">
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>로그인하세요.</div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="flex flex-col h-14 relative mt-3">
              <label
                htmlFor="id"
                className="w-full inline-block absolute top-0 border-[1px] border-solid border-gray-300 rounded-lg text-sm h-14 pt-1 px-3 text-gray-500 focus-within:text-red-600"
              >
                아이디
              </label>
              <input
                id="id"
                value={id}
                onChange={onChangeId}
                type="text"
                placeholder=""
                className="w-full border-0 text-lg mt-4 pt-3 px-3 pb-2 outline-none"
              />
            </div>
            <div className="flex flex-col h-14 relative mt-3">
              <label
                htmlFor="password"
                className="w-full inline-block absolute top-0 border-[1px] border-solid border-gray-300 rounded-lg text-sm h-14 pt-1 px-3 text-gray-500 focus-within:text-red-600"
              >
                비밀번호
              </label>
              <input
                id="password"
                value={password}
                onChange={onChangePassword}
                type="password"
                placeholder=""
                className="w-full border-0 text-lg mt-4 pt-3 px-3 pb-2 outline-none"
              />
            </div>
          </div>
          <div>{message}</div>
          <div className="pb-6">
            <button
              disabled={!id && !password}
              className="w-full h-12 rounded-3xl bg-gray-900 text-white text-lg disabled:opacity-50 hover:bg-gray-700"
            >
              로그인하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
