import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { stackDetails, stacks } from "@/data";

const Stacks = () => {
	return (
		<div
			id="stacks"
			className="flex flex-col justify-center items-center gap-x-3 py-4 lg:mt-10 sm:mt-8 lg:my-0 max-lg:mt-20 max-lg:leading-10"
		>
			<h1 className="lg:heading max-lg:text-[2rem] text-center ">
				My Tech Stack <span className="text-purple"> and frameworks </span>
			</h1>
			<InfiniteMovingCards
				items={stackDetails}
				className={
					"flex flex-col justify-center items-center text-center w-full h-full"
				}
				direction="left"
				key={Math.random() * 1000}
				pauseOnHover={true}
				speed="fast"
			/>
		</div>
	);
};

export default Stacks;
