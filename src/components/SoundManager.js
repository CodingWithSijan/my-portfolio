class SoundManager {
	constructor() {
		this.audioContext = null;
		this.sounds = {};
		this.isMuted = false;
		this.masterVolume = 0.3;

		// Initialize audio context on first user interaction
		this.initAudioContext();
	}

	async initAudioContext() {
		try {
			this.audioContext = new (window.AudioContext ||
				window.webkitAudioContext)();

			// Create master gain node
			this.masterGain = this.audioContext.createGain();
			this.masterGain.connect(this.audioContext.destination);
			this.masterGain.gain.value = this.masterVolume;

			// Generate sounds
			this.generateSounds();
		} catch (error) {
			console.warn("Audio context not supported:", error);
		}
	}

	generateSounds() {
		if (!this.audioContext) return;

		// Click sound
		this.sounds.click = this.createClickSound();

		// Hover sound
		this.sounds.hover = this.createHoverSound();

		// Success sound
		this.sounds.success = this.createSuccessSound();

		// Type sound
		this.sounds.type = this.createTypeSound();

		// Matrix sound
		this.sounds.matrix = this.createMatrixSound();

		// Notification sound
		this.sounds.notification = this.createNotificationSound();
	}

	createClickSound() {
		return () => {
			if (!this.audioContext || this.isMuted) return;

			const oscillator = this.audioContext.createOscillator();
			const gainNode = this.audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(this.masterGain);

			oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
			oscillator.frequency.exponentialRampToValueAtTime(
				400,
				this.audioContext.currentTime + 0.1
			);

			gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				this.audioContext.currentTime + 0.1
			);

			oscillator.start();
			oscillator.stop(this.audioContext.currentTime + 0.1);
		};
	}

	createHoverSound() {
		return () => {
			if (!this.audioContext || this.isMuted) return;

			const oscillator = this.audioContext.createOscillator();
			const gainNode = this.audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(this.masterGain);

			oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime);
			oscillator.frequency.exponentialRampToValueAtTime(
				1200,
				this.audioContext.currentTime + 0.05
			);

			gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				this.audioContext.currentTime + 0.05
			);

			oscillator.start();
			oscillator.stop(this.audioContext.currentTime + 0.05);
		};
	}

	createSuccessSound() {
		return () => {
			if (!this.audioContext || this.isMuted) return;

			const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5

			frequencies.forEach((freq, index) => {
				setTimeout(() => {
					const oscillator = this.audioContext.createOscillator();
					const gainNode = this.audioContext.createGain();

					oscillator.connect(gainNode);
					gainNode.connect(this.masterGain);

					oscillator.frequency.setValueAtTime(
						freq,
						this.audioContext.currentTime
					);

					gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
					gainNode.gain.exponentialRampToValueAtTime(
						0.01,
						this.audioContext.currentTime + 0.2
					);

					oscillator.start();
					oscillator.stop(this.audioContext.currentTime + 0.2);
				}, index * 100);
			});
		};
	}

	createTypeSound() {
		return () => {
			if (!this.audioContext || this.isMuted) return;

			const oscillator = this.audioContext.createOscillator();
			const gainNode = this.audioContext.createGain();

			oscillator.connect(gainNode);
			gainNode.connect(this.masterGain);

			oscillator.frequency.setValueAtTime(
				200 + Math.random() * 400,
				this.audioContext.currentTime
			);

			gainNode.gain.setValueAtTime(0.02, this.audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				this.audioContext.currentTime + 0.02
			);

			oscillator.start();
			oscillator.stop(this.audioContext.currentTime + 0.02);
		};
	}

	createMatrixSound() {
		return () => {
			if (!this.audioContext || this.isMuted) return;

			// Create digital rain sound effect
			const oscillator = this.audioContext.createOscillator();
			const gainNode = this.audioContext.createGain();
			const filter = this.audioContext.createBiquadFilter();

			oscillator.connect(filter);
			filter.connect(gainNode);
			gainNode.connect(this.masterGain);

			oscillator.type = "sawtooth";
			oscillator.frequency.setValueAtTime(100, this.audioContext.currentTime);
			oscillator.frequency.exponentialRampToValueAtTime(
				50,
				this.audioContext.currentTime + 2
			);

			filter.type = "lowpass";
			filter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
			filter.frequency.exponentialRampToValueAtTime(
				100,
				this.audioContext.currentTime + 2
			);

			gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				this.audioContext.currentTime + 2
			);

			oscillator.start();
			oscillator.stop(this.audioContext.currentTime + 2);
		};
	}

	createNotificationSound() {
		return () => {
			if (!this.audioContext || this.isMuted) return;

			const oscillator1 = this.audioContext.createOscillator();
			const oscillator2 = this.audioContext.createOscillator();
			const gainNode = this.audioContext.createGain();

			oscillator1.connect(gainNode);
			oscillator2.connect(gainNode);
			gainNode.connect(this.masterGain);

			oscillator1.frequency.setValueAtTime(880, this.audioContext.currentTime);
			oscillator2.frequency.setValueAtTime(1320, this.audioContext.currentTime);

			gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
			gainNode.gain.exponentialRampToValueAtTime(
				0.01,
				this.audioContext.currentTime + 0.3
			);

			oscillator1.start();
			oscillator2.start();
			oscillator1.stop(this.audioContext.currentTime + 0.3);
			oscillator2.stop(this.audioContext.currentTime + 0.3);
		};
	}

	play(soundName) {
		if (this.sounds[soundName]) {
			this.sounds[soundName]();
		}
	}

	setVolume(volume) {
		this.masterVolume = Math.max(0, Math.min(1, volume));
		if (this.masterGain) {
			this.masterGain.gain.value = this.masterVolume;
		}
	}

	mute() {
		this.isMuted = true;
	}

	unmute() {
		this.isMuted = false;
	}

	toggleMute() {
		this.isMuted = !this.isMuted;
		return this.isMuted;
	}

	// Resume audio context (required for some browsers)
	resume() {
		if (this.audioContext && this.audioContext.state === "suspended") {
			this.audioContext.resume();
		}
	}
}

// Create singleton instance
const soundManager = new SoundManager();

// Add event listeners for user interaction sounds
document.addEventListener("DOMContentLoaded", () => {
	// Resume audio context on first user interaction
	const resumeAudio = () => {
		soundManager.resume();
		document.removeEventListener("click", resumeAudio);
		document.removeEventListener("keydown", resumeAudio);
	};

	document.addEventListener("click", resumeAudio);
	document.addEventListener("keydown", resumeAudio);

	// Add click sounds to buttons
	document.addEventListener("click", (e) => {
		if (e.target.tagName === "BUTTON" || e.target.closest("button")) {
			soundManager.play("click");
		}
	});

	// Add hover sounds to interactive elements
	document.addEventListener(
		"mouseenter",
		(e) => {
			if (
				e.target.tagName === "BUTTON" ||
				e.target.closest("button") ||
				e.target.closest("a")
			) {
				soundManager.play("hover");
			}
		},
		true
	);

	// Add typing sounds to input fields
	document.addEventListener("keydown", (e) => {
		if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
			soundManager.play("type");
		}
	});
});

export default soundManager;
