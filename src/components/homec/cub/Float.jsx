import React from 'react'
import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import "./Float.css"
function Float() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
    const rotate = Math.sin(t / 9000) * 25;
    const y = (1 + Math.sin(t / 1000)) * 15;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });
    return (
        <div className="holder">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
        </div>
    )
}

export default Float