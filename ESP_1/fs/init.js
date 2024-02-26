load('api_gpio.js');
load('api_timer.js');
let motion_sensor = 21;

GPIO.set_mode(motion_sensor, GPIO.MODE_INPUT);

let motion = 0;
let no_motion = 0;

GPIO.set_button_handler(motion_sensor, GPIO.PULL_UP, GPIO.INT_EDGE_ANY, 20, function() {
    if(GPIO.read(motion_sensor) === 0){
        print("Motions: ", motion++);
    }

}, null)

//Lägger till något

let fuck;

let fuckfuck;