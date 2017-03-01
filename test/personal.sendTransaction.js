var testMethod = require('./helpers/test.method.js');

var method = 'sendTransaction';


var tests = [{
    args: [{
        from: '0xdbdbdB2cBD23b783741e8d7fcF51e459b497e4a6', // checksum address
        to: '0xdbdbdB2cBD23b783741e8d7fcF51e459b497e4a6', // checksum address
        value: '1234567654321'
    }, 'SomePass@Word!'],
    formattedArgs: [{
        from: "0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6",
        to: "0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6",
        value: "0x11f71f76bb1"
    }, 'SomePass@Word!'],
    result: ['0x12345678976543213456786543212345675432'],
    formattedResult: ['0x12345678976543213456786543212345675432'],
    call: 'personal_'+ method
},{
    args: [{
        from: '0XDBDBDB2CBD23B783741E8D7FCF51E459B497E4A6',
        to: '0XDBDBDB2CBD23B783741E8D7FCF51E459B497E4A6',
        value: '1234567654321',
        data: '0x213453ffffff'
    }, 'SomePass@Word!'],
    formattedArgs: [{
        from: "0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6",
        to: "0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6",
        value: "0x11f71f76bb1",
        data: '0x213453ffffff'
    }, 'SomePass@Word!'],
    result: ['0x12345678976543213456786543212345675432'],
    formattedResult: ['0x12345678976543213456786543212345675432'],
    call: 'personal_'+ method
},{
    args: [{
        from: 'XE7338O073KYGTWWZN0F2WZ0R8PX5ZPPZS', // iban address
        to: '0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6',
        value: '1234567654321'
    }, 'SomePass@Word!'],
    formattedArgs: [{
        from: "0x00c5496aee77c1ba1f0854206a26dda82a81d6d8",
        to: "0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6",
        value: "0x11f71f76bb1"
    }, 'SomePass@Word!'],
    result: ['0x12345678976543213456786543212345675432'],
    formattedResult: ['0x12345678976543213456786543212345675432'],
    call: 'personal_'+ method
},{
    error: true, // only for testing
    args: [{
        from: 'XE81ETHXREGGAVOFYORK', // iban address
        to: '0xdbdbdb2cbd23b783741e8d7fcf51e459b497e4a6',
        value: '1234567654321'
    }, 'SomePass@Word!'],
    call: 'personal_'+ method
}];

testMethod.runTests('personal', method, tests);
