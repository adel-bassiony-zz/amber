const fs = require('fs');

// Define Basic Variables
var sass_dir = './sass';
var sass_components_dir = './sass/components';
var sass_base_dir = './sass/base';
var sass_responsive_dir = './sass/responsive';

// Create Sass Structure
function createStructure() {

    // SASS Folder
    if (!fs.existsSync(sass_dir)) {
        fs.mkdirSync(sass_dir);
    }

    // Base Folder
    if (!fs.existsSync(sass_base_dir)) {
        fs.mkdirSync(sass_base_dir);
    }

    // Components Folder
    if (!fs.existsSync(sass_components_dir)) {
        fs.mkdirSync(sass_components_dir);
    }

    // Responsive Folder
    if (!fs.existsSync(sass_responsive_dir)) {
        fs.mkdirSync(sass_responsive_dir);
    }
}

// CopyBaseFiles
function copyBaseFiles() {

    // Copy: Base =>  _colors
    fs.copyFile('amber/sass/base/_colors.scss', 'sass/base/_colors.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _functions
    fs.copyFile('amber/sass/base/_functions.scss', 'sass/base/_functions.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _general
    fs.copyFile('amber/sass/base/_general.scss', 'sass/base/_general.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _mixins
    fs.copyFile('amber/sass/base/_mixins.scss', 'sass/base/_mixins.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _reset
    fs.copyFile('amber/sass/base/_reset.scss', 'sass/base/_reset.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _typography
    fs.copyFile('amber/sass/base/_typography.scss', 'sass/base/_typography.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _variables_ltr
    fs.copyFile('amber/sass/base/_variables_ltr.scss', 'sass/base/_variables_ltr.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Base =>  _variables_rtl
    fs.copyFile('amber/sass/base/_variables_rtl.scss', 'sass/base/_variables_rtl.scss', (err) => {
        if (err) throw err;
    });
}

// CopyComponentsFiles
function copyComponentsFiles() {
    // Copy: Components =>  _all
    fs.copyFile('amber/sass/components/_all.scss', 'sass/components/_all.scss', (err) => {
        if (err) throw err;
    });
}

// CopyResponsiveFiles
function copyResposniveFiles() {

    // Copy: Responsive =>  _all
    fs.copyFile('amber/sass/responsive/_all.scss', 'sass/responsive/_all.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Responsive =>  _sm
    fs.copyFile('amber/sass/responsive/_sm.scss', 'sass/responsive/_sm.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Responsive =>  _md
    fs.copyFile('amber/sass/responsive/_md.scss', 'sass/responsive/_md.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Responsive =>  _lg
    fs.copyFile('amber/sass/responsive/_lg.scss', 'sass/responsive/_lg.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Responsive =>  _xl
    fs.copyFile('amber/sass/responsive/_xl.scss', 'sass/responsive/_xl.scss', (err) => {
        if (err) throw err;
    });
}

// CopyStyleFiles
function copyStyleFiles() {

    // Copy: Responsive =>  _all
    fs.copyFile('amber/sass/style.scss', 'sass/style.scss', (err) => {
        if (err) throw err;
    });

    // Copy: Responsive =>  _all
    fs.copyFile('amber/sass/style-rtl.scss', 'sass/style-rtl.scss', (err) => {
        if (err) throw err;
    });
    
}


// Execute Functions
createStructure();
copyBaseFiles();
copyComponentsFiles();
copyResposniveFiles();
copyStyleFiles();