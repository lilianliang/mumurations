const MAX_WEIGHT = 5;

class Poem {
    constructor() {
        this.rawText = "";
        this.lines = [];
        this.currLine = 0;

        this.totalWordCount= 0;
    
        this.alignmentWeight = 1;
        this.cohesionWeight = 1;
        this.separationWeight = 1;
    }

    updatePoem = (function () {
        var self = this;
        return function () {
            self.rawText = document.getElementsByName('input')[0].value.replace(/^\n/gm, '<NL>\n');
            self.lines = poem.rawText.split('\n');
            self.currLine = 0;

            self.totalWordCount = self.lines[self.currLine].split(' ').length;
        
            self.alignmentWeight = 1;
            self.cohesionWeight = 1;
            self.separationWeight = 1;
        }
    }).bind(this)();
    
    incrementLine() {
        if (this.currLine < this.lines.length) {
            ++this.currLine;
        }
    }

    updateCohesionWeight() {
        if (this.cohesionWeight <= MAX_WEIGHT && this.currLine != 0 
            && this.currLine < this.lines.length) {
            var prevAvg = this.totalWordCount / (this.currLine);
            // console.log("prevAvg: " + prevAvg);
            // console.log("prev word count: " + this.totalWordCount);
            // console.log("prev currLine: " + this.currLine);
            // console.log(this.lines[this.currLine].split(' '));
            this.totalWordCount += this.lines[this.currLine].split(' ').length;
            var avg = this.totalWordCount / (this.currLine + 1);
            // console.log("avg: " + avg);
            // console.log("word count: " + this.totalWordCount);
            // console.log("currLine: " + (this.currLine+1));
            // if (avg > prevAvg) {
            //     this.cohesionWeight += 0.5;
            // } else if (avg < prevAvg) {
            //     this.cohesionWeight -= 0.5;
            // }
            var diff = Math.abs(avg - prevAvg);
            console.log("avg diff: " + diff);
            if (diff > 1) {
                this.cohesionWeight -= 0.5;
            } else {
                this.cohesionWeight += 0.2;
            }
        }
    }
    
    updateSeparationWeight() {
        if (this.separationWeight <= MAX_WEIGHT && this.lines[this.currLine] == '<NL>') {
            this.separationWeight += 0.5;
        }
    }
}