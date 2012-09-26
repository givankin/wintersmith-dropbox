var wintersmith = require('wintersmith'),
    fs = require('fs'),
    baseDir = './myblog'

fs.readFile(baseDir + '/config.json', 'utf8', function(err, config) {
    if (err) throw err

    config = JSON.parse(config)

    var opts = {
        output: './output',
        contents:  baseDir + '/contents',
        templates: baseDir + '/templates',
        locals: config.locals
    }

    wintersmith(opts, function(err) {
        if (err) throw err
        console.log('great success!')
    })
})



