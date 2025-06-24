// #whXxOBIYSON
// - взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повині бути списком під час відображення .

const recipesDiv = document.getElementById('recipes');
fetch('https://dummyjson.com/recipes')
    .then(value => value.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;
        console.log(recipes);
        for (const recip of recipes) {
            const div = document.createElement('div');
            div.classList.add('recipe-container');
            const divWithInfo = document.createElement('div');
            divWithInfo.innerText = `
                    "id": ${recip.id},
                    "name": ${recip.name},
                    "servings": ${recip.servings}
                    "caloriesPerServing": ${recip.caloriesPerServing},
                    "cuisine": ${recip.cuisine},
                    "difficulty": ${recip.difficulty},
                `;

            const ol = document.createElement('ol');
            for (const ingredient of recip.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ol.appendChild(li);
            }
            const img = document.createElement('img');
            img.src = recip.image;

            div.append(divWithInfo, ol, img);
            recipesDiv.appendChild(div);
        }
    });