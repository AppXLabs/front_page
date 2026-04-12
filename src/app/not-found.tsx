"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const DotLottiePlayer = dynamic(
    () => import("@dotlottie/react-player").then((mod) => mod.DotLottiePlayer),
    { ssr: false }
);

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-lg">
                <DotLottiePlayer
                    src="/404_error.lottie"
                    autoplay
                    loop
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            <Link
                href="/"
                className="mt-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-200/40 text-sm"
            >
                Go Back Home
            </Link>
        </div>
    );
}
