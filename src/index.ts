
class Query{
	private list:Function[]=[];
	enqueue(fn:()=>void):this{
		this.list.push(fn);
		return this;
	}
	dequeue():Function{
		return this.list.shift();
	}
}
class Animte{
	private element:Element|null;
	private timer:number=0;
	private fns:object[]|Function[];
	constructor(element:Element|null){
		this.element=element;
		this.fns=[];
	}
}
function Xa(arg:Element|string|null):Animte{
	let element:Element|null;
	if(typeof arg==='string'){
		element=document.querySelector(arg);
	}else{
		element=arg;
	}
	return new Animte(element)
}