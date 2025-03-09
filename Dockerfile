# Use the official Node.js image as the base image
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .



#build the react app
RUN npm run build

#use a lightweight node.js runtime for serving the app
FROM node:14-slim

# Set the working directory
WORKDIR /app

#copy only the built files form the previous stage
COPY --from=build /app/build /app

#install server globally to serve the application
RUN npm install -g serve



# Expose the port on which the app will run
EXPOSE 3000

# Define the command to run the application
CMD ["serve", "-s", "/app", "-p", "3000"]