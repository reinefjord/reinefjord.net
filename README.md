# reinefjord.net
My personal website, version 2.

For building to work,
[PostCSS CLI](https://www.npmjs.com/package/postcss-cli) have to be available
on your `$PATH`, and its plugins
[Autoprefixer](https://www.npmjs.com/package/autoprefixer) and
[postcss-csso](https://www.npmjs.com/package/postcss-csso) must be installed.

The source code is in `src/`, builds are output to `build/`.

## utils
`utils` is a very rough tool for building the site. Lots of stuff is hardcoded.
If you do changes to the structure of `src/`, you'll have to change stuff in
`utils` for it to work.

```
utils build   Build site
utils clean   Clean build directory (completely empties `build/`)
utils serve   Run a development server
```
