import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Solons -- Authentication",
    description: "Online bunking free of money witholding",
    icons: {
        icon: "./icons/logo.svg"
    }
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>{children}</main>
    );
}
