class Poem {
    constructor() {
        this.rawText = "";
        this.lines = [];
        this.currLine = 0;
    
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
        
            self.alignmentWeight = 1;
            self.cohesionWeight = 1;
            self.separationWeight = 1;
        }
    }).bind(this)();

    getAlignmentWeight() {
        return this.alignmentWeight;
    }
    
    getCohesionWeight() {
        return this.cohesionWeight;
    }
    
    getSeparationWeight() {
        return this.separationWeight;
    }
    
    incrementLine() {
        if (this.currLine < this.lines.length) {
            ++this.currLine;
        }
    }
    
    updateSeparationWeight() {
        if (this.lines[this.currLine] == '<NL>') {
            this.separationWeight += 0.5;
        }
    }
}