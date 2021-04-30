class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(185,200);
        this.access1.style('background', 'OrangeRed');
        this.access1.style('width','278px');
        this.access1.style('height','25px');

        this.access2 = createInput("Code2")
        this.access2.position(1455,200);
        this.access2.style('background', 'DeepSkyBlue');  
        this.access2.style('width' , '278px');
        this.access2.style('height' , '25px');


        this.access3 = createInput("Check");
        this.access1.position(200,500);
        this.access1.style('background', 'Black');
        this.access1.style('width','278px');
        this.access1.style('height','25px');


        this.button1 = createButton('Check');
        this.button1.position(290,260);
        this.button1.style('background', 'OrangeRed');    
        this.button1.style('height' , '30px');
        this.button1.style('width' , '100px');

        

        
      
//add code for creating and positioning the third input box and button
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
//add code for what happens when the third button is pressed
        

    }
}