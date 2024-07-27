import React from "react";
import { Button } from "./ui/MovingBorderButton";
import { workExperience } from "@/data";

const MovingBorderCard = () => {
	return (
		<div className="flex flex-col w-full mt-12">
			<div className="flex text-center w-full">
				<h1 className="lg:heading max-lg:text-[2rem] text-center mx-auto ">
					My <span className="text-purple"> Experiences </span>
				</h1>
			</div>
			<div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:w-full gap-4">
				{workExperience.map((work) => (
					<Button
						key={work.id}
						className="px-4 py-2 w-full flex flex-1 justify-between items-center "
						duration={Math.random() * 10000 + 1000}
						borderRadius="2rem"
					>
						<div
							className={`flex flex-col justify-center text-center gap-y-2 py-2  object-contain `}
						>
							<h1 className="text-lg font-light ">{work.title}</h1>
							<img
								src={work.thumbnail}
								className={`w-1/4 h-1/2 self-center mx-auto `}
								alt=""
							/>
							<p className="text-sm font-light text-gray-400">{work.desc}</p>
						</div>
					</Button>
				))}
			</div>
		</div>
	);
};

export default MovingBorderCard;
