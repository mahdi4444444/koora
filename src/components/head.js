import { useEffect } from "react";
import gsap from 'gsap';

import "./stylo.css";

function Head() {

    useEffect(()=>{
		const open = document.querySelector('.container');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});
		console.log("dotaro");
    },[])
  return (
    <div className="navbar">
	<div className="container">
		<div className="bars"></div>
	</div>

	<h1>KOORA</h1>
	<nav>
		<h2>LOGO MTA3 SITE</h2>
		<div className="close">
			<div></div>
		</div>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Projects</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>
	

    </div>
  );
}

export default Head;
