import "server-only";
import { db } from "~/server/db";

export async function getRecipes(){

    const recipes = await db.query.recipe.findMany();
    return recipes;
}