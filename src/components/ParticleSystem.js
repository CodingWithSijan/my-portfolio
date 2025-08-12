import React, { useEffect, useRef } from "react";

const ParticleSystem = ({ className }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let animationFrameId;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Particle class
		class Particle {
			constructor() {
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.size = Math.random() * 3 + 1;
				this.speedX = Math.random() * 2 - 1;
				this.speedY = Math.random() * 2 - 1;
				this.color = `hsl(${Math.random() * 60 + 120}, 70%, 60%)`;
				this.life = Math.random() * 100 + 100;
				this.maxLife = this.life;
			}

			update() {
				this.x += this.speedX;
				this.y += this.speedY;
				this.life--;

				// Wrap around screen
				if (this.x > canvas.width) this.x = 0;
				if (this.x < 0) this.x = canvas.width;
				if (this.y > canvas.height) this.y = 0;
				if (this.y < 0) this.y = canvas.height;

				// Reset particle when life ends
				if (this.life <= 0) {
					this.x = Math.random() * canvas.width;
					this.y = Math.random() * canvas.height;
					this.life = this.maxLife;
				}
			}

			draw() {
				ctx.save();
				ctx.globalAlpha = this.life / this.maxLife;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fillStyle = this.color;
				ctx.fill();

				// Add glow effect
				ctx.shadowBlur = 10;
				ctx.shadowColor = this.color;
				ctx.fill();
				ctx.restore();
			}
		}

		// Create particles
		const particles = [];
		for (let i = 0; i < 120; i++) {
			particles.push(new Particle());
		}

		// Mouse interaction
		let mouse = { x: 0, y: 0 };
		const handleMouseMove = (e) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		window.addEventListener("mousemove", handleMouseMove);

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw connections between nearby particles
			particles.forEach((particle, i) => {
				particles.slice(i + 1).forEach((otherParticle) => {
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 100) {
						ctx.save();
						ctx.globalAlpha = ((100 - distance) / 100) * 0.3;
						ctx.strokeStyle = "#10b981";
						ctx.lineWidth = 1;
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(otherParticle.x, otherParticle.y);
						ctx.stroke();
						ctx.restore();
					}
				});

				// Mouse interaction
				const mouseDistance = Math.sqrt(
					(mouse.x - particle.x) ** 2 + (mouse.y - particle.y) ** 2
				);
				if (mouseDistance < 150) {
					ctx.save();
					ctx.globalAlpha = ((150 - mouseDistance) / 150) * 0.5;
					ctx.strokeStyle = "#3b82f6";
					ctx.lineWidth = 2;
					ctx.beginPath();
					ctx.moveTo(particle.x, particle.y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.stroke();
					ctx.restore();
				}

				particle.update();
				particle.draw();
			});

			animationFrameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={
				className || "fixed top-0 left-0 w-full h-full pointer-events-none z-0"
			}
			style={{ opacity: 0.35 }}
		/>
	);
};

export default ParticleSystem;
