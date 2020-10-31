const Ajv = require('ajv');

const schema = {
    type: 'string',
    minLength: 10
}

const data = 'should NOT be shorter than 10 characters'


const ajv = new Ajv();

const validate = ajv.compile(schema)
const valid = validate(data)
if(!valid){
    console.log(validate.errors);
}