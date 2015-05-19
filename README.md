# Static HTML site using Susy Bourbon Gulp

## Built Using Proteus
[Proteus](http://github.com/thoughtbot/proteus) is a collection of useful
starter kits to help you prototype faster. It follows the
[thoughtbot styleguide](https://github.com/thoughtbot/guides) and includes our
favorite front end tools.

Includes
--------
* [Gulp](http://gulpjs.com): Converts files and task running
* [HAML](http://haml.info):
  Simple template markup
* [Coffeescript](http://coffeescript.org):
  Write javascript with simpler syntax
* [Sass](http://sass-lang.com):
  CSS with superpowers
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon (*Replaced with Susy*)
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Express](http://expressjs.com): Lightweight Node web server

We also recommend [Refills](http://refills.bourbon.io/) for prepackaged interface patterns.

Getting Started
---------------
Set up your project in your code directory
```
git clone git@github.com:thoughtbot/proteus-gulp.git your-project-folder
cd your-project-folder
git remote rm origin
git remote add origin your-repo-url
```

Install the dependencies
```
npm install
```

Run the server
```
gulp
```

Deploy to Github Pages

```
git add . # Add any untracked files
git commit -va # Commit the changes
git push # Push it to Github
```

You'll also need to make sure you have a gh-pages branch, if you don't already.

```
git checkout --orphan gh-pages
git rm -rf .
touch README.md
git add README.md
git commit -m "Init gh-pages"
git push --set-upstream origin gh-pages
git checkout master
```

```
gulp deploy
```

See guide on [gulp and gh-pages](http://charliegleason.com/articles/deploying-to-github-pages-with-gulp).

Or install the [Proteus gem](https://github.com/thoughtbot/proteus) and enjoy some shortcuts.

Stylesheets, images, fonts, and javascript files go in the `/source/assets/` directory.
Vendor stylesheets and javascripts should go in each of their `/vendor/` directories.
The source folders for images and fonts have a `.keep` file in them so they can be in the repo, but you can remove those files.

# app-html-emporium
