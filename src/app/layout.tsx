import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/Theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Yafizham Web and Mobile Dev",
	description:
		"Yafizham BB is one the greatest developer in this current millennium , fortunately he is still alive and young. he starts his path on game developer first but failed, and then move on to JAVA as back-end and failed, he also tried mobile developer with JAVA but failed too, eventually he picked full stack web developer and finally he got his first job. he really loves web and mobile development. he doesn't really have  with friend and always get mocked in University like an MC in anime",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
