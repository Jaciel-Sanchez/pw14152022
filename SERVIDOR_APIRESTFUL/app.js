let express=require('express');
let mysql=require('mysql');

let app=express();
//Parametros de conexion
let conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'pw'
});

//Conectarnos a la base de datos
conexion.connect(function(error){
    if(error){
        throw error
    }else{
    console.log('Conectado a la BD')
    }
});

app.get('/',function(req,res){
    res.send('Ruta de inicio del servidor')
})

//Todos los articulos
app.get('/api/articulos',function(req,res){
    conexion.query("SELECT * FROM articulos",function(error,filas){
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Solo un articulo
app.get('/api/articulos/:id',function(req,res){
    conexion.query("SELECT * FROM articulos where id=?",[req.params.id],function(error,fila){
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})


app.listen('3000',function(){
    console.log("Servidor en linea")
})

