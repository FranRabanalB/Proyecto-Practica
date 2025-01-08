const {app,BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width:1500,
        height:800,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(createWindow)