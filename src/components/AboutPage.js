import React from "react";

const AboutPage = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-green-500">
							About
						</p>
					</div>
					<div></div>

					{/* <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"> */}
					<div className="sm:text-right md:text-4xl text-3xl font-bold">
						<p>
							Hi, I am Sijan Pradhan, nice to meet you. Please take a look
							around.
						</p>
					</div>
					<div className="sm:text-2xl">
						<p>
							I am passionate about building excellent websites that improves
							the lives of those around me. I specialize in creating Full stack
							web apps.
						</p>
					</div>

					{/* </div> */}
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
