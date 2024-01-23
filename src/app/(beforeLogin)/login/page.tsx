"use client";

import Image from "next/image";
import logo from "@/../public/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_components/Main";

export default function Page() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}
