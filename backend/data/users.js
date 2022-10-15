import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Emon Hossain',
        email: 'emon@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Tuli Akter',
        email: 'tuli@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users;