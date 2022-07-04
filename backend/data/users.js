import bcrypt from "bcrypt"

const users = [
  {
    name: "admin02",
    email: "admin02@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true
  },
  {
    name: "user01",
    email: "user01@user.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false
  }
]

export default users;