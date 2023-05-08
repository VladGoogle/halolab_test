-- CreateTable
CREATE TABLE "Sensor" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "codename" TEXT NOT NULL,
    "DOR" INTEGER NOT NULL,

    CONSTRAINT "Sensor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coordinates" (
    "sensorId" INTEGER NOT NULL,
    "x_coord" DOUBLE PRECISION NOT NULL,
    "y_coord" DOUBLE PRECISION NOT NULL,
    "z_coord" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Coordinates_pkey" PRIMARY KEY ("sensorId")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SensorData" (
    "sensorId" INTEGER NOT NULL,
    "transparency" INTEGER NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SensorData_pkey" PRIMARY KEY ("sensorId")
);

-- CreateTable
CREATE TABLE "FishSpecies" (
    "sensorId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "FishSpecies_pkey" PRIMARY KEY ("sensorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coordinates_sensorId_key" ON "Coordinates"("sensorId");

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SensorData_sensorId_key" ON "SensorData"("sensorId");

-- CreateIndex
CREATE UNIQUE INDEX "FishSpecies_sensorId_key" ON "FishSpecies"("sensorId");

-- AddForeignKey
ALTER TABLE "Sensor" ADD CONSTRAINT "Sensor_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coordinates" ADD CONSTRAINT "Coordinates_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SensorData" ADD CONSTRAINT "SensorData_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "Sensor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FishSpecies" ADD CONSTRAINT "FishSpecies_sensorId_fkey" FOREIGN KEY ("sensorId") REFERENCES "SensorData"("sensorId") ON DELETE RESTRICT ON UPDATE CASCADE;
