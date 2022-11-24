enum Signals{
    RED = 'STOP',
    YELLOW = 'WAIT',
    GREEN = 'GO'
}
function checkSignals(signal:Signals){
    console.log(signal);
}
checkSignals(Signals.RED);