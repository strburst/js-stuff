function Point(x, y) {
    this.x = x;
    this.y = y;
}
// Return a new point that's the sum of this point and the other
Point.prototype.plus = function(other) {
    return new Point(this.x + other.x, this.y + other.y);
}

function Gol(width, height, torus, birthRule, liveRule) {
    // Default: standard Conway's Game of Life rules
    this.birthRule = birthRule || [0, 0, 0, 1, 0, 0, 0, 0, 0];
    this.liveRule = liveRule || [0, 0, 1, 1, 0, 0, 0, 0, 0];

    var grid = Array(width);
    for (var i = 0; i < grid.length; i++) {
        var row = Array(height);
        for (var j = 0; j < row.length; j++) {
            row[j] = Math.random() < .5 ? 1 : 0;
        }
        grid[i] = row;
    }
    this.grid = grid;
    this.width = width;
    this.height = height;
}
// Whether a point is a valid location in the grid
Gol.prototype.isInside = function(point) {
    return point.x >= 0 && point.x < this.width &&
        point.y >= 0 && point.y < this.height;
}
// Get a list of values of surrounding cells in a grid
Gol.prototype.getSurr = function(point) {
    var directions = [ new Point(-1, -1), new Point(-1, 0), new Point(-1, 1),
        new Point(0, -1), new Point(0, 1), new Point(1, -1), new Point(1, 0),
        new Point(1, 1) ];
    var result = [];
    directions.forEach(function(dir) {
        var index = point.plus(dir);
        if (this.isInside(index)) {
            result.push(this.grid[index.x][index.y]);
        }
    }, this);
    return result;
}
// Flat string representation of a grid
Gol.prototype.toString = function() {
    function rowToStr(row) {
        var result = '';
        row.forEach(function(elem) {
            result += elem ? '█' : ' ';
        });
        return result;
    }

    var str = this.grid.reduce(function(a, b) {
        return a + rowToStr(b) + '\n';
    }, "");
    return str.slice(0, -1); // Cut out the last newline
}
// Advance the grid to its next state
Gol.prototype.next = function() {
    function sumList(arr) {
        return arr.reduce(function(a, b) {
            return a + b;
        }, 0);
    }

    var newGrid = Array(this.width);
    for (var i = 0; i < this.width; i++) {
        var row = Array(this.height);
        for (var j = 0; j < this.height; j++) {
            var livingNeighbors = sumList(this.getSurr(new Point(i, j)));
            if (this.grid[i][j]) {
                row[j] = this.liveRule[livingNeighbors];
            } else {
                row[j] = this.birthRule[livingNeighbors];
            }
        }
        newGrid[i] = row;
    }
    this.grid = newGrid;
}

function test(iter) {
    var birthRule = [0, 0, 0, 1, 0, 0, 0, 0, 0];
    var liveRule = [0, 0, 1, 1, 0, 0, 0, 0, 0];
    // var birthRule = [ 0, 0, 0, 1, 0, 0, 0, 0, 0 ];
    // var liveRule = [ 0, 0, 0, 0, 1, 1, 1, 1, 1 ];
    function repeatChar(char, len) {
        var result = "";
        for (var i = 0; i < len; result += char, i++);
        return result;
    }
    var hyphens = repeatChar('-', 50);

    function advance(gol, iter) {
        if (iter <= 0) return;
        gol.next();
        console.log(hyphens);
        console.log(gol.toString());
        setTimeout(function() {advance(gol, iter - 1)}, 100);
    }
    advance(new Gol(50, 50), iter);
    // advance(new Gol(50, 50, birthRule, liveRule), iter);
}

// test(100);
