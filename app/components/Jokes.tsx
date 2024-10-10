"use client";

import { useQuery } from "@tanstack/react-query";
import { Jokes } from "../actions/Jokes";
import { useEffect } from "react";
import Link from "next/link";
import { useGlobalContext } from "@/provider/GlobalContext";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import ProgressBar from "./ProgressBar";
export default function JokesComponent() {
  const { fetched } = useGlobalContext();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["jokes"],
    queryFn: () => Jokes(),
    enabled: Object.keys(fetched).length === 0,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {Object.keys(fetched).length === 0 ? (
        isFetching ? (
          <h1>loading data...</h1>
        ) : (
          <h1>{data.joke}</h1>
        )
      ) : (
        <h1>{fetched.joke}</h1>
      )}
      <Link href={"/home"}>go to home</Link>
    </>
  );
}
