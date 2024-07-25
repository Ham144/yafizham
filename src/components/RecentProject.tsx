import { projects } from "@/data";
import React from "react";
import { ThreeDCardDemo } from "./ui/3dCardDemo";

const RecentProject = () => {
	return (
		<div className="py-20 " id="projects">
			<div className="gap-y-2 ">
				<h1 className="lg:heading max-lg:text-[2rem] text-center max-lg:leading-10 max-lg:mb-10">
					Some of My{" "}
					<span className="text-purple">Learning Result Projects</span>
				</h1>
				<div className="flex justify-center  flex-wrap w-full gap-x-20  p-4 max-lg:flex-col">
					{projects.map((pro) => (
						<div
							className={`flex flex-col justify-center items-center lg:min-h-[32.5rem] h-[25rem] sm:w-96 sm:h-[80vh] lg:mx-5 ${
								pro.id == 1 ? "max-lg:mt-24" : "max-lg:mt-60"
							}`}
						>
							<ThreeDCardDemo
								img={pro.img}
								title={pro.title}
								des={pro.des}
								iconLists={pro.iconLists}
								link={pro.link}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RecentProject;
