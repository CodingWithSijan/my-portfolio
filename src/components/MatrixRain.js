import React, { useEffect, useRef } from "react";

const MatrixRain = ({ isActive = false }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		if (!isActive) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let animationFrameId;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Matrix characters
		const chars =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-={}[]|;':\"<>?,./";
		const charArray = chars.split("");

		const fontSize = 14;
		const columns = canvas.width / fontSize;
		const drops = Array(Math.floor(columns)).fill(1);

		const draw = () => {
			ctx.fillStyle = "rgba(10, 25, 47, 0.04)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			ctx.fillStyle = "#00ff00";
			ctx.font = `${fontSize}px monospace`;

			for (let i = 0; i < drops.length; i++) {
				const text = charArray[Math.floor(Math.random() * charArray.length)];
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);

				if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
					drops[i] = 0;
				}
				drops[i]++;
			}

			animationFrameId = requestAnimationFrame(draw);
		};

		draw();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	}, [isActive]);

	if (!isActive) return null;

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
			style={{ opacity: 0.3 }}
		/>
	);
};

export default MatrixRain;
