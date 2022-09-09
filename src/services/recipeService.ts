import { Recipe } from '@prisma/client';
import prisma from '../prisma';

async function findAll(): Promise<Recipe[]> {
  return prisma.recipe.findMany();
}

async function createOrUpdate(recipe: Recipe): Promise<Recipe> {
  for (const label of recipe?.labels) {
    const _label = label.toLowerCase();

    try {
      await prisma.label.upsert({
        where: {
          name: _label,
        },
        update: {},
        create: {
          name: _label,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return prisma.recipe.upsert({
    where: {
      title: recipe.title,
    },
    update: {
      comments: recipe.comments,
      description: recipe.description,
      title: recipe.title,
      images: recipe.images,
      labels: recipe.labels,
      cookingTime: recipe.cookingTime,
    },
    create: {
      comments: recipe.comments,
      description: recipe.description,
      title: recipe.title,
      images: recipe.images,
      labels: recipe.labels,
      cookingTime: recipe.cookingTime,
    },
  });
}

async function deleteById(id: Recipe['id']): Promise<boolean> {
  return !!(await prisma.recipe.delete({
    where: {
      id,
    },
  }));
}

export { findAll, createOrUpdate, deleteById };
