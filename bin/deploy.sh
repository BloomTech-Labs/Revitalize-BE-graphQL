# Kill all docker containers
echo -e "\e[31;3mKilling existing docker containers\e[37;3m"
docker kill $(docker ps -q)

# Remove all stopped containers, all dangling images, and all unused networks
echo -e "\e[31;3mRemoving existing docker containers and images\e[37;3m"
docker system prune -f

# Build docker images
echo -e "\e[36;1mBuilding docker images\e[37;3m"
docker-compose up -d

echo -e "\e[34;3mSpinning up docker images"

# Migrate and seed database
sleep 5 &&  echo -e "\e[33;1mMigrating data" # Delay 5 seconds the run prisma deploy, this is so the docker images can spin up
prisma deploy -e ./config/prod.env

echo -e "\e[32;3mSuccess!"
