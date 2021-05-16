const TypeWriter = function(txtElements) {
	

		this.txtElements = txtElements
		this.indexOfElements=0;
		this.maxIndex = txtElements.length;
		this.txtElement=txtElements[this.indexOfElements];
		this.words=JSON.parse(this.txtElement.getAttribute('data-words'));
		this.txt='';
		
		//new stuff
		this.id =this.txtElement.getAttribute('id');
		
		this.element = document.getElementById(this.id);
		this.element.style.borderRight = "0.2rem solid indigo";
		
		
		this.wait = parseInt(this.txtElement.getAttribute(''),10);
		this.type();

	
}

//Type method

TypeWriter.prototype.type = function() {

	
	const fullTxt = this.words.toString();

	this.txt = fullTxt.substring(0, this.txt.length + 1);
	
		
	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
	
	
	if (fullTxt != this.txt){
	setTimeout( () => this.type(), 40)
	}else if (this.indexOfElements < this.maxIndex-1){
		
		
		this.element.style.borderRight = "none";
		
		
		this.indexOfElements++;
		this.txtElement=this.txtElements[this.indexOfElements];
		
		console.log(this.txtElement);
		this.words=JSON.parse(this.txtElement.getAttribute('data-words'));
		this.txt='';
		this.id=this.txtElement.getAttribute('id');
		this.element = document.getElementById(this.id);
		this.element.style.borderRight = "0.2rem solid indigo";
		this.type();
		
		
	}else{
		return;
	}
	
	
}
//Init On Dom Load

function sleep(milliseconds) {
	  const date = Date.now();
	  let currentDate = null;
	  do {
	    currentDate = Date.now();
	  } while (currentDate - date < milliseconds);
}

document.addEventListener('DOMContentLoaded',init);

function init(){
	console.log("Why are you looking at my console? There's nothing here. There are no errors. " +
			"Sunil doesn't make mistakes. There is no log. " +
			"Sunil doesn't keep track of anything. (If you are an employer both of those things are not true)");
	
	const txtElement = document.querySelectorAll('.txt-type');
	
	new TypeWriter(txtElement);
	

	
}