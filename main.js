const { app, BrowserWindow } = require('electron')
const path = require('path')
// const { dialog } = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        show: true,
        backgroundColor: '#2e2c29',
        center: true,
        resizable: true,
        fullscreen: true,
        icon: "./build/icon.ico",
        titleBarStyle: 'hidden', // fullscreen - titlebar
        webPreferences: {
            devTools: false,
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })
    
    win.maximize()
    win.show()
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })
