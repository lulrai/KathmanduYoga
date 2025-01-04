#!/bin/bash

# Define variables
IMAGE_NAME="yoga-frontend"
CONTAINER_NAME="yoga-frontend-container"
HOST_PORT=3000
CONTAINER_PORT=80

# Build the Docker image
echo "Building the Docker image..."
docker build -t $IMAGE_NAME .

# Stop and remove any existing container with the same name
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  echo "Stopping and removing existing container..."
  docker stop $CONTAINER_NAME
  docker rm $CONTAINER_NAME
fi

# Run the Docker container
echo "Running the Docker container..."
docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME

# Display success message and container info
echo "Docker container is running."
echo "Visit http://localhost:$HOST_PORT to view your application."