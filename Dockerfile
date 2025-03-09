# Use Node.js 16 as the base image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run build
RUN npm run build

# Debugging step: List the contents of the directory
RUN ls -al /app

# Use a smaller Node.js image for running the app
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the build folder from the previous stage
COPY --from=build /app/build /app

# Expose the port on which the app will run
EXPOSE 3000

# Define the command to serve the built application
CMD ["serve", "-s", ".", "-l", "3000"]
