function Poem() {
    this.rawText = document.getElementsByName('input')[0].value.replace(/^\n/gm, '<NL>\n');
    this.lines = this.rawText.split('\n');
    this.currLine = 0;
}

Poem.prototype.incrementLine = function() {
    ++this.currLine;
}

Poem.prototype.separationWeight = function() {
    
}