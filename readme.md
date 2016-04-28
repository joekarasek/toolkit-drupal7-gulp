# Gulp Tasks for Drupal 7 Custom Module Building
## By _**Joe Karasek**, 4/27/16_
---
### Description
_**Please star this repo if you find it useful, thanks.**_
_Tired of `drush cc all` followed by clicking browser refresh? This will automate the process so you can get back to editing code and seeing the changes right away._
_This gulp setup is meant to help with the construction of custom modules (in the Epicodus Drupal course)._

### Setup
1. Copy and place the `gulpfile.js`, `package.json`, and `.gitignore` files in the `./sites/` directory of your drupal 7 project.
2. From the same directory (`./sites/`), run `npm install`
3. To launch the watchers, run `gulp`

### Limitations/bugs
_This has not been thoroughly tested. There may be unexpected bugs. Do note that this gulp setup only watches for changes to files ending in `.module` that are located in the `./sites/all/modules/` folder. You will need to place your custom modules in this directory (subfolders should be okay) or change the `gulpfile.js` to watch for changes in a different directory._

### License
MIT 2016, Joe Karasek
