import { PrismaClient } from '@prisma/client';
import { generateRandomFloatNumber } from '../src/utilities/generateNumber.utility';
const prisma = new PrismaClient();
async function main() {
  const alphaGroup = await prisma.group.upsert({
    where: { id: 1 },
    update: { name: 'alpha' },
    create: {
      name: 'alpha',
      sensors: {
        create: {
          codename: `alpha 1`,
          DOR: 5,
          coordinates: {
            create: {
              x_coord: generateRandomFloatNumber(),
              y_coord: generateRandomFloatNumber(),
              z_coord: generateRandomFloatNumber(),
            },
          },
        },
      },
    },
  });

  const betaGroup = await prisma.group.upsert({
    where: { id: 2 },
    update: { name: 'beta' },
    create: {
      name: 'beta',
      sensors: {
        create: {
          codename: `beta 1`,
          DOR: 8,
          coordinates: {
            create: {
              x_coord: generateRandomFloatNumber(),
              y_coord: generateRandomFloatNumber(),
              z_coord: generateRandomFloatNumber(),
            },
          },
        },
      },
    },
  });

  const gammaGroup = await prisma.group.upsert({
    where: { id: 3 },
    update: { name: 'gamma' },
    create: {
      name: 'gamma',
      sensors: {
        create: {
          codename: `gamma 1`,
          DOR: 2,
          coordinates: {
            create: {
              x_coord: generateRandomFloatNumber(),
              y_coord: generateRandomFloatNumber(),
              z_coord: generateRandomFloatNumber(),
            },
          },
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
