FROM node

WORKDIR /dock

COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

CMD ["npm", "start"]

#--------------------------------

# From node

# WORKDIR / dock

# COPY package*.json .                      # include all files with the name package by => *
# COPY . .                                  # . . => include all the files & folder
# RUN npm install                           # first . => currnet directory of host
# second . => conatainer/image k andr  current WORKDIR me copy krta h
# CMD ["npm", "start"]