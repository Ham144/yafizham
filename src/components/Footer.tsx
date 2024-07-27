import React from "react";
import BorderMagicButton from "./ui/BorderMagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
	return (
		<div
			style={{
				backgroundImage: "../../public/footer-grid.svg",
				backgroundPosition: "contain",
			}}
			className="mt-12 flex flex-col justify-center items-center gap-y-2 gap-x-1 max-md:"
		>
			<h1 className="heading  flex max-md:flex-col gap-2  text-center">
				<span>Ready to help you with</span>{" "}
				<span className="text-purple lg:heading text-3xl ">
					passion and responsibility
				</span>
			</h1>
			<a
				href="mailto:24434muhammad.yafizham@gmail.com"
				className="lg:py-2 py-6"
			>
				<BorderMagicButton
					title="Email me"
					position="right"
					icon={<FaLocationArrow className="mx-3" />}
				/>
			</a>
			<p className="description text-slate-300 font-serif lg:text-xl text-center">
				Reach out to me today and let's discuss how can i help you
			</p>
			<div className={`w-full h-1 lg:mt-8 bg-white-100 rounded-full`} />
			<div
				className={`flex justify-between w-full px-4 lg:pb-3 pb-4  items-center`}
			>
				<p className="font-light text-slate-200">
					Copyright
					<span className="lg:px-9 px-3">(☞ﾟヮﾟ)☞ © 2025</span>
					•Yafizham
				</p>
				<div
					className={`flex md:gap-x-4 sm:gap-1 drop-shadow-md justify-center items-center `}
					id="contact"
				>
					{socialMedia.map((sosmed) => (
						<a href={sosmed.link} key={sosmed.id}>
							{
								<img
									src={sosmed.img}
									alt="socmed icon failed"
									className={`bg-black-100 text-white-100 items-center 
                                    md:m-4 m-2 md:rounded-lg sm:rounded-full   shadow-lg drop-shadow-lg lg:w-6 lg:h-6 `}
								/>
							}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
