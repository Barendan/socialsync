import React, { Component } from 'react';
import { TimelineMax } from 'gsap';

class Timeline extends Component {
	state = {
		instance: null,
		timeline: null
	}

	componentWillMount() {
		this.setState({
			timeline: new TimelineMax({
				paused: !0
			})
		})
	}

	get() {
		return console.log("heyho")
	}

	add = (i,e) => {
		this.timeline.add(i,e)
	}

	duration = () => {
		return this.timeline.duration()
	}

	render() {
		return (
			Timeline.instance || (Timeline.instance = new Timeline)
		)
	}
}

export default Timeline;