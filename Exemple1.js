class Exemple1 extends Phaser.Scene    {
constructor(){
super({key:"Exemple1"});
}
	
	preload(){
	
	this.load.images('gfs','assets/31073087_2094780174099376_3704042283549589504_n.jpg'}
	

}

create(){
	
	this.image=this.add.imagge(400,300,'GFS');
	
	
	}


}
