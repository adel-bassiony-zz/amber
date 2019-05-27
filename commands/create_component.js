// include node fs module
var fs = require('fs');

// Components Command
var arg = process.argv[2];
var component_name = arg.split("/").pop();
var file_path = arg + '.scss';

var file_content = `/* ----------------------------------------------------------------------------------------------------------------------------------------------------
Basic Styles
---------------------------------------------------------------------------------------------------------------------------------------------------- */


/* ----------------------------------------------------------------------------------------------------------------------------------------------------
Responsive Styles
---------------------------------------------------------------------------------------------------------------------------------------------------- */
// Small devices (landscape phones, 576px and up)
@mixin ${component_name}_sm (){

}

// Medium devices (tablets, 768px and up)
@mixin ${component_name}_md (){

}

// Large devices (desktops, 992px and up)
@mixin ${component_name}_lg (){

}

// Extra large devices (large desktops, 1200px and up)
@mixin ${component_name}_xl (){

}`;

// writeFile function with filename, content and callback function
fs.writeFile(file_path, file_content, function (err) {
    if (err) throw err;
    
    console.log(` => Creating New Component ----------------------------------------------------------------------------------------------------`);

    console.log('\x1b[35m', `Component: ${component_name} is created in ( ${process.argv[2]}.scss ) successfully!`, '\x1b[35m');

    // Append scss File to all
    fs.appendFile('sass/components/_all.scss', '@import "../../' + process.argv[2] + '";\n', function (err) {
        if (err) throw err;
        console.log('\x1b[35m', `Component: ${component_name} is imported successfully in your project!`, '\x1b[35m');
    });

    // Media Screen Sizes
    var sizes = ['sm', 'md', 'lg', 'xl'];
    
    // Function to include the mixin in any screen size
    function createScreenSize(screenSize) {
        fs.readFile('sass/responsive/_' + screenSize +'.scss', function (err, data) {
            if (err) throw err;

            var array = data.toString().split("\n");
            var mixinName = `    @include ${component_name}_${screenSize};`;
            array.pop();

            array.push(mixinName, '}');

            fs.writeFile('sass/responsive/_' + screenSize + '.scss', '', function () {
                console.log('\x1b[36m', `Component: ${component_name} Mixin has been Included in the _${screenSize} file`, '\x1b[0m');
            });

            fs.appendFile(`sass/responsive/_${screenSize}.scss`, array.join('\n'), function (err) {
                if (err) throw err;
            });

        });
    }

    // Loop on all screen sizes
    for(let i = 0; i < sizes.length; i++){
        createScreenSize(sizes[i]);
    }

});