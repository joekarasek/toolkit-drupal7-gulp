# Gulp for Drupal 7
#### By _**Joe Karasek**, 4/27/16_

### Description

_A gulp build to help with drupal 7 development._

_Launches the site through browserSync, site reloads to stay synced with latest changes to custom modules._

_**Please star this repo if you find it useful, thanks.**_

### Required

- [Drush](https://github.com/drush-ops/drush)
- [Gulp](http://gulpjs.com/)
- [Node](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Setup

1. Copy and place the `gulpfile.js`, `gulpconfig.json`, `package.json`, and `.gitignore` files in the `./sites` directory of your drupal 7 project.
2. From `./sites`, run `npm install`.
3. Update `gulpconfig.json` if needed.
  - Change or add any files paths you want to watch for changes that will trigger a cache clear and reload.
  - Set the port of the proxyUrl. This is currently set to localhost:8888 to match the Drupal 7 setup instructions from [Learn How to Program](https://www.learnhowtoprogram.com/) and [Team Treehouse](https://teamtreehouse.com/home).

### Launching gulp (starting the watch)

1. Navigate to the `./sites` directory of your project
2. Run the command `gulp`

**Note**: Your drupal site needs to be up and running for this to work (for Epicodus students, this means MAMP is pointed at your project and running the Apache and MySql servers).

### Questions

If you have any questions, suggestions, or comments, feel free to get a hold of me at `joseph.karasek@gmail.com`. Or make a pull request!

### License

MIT 2016, Joe Karasek
