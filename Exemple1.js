class Exemple1 extends Phaser.Scene    {
constructor(){
super({key:"Exemple1"});
}
	
	preload(){
	
	 this.load.image('GFS','assets/31073087_2094780174099376_3704042283549589504_n.jpg');
      

}

create(){
	
	 this.add.image(400,300,'GFS');
	}


}
