"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GlobeDemo";
import { stacks } from "@/data";
import Lottie from "react-lottie";
import animationData from "../../data/confetti.json";
import { useState } from "react";
import BorderMagicButton from "./BorderMagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	icon?: React.ReactNode;
	id?: number;
	img?: string;
	titleClassName?: string;
	imgClassName?: string;
	spareImg?: string;
}) => {
	const [copied, setCopied] = useState(false);

	function handleClick() {
		navigator.clipboard.writeText("24434muhammad.yafizham@gmail.com");
		setCopied(true);
	}

	return (
		<div
			className={cn(
				`row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1] ${className}`
			)}
			style={{
				background: `rgb(4,7,29)`,
				backgroundImage: `linear-gradient(90deg, rgb(4,7,29) 0%, rgba(12,14,35,1)  100%)`,
			}}
		>
			<div
				className={`${
					id === 6 && "flex flex-col  justify-center items-center"
				} h-full `}
			>
				<div className="w-full h-full absolute ">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover  object-center")}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 bottom-5 ${
						id === 5 && "w-full opacity-50"
					} `}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className={"object-cover object-center"}
						/>
					)}
				</div>
				{id === 6 && (
					<BackgroundGradientAnimation>
						
					</BackgroundGradientAnimation>
				)}
				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 relative md:h-full min-h-40 flex flex-col p-5 px-5 lg:p-10"
					)}
				>
					<div
						className={`font-sans  sm:text-slate-100  text-sm md:text-xs  lg:text-base z-10 sm:font-bold lg:font-extralight`}
					>
						{description}
					</div>
					<div className="font-sans font-bold  text-lg lg:text-3xl  max-w-96 z-50">
						{title}
					</div>
					{id === 2 && <GridGlobe />}
					{id == 3 && (
						<div className="flex gap-1 lg:gap-4  absolute -right-3 lg:-right-2">
							<div className="flex flex-col gap-6 lg:gap-4  h-full animate-pulse">
								{stacks.slice(0, 4).map((item, index) =>
									index % 2 === 0 ? (
										<span
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
											key={item}
										>
											{item}
										</span>
									) : (
										<span
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] translate-x-4"
											key={item}
										>
											{item}
										</span>
									)
								)}
							</div>
							<div className="flex flex-col gap-6 lg:gap-4  h-full animate-pulse">
								{stacks.slice(4, 8).map((item, index) =>
									index % 2 === 0 ? (
										<span
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
											key={item}
										>
											{item}
										</span>
									) : (
										<span
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] translate-x-4"
											key={item}
										>
											{item}
										</span>
									)
								)}
							</div>
							<div className="flex flex-col gap-4 lg:gap-4  h-full animate-pulse">
								{stacks.slice(8, 12).map((item, index) =>
									index % 2 === 0 ? (
										<span
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] "
											key={item}
										>
											{item}
										</span>
									) : (
										<span
											className="py-2 lg:py-4 px-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] translate-x-4"
											key={item}
										>
											{item}
										</span>
									)
								)}
							</div>
						</div>
					)}
					{id == 6 && (
						<div className="mt-5 relative">
							<div className="-bottom-5 right-0 absolute">
								{
									<Lottie
										options={{
											loop: copied,
											autoplay: copied,
											animationData,
											rendererSettings: {
												preserveAspectRatio: "xMidYMid slice",
											},
										}}
									/>
								}
							</div>
							<BorderMagicButton
								onClick={handleClick}
								position="right"
								title={copied ? "Email is copied :)" : "Copy my Email"}
								icon={
									!copied && (
										<IoCopyOutline
											className={`#bg-[#161a31] ml-4 text-white-100`}
										/>
									)
								}
								otherClasses={`sm:text-sm lg:text-base`}
							></BorderMagicButton>
						</div>
					)}
				</div>
			</div>

			<div className="group-hover/bento:translate-x-2 transition duration-200"></div>
		</div>
	);
};
