//import conn from '../../../lib/db'
//import db, {sql} from '@databases/pg'

//const { PrismaClient } = require('@prisma/client')
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

import type { NextApiRequest, NextApiResponse } from 'next'
export default async (req:NextApiRequest, res:NextApiResponse) => {
    try {

        console.log("req nom", req.body)

        const getposts =async function () {
           const post_content =  [req.body.content];
            // ... you will write your Prisma Client queries here
            const allposts = await prisma.new_post.findMany({});
            res.status(200).send({value : allposts});
          }
          
          getposts()
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