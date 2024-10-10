"use client";

import { useGlobalContext } from "@/provider/GlobalContext";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Jokes } from "../actions/Jokes";
import NProgress from "nprogress";
import { useEffect } from "react";
export default function Home() {
  const { setFetched } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
  }, []);
  const { mutate } = useMutation({
    mutationFn: Jokes,
    onMutate: () => {
      NProgress.start();
    },
    onSuccess: (data) => {
      setFetched(data);
      router.push("/");
      NProgress.done();
    },
    onError: () => {
      NProgress.done();
    },
  });
  const handleNavigation = () => {
    mutate();
  };
  return (
    <>
      <div>this is home component</div>
      <div onClick={handleNavigation} className="cursor-pointer">
        go to home page
      </div>
    </>
  );
}
