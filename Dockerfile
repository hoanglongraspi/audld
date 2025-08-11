# Build stage
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production --silent

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx configuration and mime types
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY mime.types /etc/nginx/mime.types

# Copy built application from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy static assets (images, logos, etc.)
COPY --from=build /app/audiosight-square.jpg /usr/share/nginx/html/
COPY --from=build /app/logo_dark.png /usr/share/nginx/html/
COPY --from=build /app/logo_light.png /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
