"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevelaEffect";
import TopGradientButton from "./TopGradientButton";

export function Approach() {
	return (
		<>
			<div className="py-20 flex flex-col lg:flex-col items-center justify-center  w-full gap-4 mx-auto px-8 max-lg:mt-12 ">
				<h1 className="heading">
					My <span className="text-purple">approach</span>
				</h1>
				<div
					className={`w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:col-span-2 gap-4 mt-2
                    max-md:w-[90vw]
                    `}
				>
					<Card
						title={
							<div className="flex flex-col absolute w-80 text-center translate-x-[-35%] translate-y-[-50%] gap-y-5">
								<h1 className={` text-center text-purple  `}>
									Planning & Strategy
								</h1>
								<div className="text-center  text-slate-100 font-light text-sm ">
									We'll collaborate to map out your website's big picture,
									target audience, and key functionalities. We'll discuss things
									like site structure, navigation, and content requirements,.
								</div>
							</div>
						}
						icon={
							<TopGradientButton
								text="Step 1"
								className="text-center absolute mx-auto self-center flex"
							/>
						}
					>
						<CanvasRevealEffect
							animationSpeed={5.1}
							containerClassName="bg-emerald-900"
						/>
					</Card>
					<Card
						title={
							<div className="flex flex-col absolute w-80 text-center translate-x-[-35%] translate-y-[-50%] gap-y-5">
								<h1 className={` text-center text-purple  `}>
									Development & Progress Updated
								</h1>
								<div className="text-center  text-slate-100 font-light text-sm ">
									Once we agree on the plan, i cue my phonk playlist and dive
									into hyperfocus. from the provided big picture to polished
									design website. often i forgot what time is it.
								</div>
							</div>
						}
						icon={<TopGradientButton className="" text="Step 2" />}
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-black"
							colors={[
								[236, 72, 153],
								[232, 121, 249],
							]}
							dotSize={2}
						/>
					</Card>
					<Card
						title={
							<div className="flex flex-col absolute w-80 text-center translate-x-[-35%] translate-y-[-50%] gap-y-5">
								<h1 className={` text-center text-purple  `}>
									SEO & Launch Deploy
								</h1>
								<div className="text-center  text-slate-100 font-light text-sm ">
									This is almost the result, the website or the a almost
									finished but needs some additional polished and SEO settings,
									and probably client asks for more additional features before
									launch.
								</div>
							</div>
						}
						icon={<TopGradientButton className="" text="Step 3" />}
					>
						<CanvasRevealEffect
							animationSpeed={3}
							containerClassName="bg-sky-600"
							colors={[[125, 211, 252]]}
						/>
					</Card>
				</div>
			</div>
		</>
	);
}

const Card = ({
	title,
	icon,
	children,
}: {
	title: React.ReactNode;
	icon: React.ReactNode;
	children?: React.ReactNode;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="border  border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  md:h-[30rem] h-[17rem] relative"
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 w-full transition duration-200">
					{title}
				</h2>
			</div>
		</div>
	);
};
