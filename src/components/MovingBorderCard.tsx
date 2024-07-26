import React from "react";
import { Button } from "./ui/MovingBorderButton";
import { workExperience } from "@/data";

const MovingBorderCard = () => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex text-center w-full">
				<h1 className="lg:heading max-lg:text-[2rem] text-center mx-auto ">
					My <span className="text-purple"> Experiences </span>
				</h1>
			</div>
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:col-span-2">
				{workExperience.map((work) => (
					<Button
						key={work.id}
						className="px-4 py-2 w-full flex flex-1 justify-between items-center"
						children={work.title}
						duration={Math.random() * 10000 + 1000}
						borderRadius="9rem"
					/>
				))}
			</div>
		</div>
	);
};

export default MovingBorderCard;
