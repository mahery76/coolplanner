npx prisma migrate dev --name init 
npm run vercel-build

npx prisma db push
npx prisma studio