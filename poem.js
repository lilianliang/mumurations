function Poem() {
    this.poemText = document.getElementsByName('input')[0].value;
    var numberOfLineBreaks = (this.poemText.match(/^\n/gm)||[]).length;
    console.log(numberOfLineBreaks);
    console.log(this.poemText);
}

Poem.prototype.separationWeight = function() {
    
}