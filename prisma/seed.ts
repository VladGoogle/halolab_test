import { PrismaClient } from '@prisma/client';
import { generateRandomFloatNumber } from '../src/utilities/generateNumber.utility';
const prisma = new PrismaClient();
async function main() {
  const alphaGroup = prisma.group.upsert({
    where: { name: 'alpha' },
    update: { name: 'alpha' },
    create: {
      name: 'alpha',
      sensors: {
        create: {
          codename: `alpha 1`,
          DOR: 12,
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

  const betaGroup = prisma.group.upsert({
    where: { name: 'beta' },
    update: { name: 'beta' },
    create: {
      name: 'beta',
      sensors: {
        create: {
          codename: `beta 1`,
          DOR: 15,
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

  const gammaGroup = prisma.group.upsert({
    where: { name: 'gamma' },
    update: { name: 'gamma' },
    create: {
      name: 'gamma',
      sensors: {
        create: {
          codename: `gamma 1`,
          DOR: 20,
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
  await Promise.all([alphaGroup, betaGroup, gammaGroup]);
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
