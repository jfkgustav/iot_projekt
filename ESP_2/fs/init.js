load('api_timer.js');
load('api_gpio.js');
load('api_sys.js'); // For GPIO read function
load('api_adc.js');
load('api_pwm.js');
load('api_i2c.js');


let digitalPIN = 36;
let ledPIN = 32;

//ADC.enable(digitalPIN);

GPIO.set_mode(digitalPIN, GPIO.MODE_INPUT);
GPIO.setup_output(ledPIN, 0);


function min_timer_callback() {

	//let val = ADC.read(digitalPIN); // read pin 3 to val
	//let val = analogRead(digitalPIN);
	//print('value is: ' val);
	
	let checkV = GPIO.read(digitalPIN);
	GPIO.write(ledPIN, checkV);
	
	
	print('GPIO: ' + checkV);
	MQTT.pub('SENSOR', checkV);
	
}

Timer.set(100, Timer.REPEAT, min_timer_callback, null);