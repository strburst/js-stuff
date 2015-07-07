function Sequence() {}
Sequence.prototype.next = null;
Sequence.prototype.hasNext = null;

ArraySeq.prototype = Object.create(Sequence.prototype);
function ArraySeq(arr) {
    this.base = arr;
    this.index = 0;
}
ArraySeq.prototype.next = function() {
    return this.base[this.index++];
};
ArraySeq.prototype.hasNext = function() {
    return this.index < this.base.length;
}

RangeSeq.prototype = Object.create(Sequence.prototype);
function RangeSeq(start, end) {
    this.start = start;
    this.end = end;
    this.nextElem = start;
}
RangeSeq.prototype.next = function() {
    if (this.hasNext()) {
        return this.nextElem++;
    }
};
RangeSeq.prototype.hasNext = function() {
    return this.nextElem < this.end;
}

function logFive(seq) {
    for (var i = 0; i < 5 && seq.hasNext(); i++) {
        console.log(seq.next());
    }
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
