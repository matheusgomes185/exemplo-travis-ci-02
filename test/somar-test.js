var assert = require('assert');

var somar = require('../src/somar');

describe('Iniciando os teste no arquivo somar.js', function(){
    it('Executando a soma', function(){
        assert.strictEqual(somar(5, 10), 15);
    });
});