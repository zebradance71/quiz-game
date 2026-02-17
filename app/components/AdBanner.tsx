"use client";

import { useEffect } from "react";

interface AdBannerProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  adStyle?: React.CSSProperties;
}

export default function AdBanner({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  adStyle = { display: "block" },
}: AdBannerProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="ad-container my-4">
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client="ca-pub-7907240934096694"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
