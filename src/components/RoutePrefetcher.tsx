"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch critical routes immediately for mobile navigation performance
    const criticalRoutes = [
      "/messages",
      "/servers",
      "/requests",
      "/community",
      "/settings",
    ];

    criticalRoutes.forEach((route) => {
      router.prefetch(route);
    });

    // Prefetch secondary routes after a short delay
    const timer = setTimeout(() => {
      const secondaryRoutes = [
        "/list/teachers",
        "/list/students",
        "/list/classes",
        "/support",
      ];

      secondaryRoutes.forEach((route) => {
        router.prefetch(route);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return null;
}