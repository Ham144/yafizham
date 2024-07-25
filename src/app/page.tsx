import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Stacks from "@/components/InfiniteMovingCards";
import Clients from "@/components/InfiniteMovingCards";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import React from "react";

const App = () => {
	return (
		<main
			className={`relative bg-black-100 flex justify-center items-center flex-col overflow-hidden text-base mx-auto sm:px-10 px-5`}
		>
			<div className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<Hero />
				<Grid />
				<RecentProject />
				<Stacks />
			</div>
		</main>
	);
};

export default App;
