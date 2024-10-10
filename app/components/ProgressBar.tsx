"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (pathname !== "/") {
      NProgress.start();
      NProgress.done();
    }
  }, [pathname, searchParams]);

  return null;
}
