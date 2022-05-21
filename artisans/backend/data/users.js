import bcrypt from 'bcryptjs'
const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'Hemanth Mali',
        email:'hemanth@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Shanti Sree',
        email:'shanti@example.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Surya Rapo',
        email:'surya@example.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export default users