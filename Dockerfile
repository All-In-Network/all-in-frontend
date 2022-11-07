FROM node:16-alpine as builder

ENV NODE_ENV production

# Adds a work directory
WORKDIR /app

# Cache and install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Copy app files
COPY . .

RUN yarn build

# Bundle static assets with nginx
FROM nginx:alpine as production

ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
