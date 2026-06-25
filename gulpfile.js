import gulp from "gulp";
import shell from "gulp-shell";

const parcelEntry = "index.html";

// Create an optimized production build in dist/.
export const build = shell.task("npm run build");

// Run Parcel's development server after the production build exists.
// A separate output directory prevents the dev server from overwriting dist/.
export const serve = shell.task(
  `npx parcel ${parcelEntry} --dist-dir .parcel-dev --host 0.0.0.0 --port 1234`
);

export const test = shell.task('npx mocha "test/**/*.js"');
export const cypress = shell.task("npx cypress run");
export const lint = shell.task("npx eslint src test cypress");
export const format = shell.task("npx prettier --write .");
export const verify = gulp.series(lint, test, build);

// Udacity requirement: the default Gulp task builds and serves with Parcel.
export default gulp.series(build, serve);
