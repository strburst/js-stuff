function Point(x, y) {
    this.x = x;
    this.y = y;
}

// Define a grid object
function Grid(width, height) {
    this.space = new Array(height);
    this.width = width;
    this.height = height;
}
// Whether a point is a valid location in the grid
Grid.prototype.isInside = function(point) {
    return point.x >= 0 && point.x < this.width &&
        point.y >= 0 && point.y < this.height;
};
// Get the object at a specific point
Grid.prototype.get = function(point) {
    return this.space[point.x][point.y];
};
// Set the object at a specific point to a value
Grid.prototype.set = function(point, value) {
    this.space[point.x][point.y] = value;
};

function legendLookup(legend, char) {
    if (char == ' ') return null;
    var element = new legend[ch]();
    element.fromChar = char;
    return element;
}

function World(map, legend) {
    this.grid = new Grid(map[0].length, map.length);
    this.legend = legend;

    for (int i = 0; i < map.length; i++) {
        for (int j = 0; j < map[i].length; j++) {
            grid.set(new Point(i, j), legendLookup(map[i][j]));
        }
    }
}

var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];
