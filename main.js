import { app, BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'

let mainWindow

// TODO remove in production
require('electron-reload')(__dirname)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('ready', () => {
	// Load the previous state with fallback to defaults
	let mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800,
	})

	// Create the window using the state information
	mainWindow = new BrowserWindow({
		'x': mainWindowState.x,
		'y': mainWindowState.y,
		'width': mainWindowState.width,
		'height': mainWindowState.height,
	})

	// Let us register listeners on the window, so we can update the state
	// automatically (the listeners will be removed when the window is closed)
	// and restore the maximized or full screen state
	mainWindowState.manage(mainWindow)

	mainWindow.loadURL('file://' + __dirname + '/index.html')
	mainWindow.on('closed', () => {
		mainWindow = null
	})
})
