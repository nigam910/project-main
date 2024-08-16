import {Permission} from "node-appwrite"

import {db, questionCollection} from "../name"
import { databases } from "./config"
import { permission } from "process"



export default async function createQuestionCollection(){
    //create collection 
    await databases.createCollection(db, questionCollection, questionCollection, [
        permission.read("any"),
        permission.read("users"),
        permission.create("users"),
        permission.update("users"),
        permission.delete("users"),



    ])
    console.log("Question collection is created")
}