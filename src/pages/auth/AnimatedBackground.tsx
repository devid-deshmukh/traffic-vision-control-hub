
import React, { useRef, useEffect } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Node class for cyber network visualization
    class Node {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      glowIntensity: number;
      glowDirection: boolean;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.glowIntensity = Math.random() * 0.5;
        this.glowDirection = Math.random() > 0.5;
        
        // Cyberpunk colors - blues and purples with low opacity
        const hue = 220 + Math.random() * 60; // Range from blue to purple
        const saturation = 70 + Math.random() * 30;
        const lightness = 20 + Math.random() * 20; // Darker, but still visible
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${0.2 + Math.random() * 0.3})`;
      }

      update() {
        // Pulsate glow effect
        if (this.glowDirection) {
          this.glowIntensity += 0.005;
          if (this.glowIntensity > 0.8) this.glowDirection = false;
        } else {
          this.glowIntensity -= 0.005;
          if (this.glowIntensity < 0.3) this.glowDirection = true;
        }

        // Move nodes
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Draw node with glow effect
        ctx.save();
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15 * this.glowIntensity;
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const nodeArray: Node[] = [];
    // Adjust number of nodes for different screen sizes
    const nodeCount = Math.min(60, Math.max(20, window.innerWidth / 35));

    for (let i = 0; i < nodeCount; i++) {
      nodeArray.push(new Node());
    }

    // Function to connect nodes with gradient lines
    function connectNodes() {
      if (!ctx) return;
      const maxDistance = 180; // Max distance for connections
      
      // Draw connections
      for (let a = 0; a < nodeArray.length; a++) {
        for (let b = a; b < nodeArray.length; b++) {
          const dx = nodeArray[a].x - nodeArray[b].x;
          const dy = nodeArray[a].y - nodeArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Create gradient line between nodes
            const gradient = ctx.createLinearGradient(
              nodeArray[a].x, nodeArray[a].y, 
              nodeArray[b].x, nodeArray[b].y
            );
            
            // Extract colors from the nodes for the gradient
            gradient.addColorStop(0, nodeArray[a].color.replace(/[^,]+(?=\))/, "0.2"));
            gradient.addColorStop(1, nodeArray[b].color.replace(/[^,]+(?=\))/, "0.2"));
            
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 1.5;
            ctx.beginPath();
            ctx.moveTo(nodeArray[a].x, nodeArray[a].y);
            ctx.lineTo(nodeArray[b].x, nodeArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark background with subtle gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      bgGradient.addColorStop(0, "rgba(10, 12, 23, 0.97)");
      bgGradient.addColorStop(0.5, "rgba(15, 15, 30, 0.98)");
      bgGradient.addColorStop(1, "rgba(5, 8, 20, 0.99)");
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw a subtle grid pattern
      ctx.strokeStyle = "rgba(30, 50, 100, 0.1)";
      ctx.lineWidth = 0.3;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw nodes
      connectNodes();
      for (let i = 0; i < nodeArray.length; i++) {
        nodeArray[i].update();
        nodeArray[i].draw();
      }
      
      requestAnimationFrame(animate);
    }

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reset node positions within new canvas dimensions
      nodeArray.forEach(node => {
        if (node.x > canvas.width) node.x = canvas.width * Math.random();
        if (node.y > canvas.height) node.y = canvas.height * Math.random();
      });
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;
