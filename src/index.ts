import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UpdatePara {
    firstname : string,
    lastname: string
}

async function updateUser(email : string , {firstname ,lastname}:UpdatePara) {
    const res = await prisma.user.update({
        where : {email : email},
        data:{
            firstname,
            lastname
        },
        select:{
            id:true,
            email:true,
            firstname:true
        }
    })
    console.log(res);
}

updateUser('zeusinfin@gmail.com',{firstname:'zeus',lastname:'infin'})