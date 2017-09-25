import { app, BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'
import path from 'path'
import isDev from 'electron-is-dev'

// TODO switch to https://github.com/electron/electron-compile
if (isDev) {
	require('electron-debug')({showDevTools: true})
	require('electron-reload')(__dirname, {
		electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
	})
}

app.on('ready', () => {
	let mainWindow = null
	let loading = new BrowserWindow({
		width: 300,
		height: 200,
		show: false,
		frame: false,
	})

	// Load the previous state with fallback to defaults
	let mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800,
	})

	loading.once('show', () => {

		// Create the window using the state information
		mainWindow = new BrowserWindow({
			'x': mainWindowState.x,
			'y': mainWindowState.y,
			'width': mainWindowState.width,
			'height': mainWindowState.height,
			'show': false,
		})

		// Let us register listeners on the window, so we can update the state
		// automatically (the listeners will be removed when the window is closed)
		// and restore the maximized or full screen state
		mainWindowState.manage(mainWindow)

		mainWindow.webContents.once('dom-ready', () => {
			mainWindow.show()
			loading.hide()
			loading.close()
		})

		mainWindow.loadURL(`file://${__dirname}/index.html`)
	})

	loading.loadURL(`file://${__dirname}/loading.html`)
	loading.show()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
})
