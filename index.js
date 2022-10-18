





function devuelveErrorPer(){

const logger = require('./logger')

return logger.error('This a personalized messagge error');

}


//const logger = require('./logger')
//logger.error('This a personalized messagge error');

try {

    devuelveErrorPer()
    console.log('error guardado correctamente ')

} catch (error) {

    console.log(error)
    console.log('falla al guaradar el error ')
}







