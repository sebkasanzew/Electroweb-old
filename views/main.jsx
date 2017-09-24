'use babel'

import React from 'react'
import { Button, Icon, Row, Col } from 'react-materialize'

import Menu from './menu'

/*
* Use this doc to edit the view:
* https://react-materialize.github.io/#/
*/
export default class Main extends React.Component {
	render() {
		return <div>
			<Row>
				<Col s={4} className="side-menu">
					<Menu />
				</Col>
				<Col s={8} className="detail">
					<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
					<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
					<Button waves='light'>EDIT ME<Icon left>save</Icon></Button>
				</Col>
			</Row>
		</div>
	}
}
