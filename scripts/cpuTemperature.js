'use strict'

const os = require('os')
const exec = require('child_process').exec
const con = require('electron').remote.getGlobal('console')

function cpuTemp(callback) {
	let _platform = os.type()

	console.log(_platform)

	return new Promise((resolve, reject) => {
		process.nextTick(() => {
			let result = {
				main: -1.0,
				cores: [],
				max: -1.0,
			}

			exec(`wmic /namespace:\\\\root\\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature`,
					(error, stdout) => {
						if (!error) {
							let sum = 0
							let lines = stdout.trim().split(/\s\s+/)
							lines.forEach((line) => {
								if (line.match('CriticalTripPoint') && !result.max)
									result.max = (parseInt(line.split('CriticalTripPoint=')[1]) - 2732) / 10
								else if (line.match('CurrentTemperature')) {
									let value = (parseInt(line.split('CurrentTemperature=')[1]) - 2732) / 10
									sum = sum + value
									result.cores.push(value)
								}
							})
							if (result.cores.length) {
								result.main = sum / result.cores.length
							}
						} else {
							con.log(error)
						}
					})

			if (callback) {
				callback(result)
			}
			resolve(result)
		})
	})
}

export default cpuTemp
