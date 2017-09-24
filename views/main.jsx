'use babel'

import React from 'react'
import { Button, Icon } from 'react-materialize'
import si from 'systeminformation'
import cpuTemp from '../scripts/cpuTemperature'

const con = require('electron').remote.getGlobal('console')

/*
* Use this doc to edit the view:
* https://react-materialize.github.io/#/
*/
export default class Main extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		cpuTemp()
				.then(data => con.log(data))
				.catch(error => con.error(error))

		si.cpuTemperature()
				.then(data => {
					con.log(`sebhildebrandt/systeminformation`)
					con.log(data)
				})
				.catch(error => con.error(error))

		return <div>
			<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
		</div>
	}
}
