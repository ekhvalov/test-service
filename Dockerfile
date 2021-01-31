FROM nginx:1.19.6-alpine

COPY index.js /index.js

CMD ["node", "/index.js"]
