# Create image
FROM node:14

# Work directory
WORKDIR /app

# Copy package*.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining site files
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "start"]