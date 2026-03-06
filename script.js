// ETA Calculator

function calculateETA() {
    const distance = document.getElementById("distanceInput").value;
    const speed = document.getElementById("speedInput").value;

    if (distance > 0 && speed > 0) {
        let hours = distance / speed;
        let minutes = hours * 60;

        let today = new Date();

        let milliseconds = minutes * 60 * 1000;
        let etaMilliseconds = today.getTime() + milliseconds;

        let eta = new Date(etaMilliseconds).toLocaleTimeString();
        let travelMinutes = Math.round(minutes);

        document.getElementById("result").innerHTML = `
            <strong> Travel Time: ${travelMinutes} minutes </strong>
            <br/>
            <strong> Arrival Time: ${eta} </strong>
        `;
    }

    else{
        document.getElementById("result").innerHTML = "Error: Invalid input";
    }

   
}