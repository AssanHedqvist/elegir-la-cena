import { getRecipes } from "~/server/db/queries";

//Detta fixade allt
export const dynamic = "force-dynamic";


async function Recipes() {
const recipes = await getRecipes(); 

  return (
    <main className="">
      <div className ="flex flex-wrap gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className=" flex w-48 flex-col"></div>
        ))}
      </div>
      Hello (deployed in vercel)
    </main>
  );
}
