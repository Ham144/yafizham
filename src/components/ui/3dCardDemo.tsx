"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3DCardEffect";
import Link from "next/link";
import { IoAddCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

export function ThreeDCardDemo({
	img,
	title,
	des,
	iconLists,
	link,
}: {
	img: string;
	title: string;
	des: string;
	iconLists: string[];
	link: string;
}) {
	return (
		<CardContainer className="inter-var">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
				<CardItem
					translateZ="50"
					className="text-xl font-bold text-neutral-600 dark:text-white"
				>
					{title}
				</CardItem>
				<CardItem
					as="p"
					translateZ="60"
					className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
				>
					{des}
				</CardItem>
				<CardItem className={`flex text-base`} as="div" translateZ="60">
					{iconLists.map((item, index) => (
						<CardItem
							as="div"
							translateZ={index * 20}
							translateX={index * 20}
							translateY={index * 4}
							className={`${
								index === 0 ? "ml-0" : "ml-[-20px]"
							} rounded-full bg-white-100 border p-3 text-black dark:text-white dark:bg-black`}
						>
							<img src={item} alt={"image index of : " + index} />
						</CardItem>
					))}
				</CardItem>
				<CardItem translateZ="100" className="w-full mt-4">
					<Image
						src={img}
						height="1000"
						width="1000"
						className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
						alt="thumbnail"
					/>
				</CardItem>
				<div className="flex justify-between items-center mt-20">
					<CardItem
						translateZ={20}
						as={Link}
						href={link}
						target="__blank"
						className="px-4 py-2 flex flex-1 rounded-xl text-xs font-normal dark:text-white"
					>
						Visit →
					</CardItem>

					<CardItem
						translateZ={20}
						as="button"
						onclick={() => alert("Not Available")}
						className="px-4 flex py-2 sm:w-[30%]  rounded-xl justify-center items-cente  bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
					>
						<span className="mx-1">{0} </span>
						<span className="mr-3">Likes</span>
						<FaHeart />
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
