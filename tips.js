app.get(‘*’, function(req, res){
    res.sendFile(__dirname+’/public/error.html’);
    }

    

    const admin = true

app.post('/productos', () => {
    if (admin) {
        res.send({ERORORORO})
    }
})


const admin = true

app.post('/productos', () => {
    if (!admin) {
        res.send({ERORORORO})
    }
})
