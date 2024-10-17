// src/components/ParticlesBackground.js
import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#0d47a1", // Background color
          },
        },
        particles: {
          number: {
            value: 150, // Increased number of particles for a fuller look
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: ["circle", "edge", "triangle"], // Multiple shapes for variety
            stroke: {
              width: 0,
              color: "#ffffff",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.6, // Slightly increased opacity
            random: true, // Random opacity for more depth
            anim: {
              enable: true, // Enable animation for dynamic appearance
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 4, // Increased base size
            random: true,
            anim: {
              enable: true, // Enable size animation
              speed: 10,
              size_min: 1,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 3, // Slower movement for a smoother appearance
            direction: "none",
            random: true, // Random movement for more life
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              enable: false,
              mode: [],
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 60, // Increased bubble size
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
