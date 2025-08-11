# AudioSight - Coolify Static Pack Deployment

This project is configured for deployment using Coolify's static pack feature. The setup includes a React + Vite application with custom Nginx configuration optimized for production.

## 🚀 Quick Deployment with Coolify

### Prerequisites
- Coolify instance running
- Git repository access
- Domain name (optional)

### Deployment Steps

1. **Create New Application in Coolify**
   - Go to your Coolify dashboard
   - Click "New Application"
   - Choose "Static Pack" as the deployment type

2. **Configure Source**
   - Connect your Git repository
   - Set branch to `main` (or your preferred branch)

3. **Build Configuration**
   - Build Command: `npm run build`
   - Build Directory: `dist`
   - Port: `80`

4. **Environment Variables** (if needed)
   - `NODE_ENV=production`

5. **Deploy**
   - Click "Deploy" and wait for the build to complete

## 📁 Project Structure

```
project/
├── src/                    # React source code
├── public/                 # Public assets
├── dist/                   # Build output (generated)
├── nginx.conf             # Custom Nginx configuration
├── Dockerfile             # Multi-stage Docker build
├── .coolify               # Coolify configuration
├── docker-compose.yml     # Local testing
├── .dockerignore          # Docker ignore rules
└── DEPLOYMENT.md          # This file
```

## 🔧 Configuration Files

### nginx.conf
Custom Nginx configuration with:
- Gzip compression
- Security headers
- Static asset caching (1 year)
- HTML no-cache policy
- SPA routing support
- Health check endpoint

### Dockerfile
Multi-stage build:
1. **Build stage**: Node.js 18 Alpine, npm install, build
2. **Production stage**: Nginx Alpine, copy build files, custom config

### .coolify
Coolify-specific configuration:
- Build command and path
- Static pack enabled
- Port configuration

## 🌐 Custom Nginx Features

- **Compression**: Gzip enabled for text files and assets
- **Caching**: Long-term caching for static assets, no cache for HTML
- **Security**: Security headers included
- **SPA Support**: Proper routing for single-page application
- **Health Check**: `/health` endpoint for monitoring

## 🧪 Local Testing

Test the production build locally:

```bash
# Build and run with Docker
docker-compose up --build

# Or build and serve manually
npm run build
npx serve dist
```

Access at `http://localhost:3000`

## 🔍 Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check build logs in Coolify dashboard
- Verify Node.js version compatibility

### Runtime Issues
- Check Nginx error logs
- Verify static assets are copying correctly
- Test health endpoint: `/health`

### Asset Loading Issues
- Ensure `base: './'` is set in `vite.config.ts`
- Check asset paths in built files
- Verify Nginx is serving static files correctly

### MIME Type Issues (JavaScript Module Loading)
If you see "Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'application/octet-stream'":

1. **Check MIME type response**:
   ```bash
   curl -I http://your-domain/assets/main.js
   ```
   Should return: `Content-Type: text/javascript`

2. **Verify custom mime.types is being used**:
   - The project includes a custom `mime.types` file
   - Dockerfile copies it to `/etc/nginx/mime.types`
   - Nginx config includes this file

3. **Quick fix**: Add this to your nginx.conf if still having issues:
   ```nginx
   location ~* \.js$ {
       add_header Content-Type "text/javascript" always;
   }
   ```

## 📊 Performance Optimizations

- **Gzip compression** reduces transfer size
- **Asset caching** improves repeat visit performance
- **Optimized build** with Vite's production settings
- **Multi-stage Docker** reduces final image size

## 🔒 Security Features

- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: enabled
- X-Content-Type-Options: nosniff
- Content Security Policy: configured
- Referrer Policy: no-referrer-when-downgrade

## 📝 Notes

- The application is a React SPA (Single Page Application)
- All routing is handled client-side
- Static assets include logos and images
- Health check available at `/health`
- Designed for mobile-responsive experience

## 🆘 Support

For deployment issues:
1. Check Coolify logs
2. Verify configuration files
3. Test locally with Docker
4. Check network connectivity
5. Review Nginx error logs
