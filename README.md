# endive #
Simplistic SCSS framework to assist in rapid front-end development

### Features ###
* Light-weight
* Add new classes easily with mixins
* Unified variables file
* Gulp-ready
* Easy to pick and choose components you want

The framework is broken up into two folders, **/mixins** and **/partials**. The classes and styles are created in /partials, which utilize the matching file in /mixins.

### Examples ###
Endive uses mixins to build a lot of the default classes included in the framework. For example, let's take a look at the primary button class **.button.button-primary** built with the following mixin:

    @include make-button('primary', $color-primary);

This yields a button with the additional class .button-primary and a background with the color stored in the $color-primary variable. The full mixin parameters are:

    @mixin make-button(
        $title,
        $background,
        $color: $button-color,
        $padding: $button-padding,
        $font-size: $button-font-size
    ) {}

As you can see, the $title and $background attributes are the only ones required by the mixin, the others pull in default values stores in the main **base/_variables.scss** file.

For responsive development, this framework is built mobile-first. All attributes start off as mobile-facing and as the screen size is scaled up, are changed accordingly. Utilize the following mixin to adjust styles depending on screen size:

    .some-class {
        width: 100%; /* Mobile width */

        @include make-scale($breakpoint-medium) {
            width: 720px; /* Tablet width */
        }
    }

The default breakpoints, stored in the **_variables.scss** file, are as follows:

    $breakpoint-small: 480px;
    $breakpoint-medium: 768px;
    $breakpoint-large: 1024px;
    $breakpoint-xlarge: 1200px;

### Usage ###
You can include endive in your project by cloning the repo directly into your project and running **gulp** from the root project directory. This will compile the main endive.scss file and dump *endive.css* and a minified *endive.min.css* file into the build directory.

Alternatively you can run **npm install endive-scss** which will add the project to **node_modules/endive-scss**, at which point you can reference either the pre-built CSS files or endive.scss to add to your current project.