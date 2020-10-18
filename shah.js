mongoose.connect(config.database);
//console.log(config.secret); just using dataTypes from cingfig/database 's file
mongoose.connection.on('connected' ,()=>{
    console.log("connectd to " + config.database);
});
