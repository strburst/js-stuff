function TestObj(name, imageLoc, property1, property2) {
  this.name = name;
  this.imageLoc = imageLoc;
  this.property1 = property1;
  this.property2 = property2;
}

TestObj.prototype.buildHtml = function() {
  return "<p><h4>" + this.name + "</h4>" + "<img src='" + this.imageLoc
    + "' /></p>";
}

var testObjs = [
  new TestObj("thing1",
      "https://www.dropbox.com/s/n7zaiz98pswooox/test1.png?dl=1", true, true),
  new TestObj("thing2",
      "https://www.dropbox.com/s/24voelgzqn8eqtm/test2.png?dl=1", true, false),
  new TestObj("thing3",
      "https://www.dropbox.com/s/k1473f9n5beg7s5/test3.png?dl=1", false, true),
  new TestObj("thing4",
      "https://www.dropbox.com/s/ci7xyvbf6xg4kj5/test4.png?dl=1", false, false)
];

// Determine which properties are checked, lookup matches among testObjs, and
// display html
function handleSearch() {
  var checkedProperties = [];
  $("input[type=checkbox]").filter(":checked").each(function(index, value) {
    checkedProperties.push($(value).attr("id"))
  });

  var matches = getMatches(checkedProperties, testObjs);
  var resultHtml = matches.reduce(function(prev, elem) {
    return prev + elem.buildHtml();
  }, "");

  $("#resultArea").html(resultHtml);
}

// Get the elements in objects that have true for all the given properties
function getMatches(propertyList, objects) {
  return objects.filter(function(obj) {
    return propertyList.every(function(property) {
      return obj[property];
    })
  });
}
