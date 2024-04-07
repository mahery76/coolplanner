import { Pool } from "pg"


export const pool = new Pool({
    // connectionString: "postgres://ejeryemploidb_user:mPopMVq6Vz84JJhchNoAfK7WRdaCiabt@dpg-cmee89v109ks73c4hteg-a.oregon-postgres.render.com/ejeryemploidb?sslmode=require"
    connectionString: process.env.DATABASE_URL
})


