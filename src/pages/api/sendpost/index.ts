//import conn from '../../../lib/db'
//import db, {sql} from '@databases/pg'

//const { PrismaClient } = require('@prisma/client')
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'
export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {

        console.log("req nom", req.body)

        const savepost =async function () {
           const post_content =  [req.body.content];
            // ... you will write your Prisma Client queries here
            await prisma.new_post.create({
                data: {
                  content: `${post_content}`,
                },
              })
          }
          
          savepost()
            .then(async () => {
              await prisma.$disconnect()
            })
            .catch(async (e) => {
              console.error(e)
              await prisma.$disconnect()
              console.log( "error" );
            })

        //const query = 'INSERT INTO posts.posts(content) VALUES($1)'
        //const values = [req.body.content]
      //const result = await conn.query(
       // sql` INSERT INTO posts.posts(content) VALUES (${values})`
      //);
     //console.log( "ttt",result );
  } catch ( error ) {
      console.log( error );
  }
  
  
  };