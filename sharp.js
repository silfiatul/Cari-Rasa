// eslint-disable-next-line import/no-extraneous-dependencies
import sharp from 'sharp';
import { existsSync, mkdirSync, readdirSync } from 'fs';
import { resolve } from 'path';

const target = resolve(__dirname, 'src/public/images/heros');
const destination = resolve(__dirname, 'dist/images/heros');

if (!existsSync(destination)) {
  mkdirSync(destination);
}

readdirSync(target)
  .forEach((image) => {
    if (image.includes('hero-image_4.1')) {
      // convert hero image lebar 1200px
      sharp(`${target}/${image}`)
        .resize(1200)
        .toFile(
          resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-1200.jpg`,
          ),
        );

      // convert hero image lebar 1000px
      sharp(`${target}/${image}`)
        .resize(1000)
        .toFile(
          resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-1000.jpg`,
          ),
        );

      // convert hero image lebar 600px
      sharp(`${target}/${image}`)
        .resize(600)
        .toFile(
          resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-600.jpg`,
          ),
        );
    } else {
      // convert loading image lebar 400px
      sharp(`${target}/${image}`)
        .resize(400)
        .toFile(
          resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-400.jpg`,
          ),
        );

      // convert loading image lebar 300px
      sharp(`${target}/${image}`)
        .resize(300)
        .toFile(
          resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-300.jpg`,
          ),
        );

      // convert loading image lebar 200px
      sharp(`${target}/${image}`)
        .resize(200)
        .toFile(
          resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-200.jpg`,
          ),
        );
    }
  });
