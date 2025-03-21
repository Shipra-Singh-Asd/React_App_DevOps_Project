# Use Node.js for building the app
FROM node:22.11.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
COPY . .
RUN pnpm run build


# Use Nginx to serve the built React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
