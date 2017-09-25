'use babel'

import React from 'react'
import { Button, Icon, Row, Col } from 'react-materialize'
import si from 'systeminformation'
import _ from 'lodash'

import Menu from './menu'

/*
* Use this doc to edit the view:
* https://react-materialize.github.io/#/
*/
export default class Main extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentCPULoad: '',
			currentCPUTemperature: '',
			secondsElapsed: 0,
		}
	}

	tick() {
		this.setState({secondsElapsed: this.state.secondsElapsed + 1})

		si.currentLoad()
				.then(data => {
					this.setState({currentCPULoad: _.round(data.currentload, 2)})
				})
				.catch(error => con.error(error))

		si.cpuTemperature()
				.then(data => {
					// NOTE maybe needs UAC/Admin privileges on windows to work
					// con.log(`CPU TEMP: ${data}`)
				})
				.catch(error => con.error(error))
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		return <div>
			<Row>
				<Col s={4} className="side-menu">
					<Menu />
				</Col>
				<Col s={8} className="detail">
					<Button waves='light'>{this.state.currentCPULoad}<Icon left>save</Icon></Button>
					<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
					<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
				</Col>
			</Row>
		</div>
	}
}
