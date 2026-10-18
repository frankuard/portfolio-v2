import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGODB_URI

if (!uri) {
  console.log('MONGODB_URI is EMPTY (no .env found, or the line is missing)')
} else {
  // hides the password
  console.log(uri.replace(/\/\/([^:]+):[^@]*@/, '//$1:****@'))
}