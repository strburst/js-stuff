function triangle(height) {
    var triangleStr = '';
    for (i = 0; i < height; i++) {
        for (j = 1; j <= i + 1; j++) {
            triangleStr += '#';
        }
        triangleStr += '\n';
    }
    return triangleStr;
}

console.log(triangle(7));
