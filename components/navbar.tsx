"use client";
import { ModeToggle } from "./ThemeSwitch";
export default function Navbar() {
    return (
        <div className="min-w-screen flex h-16 items-center justify-between border-b px-6">
            <div>
                <a href="/" className="text-lg font-bold">anshnk</a>
                <a href="/photography" className="text-lg font-bold ml-4">Photography</a>
            </div>
            <ModeToggle />
        </div>
        )
}