import React from 'react'
import "./Projectsport.css"
import { useRef } from "react";
import { useInView } from "framer-motion";
import speedy from "../../../assets/speedy.jpg"
import store from "../../../assets/store.jpg"
import calc from "../../../assets/calc.jpg"
import cpita from "../../../assets/cpita.jpg"
import gen from "../../../assets/gen.jpg" 
import counter from "../../../assets/counter.jpg"
import leon from "../../../assets/leon.jpg"
import pizza from "../../../assets/pizza.jpg"
import wavy from "../../../assets/wavy.jpg"
import {HiCursorClick} from "react-icons/Hi"

import loading from "../../../assets/loading.gif"

function Projectsport() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
return (
    <>
	{/* TOP 3 projects */}
	<section ref={ ref}>
    <h2 className='proj-title'>Top 3 projects</h2>
    <div className='proj-container'
	style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
    }}>

    <div className="proj-card">
			<img src={store} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">storfy</h1>
				<p className="proj-p">
				It is a website for selling laptops. It contains a page to display products, a page for contact, and a cart for displaying purchases and the electronic payment system
				</p>
				<a target='_blank' className='proj-a' href="https://storfy.netlify.app/">view project<HiCursorClick/></a>
			</div>
		</div>

		<div className="proj-card">
			<img src={speedy} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">speedy</h1>
				<p className="proj-p">
				It is a website for teaching and testing Touch Typing. The site contains an educational section in both Arabic and English, and a test section that contains two tests, the classic speed test and a special test for Speedy website users only.
				</p>
				<a target='_blank' className='proj-a' href="https://m-kordi.github.io/Speedy/">view project<HiCursorClick/></a>
			</div>
		</div>

		<div className="proj-card">
			<img src={calc} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">budget tracker</h1>
				<p className="proj-p">
				It is a webapp that tracks your spending, offering four services: creating, reading, updating and deleting expenses
				</p>
				<a target='_blank' className='proj-a' href="https://crud-app-beta.netlify.app/">view project<HiCursorClick/></a>
			</div>
		</div>

    </div>

	{/* Interview Tasks */}
	<h2 className='proj-title'>Interview Tasks</h2>
    <div className='proj-container' 
	style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
    }}>

<div className="proj-card">
			<img src={gen} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">serial number generator</h1>
				<p className="proj-p">
				This task generates a serial number, the user controls:code uppercase, lowercase, numbers, and speacial charcters
				</p>
				<a target='_blank' className='proj-a' href="https://m-kordi.github.io/serial-number-generator/">view task<HiCursorClick/></a>
			</div>
		</div>

		<div className="proj-card">
			<img src={cpita} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">array letter capitalizer</h1>
				<p className="proj-p">
				This task modifies the shape of the array that contains a large number of names, as it changes the writing of each name to the correct form with the click of a button.
				</p>
				<a target='_blank' className='proj-a' href="https://m-kordi.github.io/First_Letter_Capitalizer/">view task<HiCursorClick/></a>
			</div>
		</div>

		<div className="proj-card">
			<img src={counter} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">letter counter</h1>
				<p className="proj-p">
				This task counts down the number of written characters, and when the limit is over, the user is prevented from writing
				</p>
				<a target='_blank' className='proj-a' href="https://m-kordi.github.io/letter-counter/">view task<HiCursorClick/></a>
			</div>
		</div>

    </div>

	{/* Random projects */}
	<h2 className='proj-title'>Random Projects</h2>
    <div className='proj-container'
	style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
    }}>

<div className="proj-card">
			<img src={pizza} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">pizza delivery</h1>
				<p className="proj-p">
				It is a simple pizza ordering site, offering different types of pizza with the ability to take orders online
				</p>
				<a target='_blank' className='proj-a' href="https://restaurant-p.netlify.app/">view project<HiCursorClick/></a>
			</div>
		</div>

		<div className="proj-card">
			<img src={wavy} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">wavy backgroun</h1>
				<p className="proj-p">
				Made using CSS only, the background is behind the scope of the design so that it can be added to any project without design problems
				</p>
				<a target='_blank' className='proj-a' href="https://m-kordi.github.io/wavy-background/">view project<HiCursorClick/></a>
			</div>
		</div>

		<div className="proj-card">
			<img src={leon} loading='lazy' alt={loading} />
			<div className="proj-intro">
				<h1 className="proj-h1">leon template</h1>
				<p className="proj-p">
				It's a popular online template that I redesigned from scratch with my own code
				</p>
				<a target='_blank' className='proj-a' href="https://m-kordi.github.io/Leon_Template/">view project<HiCursorClick/></a>
			</div>
		</div>

    </div>
	</section>
    </>
  )
}

export default Projectsport