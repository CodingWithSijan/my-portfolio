import React, { useEffect, useRef, useState } from "react";

const SoundVisualizer = ({ isActive = true }) => {
	const [bars, setBars] = useState(Array(6).fill(0.1));
	const intervalRef = useRef(null);

	useEffect(() => {
		if (!isActive) return;

		const animateBars = () => {
			setBars((prev) => prev.map(() => 0.1 + Math.random() * 0.9));
		};

		// Start with a gentle animation
		intervalRef.current = setInterval(animateBars, 100);

		// Listen for sound events to create reactive visualization
		const handleSoundEvent = () => {
			// Create a burst of activity
			setBars(Array(6).fill(0.8 + Math.random() * 0.2));

			// Gradually decrease
			let decay = 0.8;
			const decayInterval = setInterval(() => {
				decay *= 0.8;
				if (decay < 0.1) {
					clearInterval(decayInterval);
					return;
				}
				setBars((prev) =>
					prev.map(() => Math.max(0.1, decay + Math.random() * 0.2))
				);
			}, 50);
		};

		// Listen for various sound-triggering events
		document.addEventListener("click", handleSoundEvent);
		document.addEventListener("mouseenter", handleSoundEvent, true);
		document.addEventListener("keydown", handleSoundEvent);

		return () => {
			const currentInterval = intervalRef.current;
			if (currentInterval) clearInterval(currentInterval);
			document.removeEventListener("click", handleSoundEvent);
			document.removeEventListener("mouseenter", handleSoundEvent, true);
			document.removeEventListener("keydown", handleSoundEvent);
		};
	}, [isActive]);

	if (!isActive) return null;

	return (
		<div className="sound-visualizer">
			{bars.map((height, index) => (
				<div
					key={index}
					className="sound-bar"
					style={{
						height: `${height * 100}%`,
						animationDelay: `${index * 0.1}s`,
					}}
				/>
			))}
		</div>
	);
};

export default SoundVisualizer;
