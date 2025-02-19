# Use official Node.js image as base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies first (for caching)
COPY react-components .
RUN npm install

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
